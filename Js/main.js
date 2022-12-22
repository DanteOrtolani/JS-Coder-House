//variable (constante) que guarda un Array con objetos

const productos = [
    {id: 1, nombre: "Manteca", precio: 650 },
    {id: 2, nombre: "Aceite", precio: 900 },
    {id: 3, nombre: "Fideos", precio: 240 },
    {id: 4, nombre: "Pan", precio: 220 },
    {id: 5, nombre: "Arroz", precio: 300 },
    {id: 6, nombre: "Pizza", precio: 550 },
    {id: 7, nombre: "Salsa", precio: 450 },
    {id: 8, nombre: "Alfajor", precio: 200 }, 
];


//array de carrito

const carrito=[]


//declaracion de funcion para agregar al array de carrito de compras

function cargarProductos(arr, productos){
    arr.push(productos);
}




cargarProductos(carrito, productos)

console.log(carrito);


//faltan metodo funcion entrada y salida de datos, prompt y alert


// metodo reduce

//let carrito = productos.reduce((acc, el)=>{
//    return acc + el.precio
//},0);

//const producto = productos.find((el)=>{
  //  return el.nombre === "Arroz"
//})
