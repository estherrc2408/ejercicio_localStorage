/*
Crea una lista de la compra que tenga:

1.Un listado de productos:

    1.2. Cada producto tendrá un botón de añadir dicho producto en el localStorage.
    1.3. Un botón de eliminar el producto de la lista existente(Se eliminará del localStorage)

2.Todo producto que se añada o se elimine del localStorage se verá reflejado automaticamente en otra lista en el propio navegador.

3.Tendremos un botón para vaciar la lista completa del localStorage.
*/
//creamos dos listas, una con los productos y otra con lo que tenemos en la cesta
const parent = document.querySelector('div#contenedor');
const lista1 = document.createElement('UL');
parent.append(lista1);
const producto1 = document.createElement('LI');
producto1.id = 'producto1';

const producto2 = document.createElement('LI');
producto2.id = 'producto2';

const producto3 = document.createElement('LI');
producto3.id = 'producto3';

lista1.append(producto1, producto2, producto3);

function crearBotones(product) {
    const boton_agregar = document.createElement('button');
    boton_agregar.textContent = 'Agregar a la cesta';
    if(product.textContent=='pipas'){
        boton_agregar.id = 'agpipas';
    }else{
        if(product.textContent=='cafe'){
            boton_agregar.id = 'agcafe';
        }else{
            boton_agregar.id = 'agcherrys'
        }
    }
    const boton_eliminar = document.createElement('button');
    boton_eliminar.textContent = 'Quitar de la cesta';
    if(product.textContent=='pipas'){
        boton_eliminar.id = 'elpipas';
    }else{
        if(product.textContent=='cafe'){
            boton_eliminar.id = 'elcafe';
        }else{
            boton_eliminar.id = 'elcherrys'
        }
    }
    product.append(boton_agregar, boton_eliminar);
}
const lista2 = document.createElement('UL');
parent.append(lista2);
lista2.id = 'ul2';
//creamos un array con los objetos producto
const arrayProductos = [
    {
        id: 'prod1',
        nombre: 'pipas',
    }
    , {
        id: 'prod2',
        nombre: 'cafe',
    }
    , {
        id: 'prod3',
        nombre: 'cherrys',
    }
]
//introducimos los objetos dentro de las constantes creadas
producto1.append(arrayProductos[0].nombre);
crearBotones(producto1);
producto2.append(arrayProductos[1].nombre);
crearBotones(producto2);
producto3.append(arrayProductos[2].nombre);
crearBotones(producto3);



//la lista 2 está creada pero no tiene li asociados hasta que no se pulsen los botones y se activen los eventos
//funcion que crea nuevos list items en la lista 2, le tenemos que pasar como argumento los nuevos datos que introduzcamos en el localStorage
function crearLi(nuevoElemento) {
    const list2 = document.querySelector('#ul2');
    const liCreado = createElement('li');
    list2.append(liCreado);
    liCreado.append(nuevoElemento);
}
//el nuevo elemento tiene que ser el ultimo elemento recibido por el localStorage
//devuelve el ultimo elemento subido
function extraerLocal() {
    const arrayCesta = JSON.parse(localStorage.getItem('producto')) || [];
    let num = arrayCesta.lenght - 1;
    return arrayCesta[num];
}


//hacemos referencia a los botones, el argumento que entregamos debe ser el item correspondiente del arrayProductos
function agregarLocal(prod) {
        localStorage.setItem('producto', JSON.stringify(prod));//sera subido en formato JSON {"id":"podN","nombre":"nombreproducto"
    }
    

//ponemos el evento para pulsar el boton
const botAgrego = document.querySelector('#agregar');
botAgrego.addEventListener('click', () => {
    if (botAgrego.parentElement.id == 'producto1') {
        agregarLocal(arrayProductos[0]);
        crearLi(extraerLocal());
    }else{
        if(botAgrego.parentElement.id == 'producto2'){
            agregarLocal(arrayProductos[1]);
            crearLi(extraerLocal());
        }else{
            if(botAgrego.parentElement.id == 'producto3'){
                agregarLocal(arrayProductos[2]);
                crearLi(extraerLocal());
            }
        }
    }
})



