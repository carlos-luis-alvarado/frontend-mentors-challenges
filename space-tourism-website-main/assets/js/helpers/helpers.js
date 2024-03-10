export const fetchData = async () => {
  const data = await fetch(window.origin + '/data.json');
  let consultaDB = await data.json();
  const pagina = location.hash.slice(2, location.hash.length);
  consultaDB = consultaDB[pagina]
  return consultaDB;
}

export const getTypeImg = () => {
  let imgInfo = 'landscape';
  if (document.documentElement.clientWidth >= 992) {
    imgInfo = 'portrait'
  }
  return imgInfo
}
export const setImage = (tagImg) => {
  if (document.documentElement.clientWidth >= 992 && tagImg) {
    const re = /landscape/gi;
    let img = tagImg.src.replace(re, 'portrait')
    tagImg.src = img;
  } else {
    const re = /portrait/gi;
    let img = tagImg.src.replace(re, 'landscape')
    tagImg.src = img;
  }
}