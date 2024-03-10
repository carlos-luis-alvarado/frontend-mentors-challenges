import { setImage } from "../helpers/helpers.js";
import { renderMain } from "../renders/navegacion.js";
import { cambiarCrew } from "./crew.js";
import { cerrarMenu } from "./menu.js";
import { cambiarPlaneta } from "./planetas.js";
import { cambiarTech } from "./technology.js";

export const cambiarPagina = (navegacionPage) => {
  let select = '';
  navegacionPage.forEach(element => {

    if (element.classList.contains('navegacion__lista--active')) {
      select = element;
    }
    element.addEventListener('click', async (e) => {
      e.preventDefault();
      window.location.hash = '/' + element.id;
      await renderMain(element);
      const body = document.querySelector('.body');
      const fondoActive = body.classList[1];
      switch (element.id) {
        case 'home':
          body.classList.replace(fondoActive, 'fondo')
          break;
        case 'destinations':
          const destinationPlantes = document.querySelectorAll('.destination-planets');
          cambiarPlaneta(destinationPlantes);
          body.classList.replace(fondoActive, 'fondo-destinations')

          break;
        case 'crew':
          const crews = document.querySelectorAll('.crews-person');
          cambiarCrew(crews);
          body.classList.replace(fondoActive, 'fondo-crews')
          break;
        case 'technology':
          const tagImg = document.querySelector('.type-img-tech');
          setImage(tagImg);
          const techMachines = document.querySelectorAll('.tech-machines');
          cambiarTech(techMachines);
          body.classList.replace(fondoActive, 'fondo-tech')
          break;
        default:
          console.log('Error');
          break;
      }
      if (!element.classList.contains('navegacion__lista--active')) {
        element.classList.add('navegacion__lista--active');
        select.classList.remove('navegacion__lista--active');
      }
      select = element;
      cerrarMenu();
    })
  })
}
