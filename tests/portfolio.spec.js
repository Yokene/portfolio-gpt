import { test, expect } from "@playwright/test";
import fs from "node:fs/promises";

test("project filters, case details, and keyboard dismissal work", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Создаю digital",
  );
  await expect(page.locator(".project-card:visible")).toHaveCount(3);
  await page.getByRole("button", { name: "Продукты", exact: true }).click();
  await expect(page.locator(".project-card:visible")).toHaveCount(1);
  await page
    .getByRole("button", { name: "Открыть проект Orbit", exact: true })
    .click();
  await expect(page.locator("#project-dialog")).toBeVisible();
  await expect(page.locator("#project-title")).toContainText("Orbit");
  await expect(
    page.getByRole("heading", { name: "Задача", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#project-dialog")).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Открыть проект Orbit", exact: true }),
  ).toBeFocused();
  await page
    .getByRole("button", { name: "Все проекты 03", exact: true })
    .click();
  await expect(page.locator(".project-card:visible")).toHaveCount(3);
  expect(errors).toEqual([]);
});

test("contact form validates inputs and downloads the actual brief", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".header-contact").click();
  const form = page.locator("#brief-form");
  await form.getByRole("button", { name: "Скачать бриф" }).click();
  await expect(form.locator("input[name=name]")).toBeFocused();
  await form.getByLabel("Как к вам обращаться").fill("Тестовый заказчик");
  await form.getByLabel("Ваш email").fill("hello@example.com");
  await form
    .getByLabel("Несколько слов о проекте")
    .fill("Нужен сайт для студии с каталогом проектов.");
  await form.getByLabel("Ориентировочный бюджет").selectOption("$1 500–3 000");
  const downloaded = page.waitForEvent("download");
  await form.getByRole("button", { name: "Скачать бриф" }).click();
  const download = await downloaded;
  expect(download.suggestedFilename()).toBe("project-brief.txt");
  const content = await fs.readFile(await download.path(), "utf8");
  expect(content).toContain("Тестовый заказчик");
  expect(content).toContain("Нужен сайт для студии");
  expect(content).toContain("$1 500–3 000");
  await expect(form.getByRole("status")).toContainText("Бриф готов");
});

test("mobile menu, cases and layout work on narrow screens", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Открыть меню", exact: true });
  await menu.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "Проекты" })
    .click();
  await expect(page.locator("#mobile-menu")).not.toBeVisible();
  await expect(page).toHaveURL(/#work$/);
  await page
    .getByRole("button", { name: "Открыть проект Mono", exact: true })
    .click();
  await expect(page.locator("#project-title")).toContainText("Mono");
  await page
    .getByRole("button", { name: "Закрыть проект", exact: true })
    .click();
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
  }
});

test("reduced motion keeps content visible and stops animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-asterisk svg")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".about-layout")).toHaveCSS("opacity", "1");
});
