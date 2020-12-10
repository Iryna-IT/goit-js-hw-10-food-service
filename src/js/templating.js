import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const markup = menuTemplate(menu);
const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML('beforeend', markup);
