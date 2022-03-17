import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core'; /**con el Input el boton podra recibir el color y el text que le mando desde header.component.stml */

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text:string=""; /**y aca uso el Input que agrega arriba para escribir el nombre de las variables que va a recibir que son text y color, las inicializo como string vacios para que alli se guarde lo que se escribio en sus correspondientes campos en header.component.html ( en este caso es green y agregar tarea) */
  @Input() color:string=""; /**por ultimo vamos al button.html y usamos interpolacion para pasarle lo que tiene text para mostrar lo que debe decir el boton y tambien le pasamos el color e fondo que tendra usando [ngStyle y pasandole la variable color que es donde esta guardado nuestro color que qeuremos] */
  @Output() btnClick= new EventEmitter(); /**el evento de hacer click lo recibo aqui en button pero lo quiero llevar al componente padre que es header entoces usamos el output,creo una variable btnClick y la hago que guarde un evento, esto lo completaremos en la funcion onClick mas abajo */
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit(); /**aca decimos que el evento que se recibe ne la btnClick lo vamos a emitir,ahora deberemos ir a header.html y hacer que alli puedan recibir este evento que le emitimos */

  }

}
