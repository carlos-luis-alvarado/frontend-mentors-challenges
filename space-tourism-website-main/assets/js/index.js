import { mostrarMenu, cerrarMenu } from "./events/menu.js";
import { cambiarPagina } from "./events/navegacion.js";
import { renderMain } from "./renders/navegacion.js";

const button_hamburger = document.querySelector('.icon-hamburger');
if (button_hamburger) {
  button_hamburger.addEventListener('click', mostrarMenu);
}

const button_close = document.querySelector('.icon-close');
if (button_close) {
  button_close.addEventListener('click', cerrarMenu)
}

const navegacionPage = document.querySelectorAll('.navegacion-page');
if (navegacionPage) {
  cambiarPagina(navegacionPage)
}
document.addEventListener('DOMContentLoaded', async () => {
  const navegacionPage = document.querySelectorAll('.navegacion-page');
  await renderMain(navegacionPage[0]);
  window.location.hash = '/' + 'home';
})

window.addEventListener('resize', () => {
  const tagImg = document.querySelector('.type-img-tech');
  if (document.documentElement.clientWidth >= 992 && tagImg) {
    const re = /landscape/gi;
    let img = tagImg.src.replace(re, 'portrait')
    tagImg.src = img;
  } else {
    if (tagImg) {
      const re = /portrait/gi;
      let img = tagImg.src.replace(re, 'landscape')
      tagImg.src = img;
    }
  }
})

