//Funciones de registro Console

//limpia la consola
console.clear();
//basicamente una condicional si es verdadera no sucedera nada pero si es falsa indicara un error
console.assert(5 > 2);
//mensaje de error
console.error("console error");
//mensaje de informacion
console.info("mensaje de informacion");
//mensaje de depuracion
console.log("mensaje de depuracion");
//mensaje de advertencia
console.warn("cuidado bru");
//pequeña tabla en la consola
console.table([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//similar a console.table pero de una manera un tanto diferente
console.dir([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Funciones de conteo

//sirve para saber la cantidad de veces que esta misma funcion fue ejecutada
console.count();
console.count();
console.count();
console.count();
console.count();
//puedes resetear el count con esta pequeña funcion
console.countReset();

//Funciones de agrupacion

//grupo en la misma consola en estado abierto
console.group("Neshhero");
//eliminar un grupo
console.groupEnd("Neshhero");
//grupo en la misma consola en estado cerrado
console.groupCollapsed("hero");

//Funciones de temporizacion

//inicia un conteo...hace de contador
console.time();
//para ver ese conteo
console.timeLog();
//eliminar el contador
console.timeEnd();

console.clear();

//cambiar color del texto, basicamente darle estilo pero debes ingresar %c antes de escribir el nombre...PD: luego del pading si quieres hacer que tenga un tamaño mas grande pon mas pixeles(px) al lado separado con un espacio para indicar el weight y height
console.log(`%cNeshhero`, `color:blue;background:white;padding:20px 100px 25px;border: 3px solid blue;`);