import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service'; /**esto es para que funcione el boton de agregar tarea, es para que cuando le hagan clickal boton escucharlo(o enterarse) y q se lo pase al otro componente( no se a cual) */
import { Subscription } from 'rxjs';  /**tiene que ver con el boton agregar tarea pero no se bien que funcion tiene esto que importo */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string ="Mi lista de tareas";
  showAddTask: boolean=false; /**al inicializar la pagina no se va a mostrar el formulario,aca decidimos que valor tenda inicialmente esta variable */
  subscription?:Subscription; /**no se que hace pero al poner  subscription? con signo de pregunta digo que es opcional*/

  constructor( private uiService:UiService) { /**aca llamamos al servicio lo inyectamos aqui */
    
  this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)/**esta funcion es para lograr q el boton agregar tarea cambie su valor del boolean cuando le hago click pasandose de verde a rojo o rojo a verde,creo que recibe un evento por la funcion onToggle que le avisa si ha cambiado el valor del boolean, y recibe ese valor como un value que luego se lo pone a la variable shoAddTask al vlor de verdad de ese value para que reemplace el que ella tiene(osea le cambiara el true o false que tenga guardado) */
  }                                                                                         /**AHORA DEBEMOS IR AL ADD-TASK.COMPONENT.TS A PREPARARLO PARA TERMINAR CON EL BOTON DE AGREGAR TAREA */

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask(); /**llamamos la funcion toggleAddTask q creamos en el servicio y que lo q hace es cambiar el valor boolean que tiene la variable showAddTask */

  }

}
