export interface Task{  /**esto trabaja junto con el mosk:tasks.ts y sirve para que cada elemento de la lista tenga un tipo de dato asignado y no se le pueda poner otro, para eso srive ñla palabra clave interface y todo lo que desarrollamos abajo de ella */
    id?:number; /**el ? al lado de id significa que ese dato puede ponerse o no y de todas formas funcionara */
    text:string;
    day:string;
    reminder:boolean;
}