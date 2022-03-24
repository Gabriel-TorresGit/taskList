import { Component, OnInit,Output,EventEmitter } from '@angular/core'; /**debo importar el output y evenemitter para poder mandar el evento del click sobre el boton (que desencadena todo lo que esta dentro de la funcion onSubmit ) hacia afuera */
import { Task } from 'src/app/Task';

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


  constructor() { }

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
