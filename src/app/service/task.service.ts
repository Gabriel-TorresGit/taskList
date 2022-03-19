/**este servicio se encargara de crear editar y guardar tareas.Al mock.tasks ahora lo 
manejaremos desde aca ya no hara falta hacer los import de {task} y {TASKS} en tasks.component.ts como habiamos hecho al principio
 ahora a eso se los importaremos en este servicio y se lo inyectaremos a este servicio a la componentes que lo necesiten usar a esa base de datos q esta en el mock.tasks* */

 /**ES ESTE SERVICIO QUIEN MANEJARA LA LOGICA DE LA BASE DE DATOS Y LAS COMPONENTES SOLO LLAMARAN  ESTE SERVICIO */
import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock.tasks';
import { Observable, of } from 'rxjs'; /**esto es para haer que el nuestro servicio sea asincronico porque ahora el nuestro es sincronico pero en la vida real son asincronicos osea no sabemos cuando va a responder */
import { HttpClient,HttpHandler }   from '@angular/common/http' /**importamos estos porque ahora no recibe mas los datos del TASKS ahora los recibe de la base de datos que creamos con el json */

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

}


