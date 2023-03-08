let counter = 1;


// setInterval =llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) { //6 es la cant de imagenes en carrusel
    counter = 1;
  }
  // tamVentana()

 

},2000); //2000 son los milisegundos que retarda en cambiar las imagenes en el carrusel

// console.log("hola " )

// function tamVentana() {
//   var tam = [0, 0];
//   if (typeof window.innerWidth != 'undefined')
//   {
//     tam = [window.innerWidth,window.innerHeight];
//   }
//   else if (typeof document.documentElement != 'undefined'
//       && typeof document.documentElement.clientWidth !=
//       'undefined' && document.documentElement.clientWidth != 0)
//   {
//     tam = [
//         document.documentElement.clientWidth,
//         document.documentElement.clientHeight
//     ];
//   }
//   else   {
//     tam = [
//         document.getElementsByTagName('body')[0].clientWidth,
//         document.getElementsByTagName('body')[0].clientHeight
//     ];
//   }
//   console.log("hola1 " +tam)
//   alert("hola 2 " +tam)
//   return tam;
// }
// tamVentana()

