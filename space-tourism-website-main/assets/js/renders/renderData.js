export const renderDataItems = (data,imgInfo)=>{
  for (const clave in data) {
    const etiqueta = document.querySelector(`#${clave}`)
    if(clave=='images'){
      etiqueta.src = data[clave].webp||data[clave][imgInfo]
    }else{
      etiqueta.innerHTML = data[clave]
    }
  }
}