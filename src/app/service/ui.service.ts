/**usaremos este servicio para hacer la logica del boton agregar tarea que nos debera mostar el form para 
 agregar una tarea cada vez que hagamos click en el* */

import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs'; /**esto lo necesitamos apra encadenar eventos es decir para enterarse de cambios que puedan suceder en las funciones ya sea sincronico o asincronico*/


@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean = false; /**creamos variable showAddTask de tipo boolean que dira si se va a mostrar el form o si no se va a mostrar. ESTE sHOWaDDtASK TAMBIEN SE USARA EN EL HEADER.COMPONENT,TS ALLI DEBO CREARLA TAMBIEN*/
  private subjet = new Subject<any>(); /**esto sirve para enterarse de cualquier evento que venga del template como dije mas arriba caundo lo importe */

  constructor() { }

  toggleAddTask():void{ /**creamos esta funcion del tipo void(TIPO VOID SIGNIFICA QUE NO RETORNA NADA), esta se usaba en el herder.component.ts alli esta esta funcion usandose, y alli debo ir ahora a hacerle unos import para usarla correctamente*/
    this.showAddTask= !this.showAddTask; /**aca hago que cambie el valor del showAddTask que es el que dice si se muestra o no el form entonces cada vez q le haga click(esto del click lo agregamos despues a este evento) el form se despliegue o se oculte, pojemplo el form no se muestra le hago click al boton y se muestra, si se muestra le hago click y se oculta(esto ultimo creo q se oculta no estoy seguro) */
    this.subjet.next(this.showAddTask); /**esto no se bien para que sirve creo q es para que es para que se mande el evento o algo asi(osea el evento de que se cambio el valor del booleano de la variable showAddTask), buscar para que sirve el comando next */
  }

  onToggle():Observable<any>{  /**esta funcion no se que hace no se que devuelve */
    return this.subjet.asObservable();
  }

}
