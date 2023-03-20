/* 1. A través del siguiente taller, construir un menú en una función
alert que gestione las siguientes opciones de menú referentes al
manejo de los arrays, objetos, funciones y otras operaciones en
JavaScript entre dichos temas. */

function menu() {
    let opcion;
    let nombre;
    let team;
    let salon;
    const camper={
        asignaturas:[]
    };
    const lista=[];
    let nombreObjeto;
    let nombreObjetoDos;
    let id;
    let idDos;
    let value;
    let valueDos;
    do {
      opcion = parseInt(prompt(`-------------MENU--------------
      1.  Lectura de Datos
      2.  Crear Objeto
      3.  Mostrar Objeto
      4.  Crear Array
      5.  Mostrar Array
      6.  Eliminar primer elemento del Array
      7.  Eliminar ultimo elemento del Array
      8.  Eliminar cualquier elemento del Array
      9.  Agregar elemento al comienzo del Array
      10. Agregar elemento al final del Array
      11. Crear Array con objetos
      12. Iterar Array con FOR
      13. Iterar Array con objetos ForEacH
      14. Iterar Array con objetos Map y crear copia
      15. Proceso personal
      0.  Salir`));
  
      switch (opcion) {
        case 1:
          alert("Vas a Realizar Lectura de Datos")   
          nombre= prompt(`Nombre del Camper`);
          team = prompt(`Team del Camper`);
          salon= prompt(`Salon del Camper`)
          alert(`El Camper ${nombre} pretenece al ${team} y salon ${salon}`);
          console.log(`El Camper ${nombre} pretenece al ${team} y salon ${salon}`);
          break;
        case 2:
          alert("Vas a Agregar (Crear) un Camper (objeto)");
          camper.nombre=prompt(`Agregar Nombre del Camper`);
          camper.team=prompt(`Agregar Team del Camper`);
          camper.salon=prompt(`Agregar Salon del Camper`);
          camper.telefono=parseInt(prompt(`Agregar Telefono del Camper`));
          camper.email=prompt(`Agregar Email del Camper`);
          alert(`El Objeto ${camper.nombre} Ha sido creado`);
          console.log(`El Objeto ${camper.nombre} Ha sido creado`);
          break;
        case 3:
          alert("Mostrar objeto");
          alert(Object.keys(camper));
          console.dir(camper);
          break;
        case 4:
          alert("Crear array");
          let num=prompt("Ingrese el Número de Asignaturas")
          let x=1;
          for (let i = 0; i < num; i++) {
            let asignatura=prompt(`Nombre de la asignatura ${x++}`)
            camper.asignaturas.unshift(asignatura);
          }
          alert(`Todas las Asignaturas del Camper han sido almacenadas`)
          break;
        case 5:
          alert("Mostrar lista de Materias");
          alert(camper.asignaturas);
          console.log(camper.asignaturas);
          break;
        case 6:
          alert("Eliminar la primera asignatura de la lista");
          camper.asignaturas.shift();
          alert(camper.asignaturas);
          console.log(camper.asignaturas);
          break;
        case 7:
          alert("Eliminar última asignatura de la lista");
          camper.asignaturas.pop();
          alert(camper.asignaturas);
          console.log(camper.asignaturas);
          break;
        case 8:
          alert("Eliminar una Materia de la Lista");
          camper.asignaturas.splice(1,1);
          alert(camper.asignaturas)
          console.log(camper.asignaturas);
          break;
        case 9:
          alert("Agregar Asignatura al Comienzo de la Lista");
          let nuevaAsignatura= prompt("Que Materia Deseas Agregar al Comienzo de la Lista");
          camper.asignaturas.unshift(nuevaAsignatura);
          alert(camper.asignaturas);
          console.log(camper.asignaturas);
          break;
          
        case 10:
          alert("Agregar Asignatura al Final de la Lista");
          let nuevaMateria= prompt("Que Materia Deseas Agregar al Final de la Lista");
          comidas.push(nuevaMateria);
          alert(camper.asignaturas);
          console.log(camper.asignaturas);
          break;
  
  
        case 11:
        const objeto={};
          alert("Crear array con objetos");
          nombreObjeto=prompt("Ingrese el Nombre de su Objeto");
          for (let index = 0; index < 2; index++) {
            id=prompt(`Ingrese el key ${index+1}  de su objeto ${nombreObjeto}`);
            value=prompt(`Ingrese el value del id ${id}`);
            objeto[id]=value;
        }
        const objetoDos={}
          nombreObjetoDos = prompt("ingrese el nombre de su objeto2")
  
          for (let index = 0; index < 2; index++) {
            idDos=prompt(`Ingrese el key de su objeto ${nombreObjetoDos}`);
            valueDos=prompt(`Ingrese el value del id ${idDos}`);
            objetoDos[idDos]=valueDos;
        }
        lista.push(objeto,objetoDos);
          console.log(lista);
          alert(lista);
          break;
        case 12:
          console.log("Iterar array con FOR");
          for(let j =0; j<lista.length; j++){
            console.log(`Los elementos  de los objeto${j+1} del array son:`);
            for (let idTres in lista[j]) {
              console.log(`${idTres}: ${lista[j][idTres]} `)
                
              }
            }
          
          a=lista.length;
          console.log(a);
          break;
        case 13:
          console.log("Seleccionaste la opcion 13 .Iterar array con objetos ForEacH");
          lista.forEach((iterandoObjeto) => {
            for (let propiedad in iterandoObjeto) {
              console.log(`Iterando con ForEach - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
            }
          });
        
          break;
        case 14:
          alert("Iterar array con objetos Map y crear copia");
          lista.map((iterandoObjeto) => {
            for (let propiedad in iterandoObjeto) {
              console.log(`Iterando con map - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
            }
          });
          const cloneArray = items =>
            items.map(item =>
              Array.isArray(item)
                ? cloneArray(item)
                : item
              )
          const copiaLista=cloneArray(lista);
          console.log(copiaLista);
          break;
        case 15:
           alert("Perimetro  de un cuadrado y area de un rectangulo");
           do{
            let opcion=prompt(`Ingrece una opcion 1 para calcular perimetro de un cuadrado y 2 para el area de un rectangulo:`);
            if (opcion=1){
                let cuadroPerimetro=prompt(`Ingrece el valor de la arista`);
                alert(`El perimetro de su cuadrado es ${cuadroPerimetro*4} cm`);
                console.log(`El perimetro de su cuadrado es ${cuadroPerimetro*4} cm`);
            }else if (opcion=2){
                let baseRecta=prompt(`Ingrece el valor de la base`);
                let alturaRecta=prompt(`Ingrece el valor de la altura`);
                alert(`El area del rectangulo es ${baseRecta*alturaRecta}`);
                console.log(`El area del rectangulo es ${baseRecta*alturaRecta}`);
            }else{
                alert(`opcion no valida`)
                console.log(`opcion no valida`)
            }
        }while(confirm(`Deseas agregar otro dato?`));
        case 0:
          alert("Salir");
          break;
        default:
          alert("Opcion invalida");
          break;
      }
    } while (opcion !== 0);
  }
  
  menu();