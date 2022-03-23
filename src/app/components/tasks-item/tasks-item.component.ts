/**ESTO TRABAJARA CON LA COMPONENTE TASKS, SERA EL HIJO Y SERA EL ENCARGADO DE MOSTRAR LOS DATOS EN PANTALLA */

import { Component, OnInit,Input } from '@angular/core'; /**para que pueda recibir cosas del padre debemos importar el input */
import { Output, EventEmitter } from '@angular/core';  /**necesitamos estos dos para la funcion onDelete porque queremos que eso se maneje en el componente padre tasks.html asi que le mandaremos el evento que produce la funcion cuando le hago click */
import { Task } from 'src/app/Task'; /**tambien debemos importar el Task para que pueda ser de tipo Task el item que traemos */
import { TASKS } from 'src/app/mock.tasks'; /**TAMBIEN NECESITAMOS EL tasks PARA INICIALIZAR EL task del @ input con algo o nos dara error */
import { faTimes } from '@fortawesome/free-solid-svg-icons'; /**asi importamos el icono de la fontawesome ahora nos iremos a tasks-item.html a meter el icono a la etiqueta h3 */

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task:Task= TASKS[0];    /**asi hago que pueda recibir el item[task] del padre, esta taks sera del tipo Task (es para  lo de la interface),INICIALIZAMOS EL task con TASKS[0] porque si no nos da error de que task no esta declarada */
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter(); /**aca declaro algo asi como una variable su funcion es lamacenar el nuevo evento (por eso el new EventEmitter) y decimos que sera un EventEmitter del tipo Task el que se mande (con esto => EventEmitter<Task>), a esta onDeleteTask la usaremos en el padre tasks.component.html */
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter(); /**aca como hicimos en linea de arriba emitimos el evento de que queremos cambiar el reminder de true a false o viceversa, denuevo creo una variable con nombre en este caso onToggleReminder donde se almacena el evento y a esta variable la voy a usar en la funcion que voy a crear mas abajo (en la onToggle), a esta variable que declaro aqui la usare tambien en el componente tasks.html */

  faTimes=faTimes; /**creo variable para guardar el icono y le doy el mismo nombre que el icono */

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){  /**recibe como parametro la task que tenga en ese momento el task-item.html */
    this.onDeleteTask.emit(task); /**llama al onDeleteTask que puse en el @ output y le emite la task al componente padre que es el tasks.component.html y alli debo escribirle para que lo reciba*/
    
  }

  onToggle(task:Task){  /**tenemos la funcion con esto le avisamos (le emitimos la alerta) al task.component.html que el usuario a hecho click en la tarjeta de la tarea y que queire cambiar el valor del reminder(osea le avisamos que se ejecuto el onToggleReminder) ahora iremos al componente tasks.html */
    this.onToggleReminder.emit(task);
   
  }

}
