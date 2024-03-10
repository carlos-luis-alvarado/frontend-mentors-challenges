import { fetchData, getTypeImg } from "../helpers/helpers.js";
import { renderDataItems } from "../renders/renderData.js";
export const cambiarTech = async(techMachines)=>{
  const tech_data = await fetchData(); 
  let select = '';
  techMachines.forEach(element => {
    if(element.children[0].classList.contains('tech__button--activa')){
      select = element;
    }
    element.addEventListener('click', (e) => { 
      e.preventDefault();
      const tech = element.id - 1;
      let data = tech_data[tech]
      let imgInfo = getTypeImg();
      renderDataItems(data,imgInfo);
      if(!element.children[0].classList.contains('tech__button--activa')){
        element.children[0].classList.add('tech__button--activa');
        select.children[0].classList.remove('tech__button--activa');
      }
      select = element; 
    });   
  });
}