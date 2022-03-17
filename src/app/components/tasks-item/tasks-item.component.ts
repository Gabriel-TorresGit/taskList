/**ESTO TRABAJARA CON LA COMPONENTE TASKS, SERA EL HIJO Y SERA EL ENCARGADO DE MOSTRAR LOS DATOS EN PANTALLA */

import { Component, OnInit,Input } from '@angular/core'; /**para que pueda recibir cosas del padre debemos importar el input */
import { Task } from 'src/app/Task'; /**tambien debemos importar el Task para que pueda ser de tipo Task el item que traemos */
import { TASKS } from 'src/app/mock.tasks'; /**TAMBIEN NECESITAMOS EL tasks PARA INICIALIZAR EL task del @ input con algo o nos dara error */
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task:Task= TASKS[0];    /**asi hago que pueda recibir el item[task] del padre, esta taks sera del tipo Task (es para  lo de la interface),INICIALIZAMOS EL task con TASKS[0] porque si no nos da error de que task no esta declarada */

  constructor() { }

  ngOnInit(): void {
  }

}
