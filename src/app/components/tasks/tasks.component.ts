import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';  /**IMPORTAMOS LA INTERFACE  */
import { TASKS } from 'src/app/mock.tasks'; /**IMPORTAMOS EL ARRAY TASKS */


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = TASKS; /**creamos un array tasks que sera del tipo array Task(este Task es la interface que sirve para controlar los tipos de datos) y le decimos que sera igual al array TASKS que ya creamos en mosk.tasks.ts ) */
  
  constructor() { }

  ngOnInit(): void {
  }

}
