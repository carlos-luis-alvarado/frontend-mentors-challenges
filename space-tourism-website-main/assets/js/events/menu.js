export const mostrarMenu = () => {
  const navegacion = document.querySelector('.navegacion');
  navegacion.classList.add('navegacion-visible')
}

export const cerrarMenu = () => {
  const navegacion = document.querySelector('.navegacion');
  navegacion.classList.remove('navegacion-visible')
}
