export const renderMain = async (element) => {
  const archivo = window.origin + '/' + element.id + '.html';
  const i = await (await fetch(archivo)).text()
  const main = document.querySelector('.main');
  main.innerHTML = i;
}