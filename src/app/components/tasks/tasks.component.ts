import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';  /**IMPORTAMOS LA INTERFACE **/
/**import { TASKS } from 'src/app/mock.tasks'; IMPORTAMOS EL ARRAY TASKS */
/**A LOS IMPORT  de TASKS LOS DEJAMOS COMENTADOS PORQEU A LAS TAREAS YA NO LAS MANEJAREMOS AQUI COMO HICIMOS AL PRINCIPIO DEL PROYECTO AHORA LAS MANEJAREMOSD ESDE EL SERVICIO TASK.SERVICE.TS ASI QUE LAS IMPORTAREMOS ALLI Y AQUI INYECTAREMOS ESE SERVCIO */
import { TaskService } from 'src/app/service/task.service'; /**importamos en servicio poniendo su nombre que es el que tiene el mismo cuando se declara su clase en task.service.ts */

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = []; /**creamos un array tasks que sera del tipo array Task(este Task es la interface que sirve para controlar los tipos de datos) y le decimos que sera igual al array TASKS que ya creamos en mosk.tasks.ts ).PERO AHORA CAMBIAMOS Y SERA UN VECTOR VACIO [] PORQUE NOS ESTAMOS LLEVANDO EL MANEJO DE LA BASE DE DATOS DE LAS TAREAS AL SERVICIO TASK.SERVICE */
  
  constructor(private taskService:TaskService) {}

  ngOnInit(): void { /**lo que se pone dentro de ngOnInit se ejecuta apenas se monta la componente */

    /**this.tasks=this.taskService.getTasks(); cuando se monte la componente se ejecutara el servicio q contiene al metodo getTasks que devolverla el array TASKS que se guardara a su vez en el vector vacio tasks que declaramos mas arriba */
    /**dejamos declarada la de arriba porque haremos otra forma que hace lo mismo que la de arriba pero para cuando el servicio es asincronico el de arriba es para cuando es sincronico */

    this.taskService.getTasks().subscribe((tasks) => (  /**cuando la funcion getTasks finaliza nos trae un parametro llamado tasks que se da a su vez como parametro al subscribe y usando callback se asigna al vector vacio tasks que definimos mas arriba todas las tareas que haya traido la funcion getTasks que se pasaron como parametro a subscribe  */
      this.tasks = tasks
    ));


  }

}
