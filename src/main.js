import "./style.css";
import { profile, projects } from "./content.js";

const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>';
const star =
  '<svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 0v80M0 40h80M12 12l56 56M12 68l56-56" stroke="currentColor" stroke-width="7"/></svg>';

function artwork(project) {
  if (project.id === "forma")
    return `<div class="art forma-art"><div class="mini-top"><b>forma®</b><span>Архитектура вне времени ${arrow}</span></div><div class="architecture"><div class="building-shadow"></div><div class="building-main"></div><div class="building-side"></div><div class="building-window"></div><div class="building-step"></div></div><div class="forma-caption"><span>Пространство.<br>Свет. Жизнь.</span><small>ЧАСТНАЯ РЕЗИДЕНЦИЯ<br>КОЛЛЕКЦИЯ / 2026</small></div><span class="art-caption">01 — RESIDENTIAL</span></div>`;
  if (project.id === "orbit")
    return `<div class="art orbit-art"><span class="orbit-word">orbit<span>®</span></span><div class="dashboard"><div class="dash-side"><b>o<span>rbit</span></b><i class="selected">◈</i><i>▤</i><i>${arrow}</i><i>◎</i></div><div class="dash-body"><div class="dash-top"><span>Обзор</span><span class="avatar">A</span></div><div class="dash-balance"><small>Общий баланс</small><strong>₽ 248 500<span>.00</span></strong><em>${arrow} 12.8% за месяц</em></div><div class="chart"><div style="--bar:40%"></div><div style="--bar:58%"></div><div style="--bar:47%"></div><div style="--bar:72%"></div><div style="--bar:60%"></div><div style="--bar:83%"></div><div style="--bar:98%"></div></div><div class="dash-bottom"><span>Мои цели <b>${arrow}</b></span><div>Новая поездка <small>68%</small></div><i></i></div></div></div><span class="orbit-sticker">MAKE ROOM<br>FOR MORE ${arrow}</span></div>`;
  return `<div class="art mono-art"><div class="mini-top"><b>mono.</b><span>Objects for everyday living</span></div><div class="lamp"><div class="lamp-shade"></div><div class="lamp-stem"></div><div class="lamp-base"></div></div><div class="mono-title">обычное.<br><i>особенное.</i></div><div class="mono-bottom"><span>Коллекция 001<br>Свет & пространство</span><span class="mono-pill">Смотреть коллекцию ${arrow}</span></div></div>`;
}

function projectCard(p) {
  return `<button class="project-card" data-project="${p.id}" aria-label="Открыть проект ${p.name}"><div class="project-image">${artwork(p)}<span class="project-open">${arrow}</span></div><div class="project-info"><div><h3>${p.name} <span>/ ${p.number}</span></h3><p>${p.type}</p></div><span class="project-year">${p.year}</span></div></button>`;
}

