import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';  /**importamos esto para poder usar la base de datos creada en json */
import { FormsModule } from '@angular/forms';  /**este sirve para el formulario de agregar tareas */

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,  /**aca debemos registarr el modulo para que nuestra app pueda recibir la base de datos de json */
    FormsModule    /**hay que ponerlo aca tambien al FormModule que importamos arriba y que sirve para el formulario de agregar tareas, ESTO SIRVE PARA QUE PODAMOS USAR EN NUESTRAS COMPONENTES TODO LO RELATIVO A  FORMULARIOS */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
