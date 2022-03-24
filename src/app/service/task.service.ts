/**este servicio se encargara de crear editar y guardar tareas.Al mock.tasks ahora lo 
manejaremos desde aca ya no hara falta hacer los import de {task} y {TASKS} en tasks.component.ts como habiamos hecho al principio
 ahora a eso se los importaremos en este servicio y se lo inyectaremos a este servicio a la componentes que lo necesiten usar a esa base de datos q esta en el mock.tasks* */

 /**ES ESTE SERVICIO QUIEN MANEJARA LA LOGICA DE LA BASE DE DATOS Y LAS COMPONENTES SOLO LLAMARAN  ESTE SERVICIO */
import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock.tasks';
import { Observable, of } from 'rxjs'; /**esto es para haer que el nuestro servicio sea asincronico porque ahora el nuestro es sincronico pero en la vida real son asincronicos osea no sabemos cuando va a responder */
import { HttpClient,HttpHandler, HttpHeaders }   from '@angular/common/http' /**importamos estos porque ahora no recibe mas los datos del TASKS ahora los recibe de la base de datos que creamos con el json */

const httpOptions = { /** aca tengo que crear lo que le agreggue como parametro al updateTaskReminder**/
  headers: new HttpHeaders({ /**aca decimos que los headers que mandamos en nuestra peticion son una instancia del HttpHeaders (al cual tambien debimos hacerle un import) y en la linea de abajo especificamos de que tipo es lo que mandamos*/
    'Content-Type': 'application/json' /**con esta linea decimos que lo que estamos haciendo es  mandando es un json a nuestro servidor */
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(

    private http:HttpClient
  ) { }

  /**getTasks():Task[]{  ESTA FUNCION ES DEL TIPO Task ( POR ESO DE LA INTERFACE ) Y RETORNA EL VECTOR DE TAREAS TASKS 
    return TASKS
  };**/

  /**A LA FUNCION DE ARRIBA LA DEJO COMENTADA PORQUE ASI ES CUANDO EL SERVICIO ES SINCRONICO QUE CASI NUNCA PASA EN LA VIDA REAL Y AHORA HAREMOS OTRA PARA CUNADO EL SERVICIO ES ASINCRONICO */


  /**getTasks():Observable<Task[]>{ asi decimos que la funcion es asincronica y del tipo Task[] 
    const tasks = of(TASKS); declaro variable tasks que cuando tenga la respuesta de la base de datos (que debe darnos un vector de tareas TASKS) las guardara en la variable tasks 
    return tasks y aqui devolvemos esa variable tasks con las tareas 
  }**/

  /**TAMBIEN DEJAMOS COMENTADA LA SEHUNDA FUNCION getTasks PORQUE AHORA HARE UNA TERCERA QUE SERA LA QUE TRABAJE CON LA BASE DE DATOS QUE CREAMOS EN JSON YA NO MAS CON EL MOCK QUE EMULA UNA BASE DE DATOS */

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl) /**veR explicacion en bloc de notas sobre PASOS PARA EMULAR BASE DE DATOS CON JSON */

  }

  deleteTask(task:Task): Observable<Task>{  /**aca creamos la funcion que debe ser del tipo observable */
    const url= `${this.apiUrl}/${task.id}` /**aca agarro la url y la id de la tarea las agarro a las dos y las guardo en la variable url. Es como el video de pildoras que mandaba la id por el url */
    return this.http.delete<Task>(url)  /**Devuelve el resultado de esa instrucción(delete) que puede ser un 404 u otro código del servicio http ese que usa. Vos con eso te estas comunicando con la base de datos json. Si cuando vos mandas el comando delete y sale bien va a volver un código 200 creó que era pero si no está ese id va a devolver otra cosa. En un futuro vos deberías capturar esos errores e informar algo */
  }

  updateTaskReminder(task:Task): Observable<Task>{ /**esta funcion es para que se vea el cambio del reminder en la base datos, recibe un task del tipo Task y es del tipo observable que va a devolver una Task  */
    const url= `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions) /**con la instruccion put se actualiza un elemento, le pasamos como argumento la url y una task que sera la que se va a actualizar, y el httpOptions es para informarle la backend que lo que le estamos mandando es un json en el put,tenemos que escribir este httpOptions arriba en donde estan los import(abajo de ellos) y ahora finalmente debo ir al tasks.component.ts a agregar la funcion para que ande */
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);/**este servicio se encargara de agregar la tarea a la base de datos */

  }
}