document.querySelector("#app").innerHTML = `
  <header class="header"><a class="logo" href="#" aria-label="На главную">${profile.initials}<span>®</span></a><nav aria-label="Основная навигация"><a href="#work">Проекты <span>03</span></a><a href="#about">Обо мне</a><a href="#process">Подход</a></nav><button class="header-contact" data-contact>Обсудим проект ${arrow}</button><button class="menu-toggle" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></header>
  <nav id="mobile-menu" class="mobile-menu" aria-label="Мобильная навигация" inert><a href="#work">Проекты <small>03</small></a><a href="#about">Обо мне</a><a href="#process">Подход</a><button data-contact>Обсудим проект ${arrow}</button></nav>
  <main id="main">
    <section class="hero" aria-labelledby="hero-title"><div class="hero-meta"><span>${profile.name} <i>/</i> ${profile.role}</span><span class="availability"><i></i>${profile.availability}</span></div><div class="hero-layout"><div class="hero-copy"><p class="eyebrow">НЕ ПРОСТО ПИКСЕЛИ. ВПЕЧАТЛЕНИЯ.</p><h1 id="hero-title">Создаю digital,<br>который <span class="serif">имеет</span><br><span class="hero-last"><span class="serif">значение.</span><span class="hero-asterisk">${star}</span></span></h1><p class="hero-description">Соединяю дизайн и разработку, чтобы превращать<br class="desktop-break"> сложные задачи в простые, живые интерфейсы.</p><a class="button primary" href="#work">Смотреть проекты <span class="down-arrow">${arrow}</span></a></div><div class="hero-art" aria-label="Абстрактная орбитальная композиция" role="img"><div class="art-grid"></div><span class="art-coordinate top">FIG. 01 — CONNECTING THE DOTS</span><div class="orbital"><div class="orbit-ring ring-a"></div><div class="orbit-ring ring-b"></div><div class="orbit-ring ring-c"></div><div class="orbit-core"></div><div class="orbit-dot dot-a"></div><div class="orbit-dot dot-b"></div><span class="orbit-cross cross-a">+</span><span class="orbit-cross cross-b">+</span></div><div class="art-label"><span class="tiny-square"></span>DESIGN MEETS CODE</div><span class="art-coordinate bottom">55° → IDEAS WITHOUT BORDERS</span></div></div><div class="hero-bottom"><span>Независимый специалист.<br>Обдуманно. Внимательно. Вместе.</span><a href="#work" class="scroll-link">ЛИСТАЙТЕ НИЖЕ <span>↓</span></a><span class="hero-index">PORTFOLIO — 2026</span></div></section>
    <div class="strip-clip"><div class="discipline-strip" aria-hidden="true"><span>DESIGN</span><i>✳</i><span>DEVELOPMENT</span><i>✳</i><span>DETAILS MATTER</span><i>✳</i><span>DESIGN</span><i>✳</i><span>DEVELOPMENT</span></div></div>
    <section id="work" class="section work-section"><div class="section-kicker"><span>[ 01 — ИЗБРАННОЕ ]</span><span>ИДЕЯ → ИНТЕРФЕЙС → ОПЫТ</span></div><div class="section-heading"><h2>Меньше слов.<br><span class="serif">Больше дела.</span></h2><p>Несколько концепций о том, как хороший<br>дизайн делает сложное понятным.</p></div><div class="work-toolbar"><div class="filters" role="group" aria-label="Категории проектов"><button class="active" data-filter="Все" aria-pressed="true">Все проекты <span>03</span></button><button data-filter="Сайты" aria-pressed="false">Сайты</button><button data-filter="Продукты" aria-pressed="false">Продукты</button></div><span class="concept-note">КОНЦЕПТ-ПРОЕКТЫ ${arrow}</span></div><div class="project-grid">${projects.map(projectCard).join("")}</div><p class="work-footnote">Каждый проект — своя история. Нажмите на карточку, чтобы узнать больше.</p></section>
    <section id="about" class="section about-section"><div class="section-kicker"><span>[ 02 — ЧЕЛОВЕК ЗА ПИКСЕЛЯМИ ]</span><span>ПОЛЮБИТЬ ЗАДАЧУ. НАЙТИ РЕШЕНИЕ.</span></div><div class="about-layout"><div class="about-visual"><span class="about-visual-top">INDEPENDENT BY DESIGN</span><div class="monogram">a<span>m</span><i>®</i></div><div class="about-visual-bottom"><span>${profile.name}<br>Дизайнер & разработчик</span>${star}</div></div><div class="about-copy"><h2>Дизайнер по взгляду.<br><span class="serif">Разработчик<br>по мышлению.</span></h2><p>Мне интересен момент, когда идея становится чем-то настоящим. Когда за красивым экраном появляется ясная логика, а за каждой деталью — забота о человеке.</p><p>Работаю на стыке визуального дизайна и кода: от первой схемы до последнего адаптивного состояния. Верю в прямой диалог, осмысленные решения и внимание к мелочам.</p><div class="skill-tags"><span>UI / UX design</span><span>Creative development</span><span>Design systems</span><span>Interaction design</span></div><div class="about-sign"><span class="signature">Alex Mor</span><span>Внимание — в каждой детали.</span></div></div></div></section>
    <section id="process" class="section process-section"><div class="section-kicker"><span>[ 03 — КАК Я РАБОТАЮ ]</span><span>ХОРОШИЙ РЕЗУЛЬТАТ НАЧИНАЕТСЯ С ДИАЛОГА</span></div><div class="section-heading"><h2>От первого «привет»<br><span class="serif">до последнего пикселя.</span></h2></div><div class="process-grid"><article><span class="step-number">01 /</span><h3>Разбираемся</h3><p>Задаю вопросы, слушаю и погружаюсь в задачу. Определяем цель, аудиторию и то, как выглядит хороший результат.</p><span class="step-label">ДИАЛОГ & ИССЛЕДОВАНИЕ</span></article><article><span class="step-number">02 /</span><h3>Находим форму</h3><p>Собираю структуру и визуальное направление. Проверяем идеи на прототипе, прежде чем превращать их в дизайн.</p><span class="step-label">КОНЦЕПЦИЯ & ДИЗАЙН</span></article><article><span class="step-number">03 /</span><h3>Оживляем</h3><p>Перевожу дизайн в код. Продумываю адаптивность, движение и поведение — чтобы всё ощущалось естественно.</p><span class="step-label">РАЗРАБОТКА & ДЕТАЛИ</span></article><article><span class="step-number">04 /</span><h3>Доводим до ума</h3><p>Проверяем реальные сценарии и разные экраны. Исправляем шероховатости и готовим проект к запуску.</p><span class="step-label">ПРОВЕРКА & ЗАПУСК</span></article></div></section>
    <section id="contact" class="contact-section"><div class="contact-meta"><span class="availability"><i></i>Хорошие идеи начинаются с разговора</span><span>[ 04 — ВАШ СЛЕДУЮЩИЙ ПРОЕКТ ]</span></div><div class="contact-layout"><h2>Есть идея?<br><span class="serif">Давайте создадим.</span></h2><button class="contact-circle" data-contact aria-label="Обсудить проект">${arrow}</button></div><div class="contact-bottom"><p>Расскажите, что задумали.<br>Вместе найдём правильную форму.</p><button class="text-link" data-contact>Начать разговор ${arrow}</button></div></section>
  </main><footer><a class="logo" href="#" aria-label="Наверх">${profile.initials}<span>®</span></a><span>© 2026 · ${profile.name}<small>Демонстрационное портфолио</small></span><a class="back-top" href="#">Вернуться наверх ↑</a><span class="footer-note">СОЗДАНО С ВНИМАНИЕМ.</span></footer>
  <dialog id="project-dialog" class="project-dialog" aria-labelledby="project-title"><button class="dialog-close" aria-label="Закрыть проект">×</button><div class="project-dialog-body"></div></dialog>
  <dialog id="contact-dialog" class="contact-dialog" aria-labelledby="contact-title"><button class="dialog-close" aria-label="Закрыть форму">×</button><p class="eyebrow">С ПЕРВОГО ШАГА НАЧИНАЕТСЯ БОЛЬШОЕ</p><h2 id="contact-title">Расскажите<br><span class="serif">о вашей идее.</span></h2><p class="contact-intro">${profile.email ? "Подготовим письмо с деталями вашего проекта." : "Соберите короткий бриф и сохраните его, чтобы обсудить проект со специалистом."}</p><form id="brief-form"><label>Как к вам обращаться<input name="name" autocomplete="name" placeholder="Ваше имя" maxlength="100" required></label><label>Ваш email<input name="email" type="email" autocomplete="email" placeholder="you@example.com" maxlength="254" required></label><label>Несколько слов о проекте<textarea name="idea" placeholder="Что хотите создать и какую задачу решить?" rows="3" maxlength="3000" required></textarea></label><label>Ориентировочный бюджет<select name="budget"><option>Пока не определён</option><option>До $1 500</option><option>$1 500–3 000</option><option>$3 000–5 000</option><option>От $5 000</option></select></label><button type="submit" class="button primary">${profile.email ? "Подготовить письмо" : "Скачать бриф"} ${arrow}</button><p class="form-note">${profile.email ? "Откроется ваше почтовое приложение. Письмо отправляете вы." : "Данные остаются в вашем браузере. Форма ничего не отправляет."}</p><p class="form-status" role="status"></p></form></dialog>
`;

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.inert = true;
  menuButton.setAttribute("aria-label", "Открыть меню");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  mobileMenu.classList.toggle("open", open);
  mobileMenu.inert = !open;
});
mobileMenu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
matchMedia("(min-width: 761px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});

const projectDialog = document.querySelector("#project-dialog");
document.querySelector(".project-grid").addEventListener("click", (e) => {
  const card = e.target.closest("[data-project]");
  if (!card) return;
  const p = projects.find((item) => item.id === card.dataset.project);
  document.querySelector(".project-dialog-body").innerHTML =
    `<div class="dialog-art">${artwork(p)}</div><div class="case-content"><p class="eyebrow">${p.type} / КОНЦЕПЦИЯ</p><h2 id="project-title">${p.name}<span class="serif">${p.subtitle}</span></h2><p class="case-description">${p.description}</p><div class="case-details"><div><h3>Задача</h3><p>${p.challenge}</p></div><div><h3>Решение</h3><p>${p.solution}</p></div></div><div class="skill-tags">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div><p class="case-note">Авторская демонстрационная концепция. Изображения — иллюстрации интерфейса; коммерческий запуск и результаты не заявлены.</p><button class="button primary" data-case-contact>Обсудить похожий проект ${arrow}</button></div>`;
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  projectDialog
    .querySelector("[data-case-contact]")
    .addEventListener("click", () => {
      projectDialog.close();
      document.querySelector("#contact-dialog").showModal();
    });
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
});
document.querySelectorAll("[data-contact]").forEach((button) =>
  button.addEventListener("click", () => {
    closeMenu();
    document.querySelector("#contact-dialog").showModal();
  }),
);
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    document.querySelectorAll("[data-project]").forEach((card) => {
      const p = projects.find((item) => item.id === card.dataset.project);
      card.hidden =
        button.dataset.filter !== "Все" && p.category !== button.dataset.filter;
    });
  }),
);

document.querySelector("#brief-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const body = `БРИФ ПРОЕКТА\n\nИмя: ${data.get("name")}\nEmail: ${data.get("email")}\nБюджет: ${data.get("budget")}\n\nИдея:\n${data.get("idea")}\n`;
  if (profile.email) {
    location.href = `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent("Обсудим новый проект")}&body=${encodeURIComponent(body)}`;
    document.querySelector(".form-status").textContent =
      "Письмо подготовлено для вашего почтового приложения.";
  } else {
    const url = URL.createObjectURL(
      new Blob([body], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "project-brief.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.querySelector(".form-status").textContent =
      "Бриф готов. Сохраните файл и передайте его специалисту.";
  }
});

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
document
  .querySelectorAll(
    ".section-heading, .about-layout, .process-grid, .contact-layout",
  )
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
