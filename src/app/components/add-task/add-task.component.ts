import { Component, OnInit,Output,EventEmitter } from '@angular/core'; /**debo importar el output y evenemitter para poder mandar el evento del click sobre el boton (que desencadena todo lo que esta dentro de la funcion onSubmit ) hacia afuera */
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service'; /**aca tambien import el uiservice para el boton agregar tarea */
import { Subscription } from 'rxjs'; /**esto tambien es para el boton agregar tarea para enterarse de los eventos que ocurren en otros modulos o escucharlos como dicen otros */
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output () onAddTask:EventEmitter<Task>= new EventEmitter();/**esto es para enviar afuera el evento creo una variable q llamo onAddTask que va a emitir un elemento del tipo Task y dentro de ella guardo ese evento*/

  text:string="";  /**le decimos que va a reciir un text un day y un reminder y le ponemos que tipoo de dato trae cada uno, y lo inicializamos en string vacio a los string y al boolean en false */
  day:string="";    /**AHORA HAY Q IR AL APP.MODULE.TS A IMPORTAR EL FORMSMODULE PARA QUE ANDE EL FORMULARIO DE AGREGAR TAREAS */
  reminder:boolean=false;
  showAddTask:boolean=false; /**aca declaramos otra vez esto con su valor(es para el boton agregar tarea ) */
  subscription?:Subscription; /**traemos esto tambien para el boton agegar tarea para q el modulo pueda enterarse de eventos en otros modulos */


  constructor(private uiService:UiService ) { /**inyectamos el servicio, que lo estamos usando apra controlar el estado de  la variable del showAddTask(que tambien la hemos declarado aqui mas arriba) */
    
  this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value) /**nos traemos esta funcion del header.ts para que este modulo tambien se entere del evento de cambio de valor del showAddTask */
                                                                                            /**SOLO FALTA IR AL ADD-TASK.COMPONENT.HTML Y AGREGAR UN ngIf PARA QUE FUNCIONE LO DE MOSTRAR EL FORM AL HACER CLICK EN EL BOTON */

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){ /**esta condicion da true si no se ha ingresado nada en el campo text del formulario y me saltara kla alerta de abajo.Tmabien se puede preguntar si el cmapo text no existe (osea de ninguna forma porque en nuestro caso el campo text lo tenemos inicializado con un string vacio osea que existe) se podrai usar el is(!this.text) y eso nos avisaria que no ingresamos texto en el campo texto cuando no le pusieramos nada pero en nuestro caso no sirve porque ya tenemos inicializado el campo text en vacio */
      alert("no has agregado ninguna tarea,intentalo otra vez");
      return
    }

    const newTask = { /**creamos un nuebo objeto que sera una tarea nueva que tendra en text,day y reminder lo que le llegue de lo que s eescriba al completar el formulario, recordar que esta linea esta dentro de la funcion onSubmit osea que esto sigue pasando cuando se hace el click en el boton */
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask); /**aca uso el onAddTask le digo que emita el evento y que junto con el evento emita el newTask que se ha creado dentro de esta funcion onSubmit,esto se recibira en tasks.componenet.html debo ir alli a prepararlo para que lo reciba  */

  }

}
