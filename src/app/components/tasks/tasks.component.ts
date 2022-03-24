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
  
  constructor(private taskService:TaskService) {} /**aca inyectamos el servicio */

  ngOnInit(): void { /**lo que se pone dentro de ngOnInit se ejecuta apenas se monta la componente */

    /**this.tasks=this.taskService.getTasks(); cuando se monte la componente se ejecutara el servicio q contiene al metodo getTasks que devolverla el array TASKS que se guardara a su vez en el vector vacio tasks que declaramos mas arriba */
    /**dejamos declarada la de arriba porque haremos otra forma que hace lo mismo que la de arriba pero para cuando el servicio es asincronico el de arriba es para cuando es sincronico */

    this.taskService.getTasks().subscribe((tasks) => (  /**cuando la funcion getTasks finaliza nos trae un parametro llamado tasks que se da a su vez como parametro al subscribe y usando callback se asigna al vector vacio tasks que definimos mas arriba todas las tareas que haya traido la funcion getTasks que se pasaron como parametro a subscribe  */
      this.tasks = tasks
    ));


  }

  deleteTask(task:Task){ /**la tarea q recibe se la pasaremos a la base de datos para que sea borrada y a eso lo hacemos a travez de nuestro servicio, asi que vamos para task.service */
    this.taskService.deleteTask(task).subscribe(()=>(   /**llamo al deleteTask y le paso la task de argumento, y el subscribe(()=> es para que cuando this.taskService.deleteTask(task) finalice (para cuando ya tenga su respuesta) se ejecute lo que puse en la linea de abajo  */
      this.tasks = this.tasks.filter( t => t.id !== task.id)  /**aca le decimos que el vector taks va a ser igual al mismo vector tasks pero con el filter le vamos a filtrar aquellas id que coincidan con el id que llego de la respuesta desde this.taskService.deleteTask(task) y asi se queda el vector tasks sin la tarea que llego por el id que seria la que se va a eliminar, las t creo que son la sintaxis de como se debe usar el filter */
    ))

  }

  toggleReminder(task:Task){  /**esta sera en definitiva la funcion encargada de cambiar el valor del reminder simplemente hacemos que niegue lo que sea que trenga el reminder cuando le llega y asi lo cambi de V a F o de F a V */
    task.reminder = !task.reminder /**AHORA IR A TASK.SERVICE.TS Y CREAR UN METODO PARA QUE LO QUE CAMBIO ACA SE VEA REFLEJADO EN LA BASE DE DATOS DEL JSON */
    this.taskService.updateTaskReminder(task).subscribe(); /**aca llamamos al servicio taskService y asu metodo updateTaskReminder y una vez que se cambio el reminder de la tareas se la pasamos a nuestro servicio para que la actualice en la base de datos.AHORA SI VEO LA BD.JSON, CADA VEZ Q HAGA CLICK SOBRE UNA TAREA EN LA PAGINA WEB, EL REMINDER CAMBIARA */
  }

  addTask(task:Task){ /**esta va a recibir a travez del evento una tarea, y para agregar la tarea  va a trabajar con el servicio asi que debo ir a agregar cosas en el task.service.ts porque a la tarea que recibo aca debo pasarsela a un servicio que me permita guardarla en la base de datos */
    this.taskService.addTask(task).subscribe((task)=>( /**con taskService.addTask(task) llamamos al servicio y le pasmos la tarea, el subscribe((task) nos va a devolver la tarea (task) recien creada por el formulario, esa tarea que me devuelve el formulario se debe agregar  a la lista de tareas (tasks) que ya tenia y a eso lo hago con (task)=>this.tasks.push(task)  */
      this.tasks.push(task)
    ))
    
  }


}
