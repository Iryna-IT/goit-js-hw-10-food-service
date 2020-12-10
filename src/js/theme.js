// Тема
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const Ref = {
themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
body: document.querySelector('body'),
}

Ref.themeSwitchToggle.addEventListener("change", themeSwitch);

  if (localStorage.getItem('Theme') === "dark-theme") {
    Ref.themeSwitchToggle.setAttribute('checked', 'checked');
    Ref.body.classList.add('dark-theme');
  }

function themeSwitch(event) {
  Ref.body.classList.remove('dark-theme');
  Ref.body.classList.add('light-theme');
  localStorage.setItem('Theme', Theme.LIGHT);
    if (event.currentTarget.checked) {
      Ref.body.classList.remove('light-theme');
      Ref.body.classList.add('dark-theme');
      localStorage.removeItem('Theme');
      localStorage.setItem('Theme', Theme.DARK);
  }
}
