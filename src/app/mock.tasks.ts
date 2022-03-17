/**ESTO DE AQUI EMULA UNA BASE DE DATOS NO ES ASI EN LA PRACTICA REAL PERO LO HAGO A FINES DE TERMINAR ESTE PROYECTO */

import { Task } from "./Task"
export const TASKS:Task[]= [ /**haremos un array llamado TASKS que tendra una lista de tareas dentro,como TASKS trabaja con Task para controlar el tipo de dato que se escribe le digo TASKS:Task[]=  porque TASKS SERA UN ARRAY DEL TIPO Task */

    {
        id:1,
        text:"terminar primer modulo de angular",
        day: "agosto 5 a las 12:00",
        reminder: true
    },

    {
        id:2,
        text:"hacer las compras para la cena",
        day: "agosto 5 a las 17:00",
        reminder: true
    },

    {
        id:3,
        text:"investigar sobre bootstrap",
        day: "agosto 5 a las 19:00",
        reminder: false
    },

    {
        id:4,
        text:"leer mi libro favorito",
        day: "agosto 3 a las 21:00",
        reminder: false
    },


]