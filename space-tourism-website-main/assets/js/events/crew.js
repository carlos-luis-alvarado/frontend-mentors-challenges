import { fetchData } from "../helpers/helpers.js";
import { renderDataItems } from "../renders/renderData.js";
export const cambiarCrew = async(crews)=>{
  const crews_data = await fetchData(); 
  let select = '';
  crews.forEach(element => {
    if(element.children[0].classList.contains('crew__button--activa')){
      select = element;
    }
    element.addEventListener('click', (e) => { 
      e.preventDefault();
      const crew = element.id - 1;
      let data = crews_data[crew]
      renderDataItems(data);
      if(!element.children[0].classList.contains('crew__button--activa')){
        element.children[0].classList.add('crew__button--activa');
        select.children[0].classList.remove('crew__button--activa');
      }
      select = element; 
    });   
  });
}