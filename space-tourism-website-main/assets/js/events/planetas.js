import { fetchData } from "../helpers/helpers.js";
import { renderDataItems } from "../renders/renderData.js";

export const cambiarPlaneta = async (destinationPlantes) => {
  const planetas = await fetchData();
  let select = '';
  destinationPlantes.forEach(element => {
    if (element.classList.contains('destination__lista--active')) {
      select = element;
    }
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const planeta = element.textContent;
      let dataPlaneta = planetas.filter(p => p.name.toLowerCase() == planeta.toLowerCase())
      dataPlaneta = dataPlaneta[0];
      renderDataItems(dataPlaneta)
      if (!element.classList.contains('destination__lista--active')) {
        element.classList.add('destination__lista--active');
        select.classList.remove('destination__lista--active');
      }
      select = element;
    })
  });
}