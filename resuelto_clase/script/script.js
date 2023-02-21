//evento de carga
document.addEventListener('DOMContentLoaded', () => {
    /*VARIABLES*/
    //arrayOriginal
    const lista1 = document.querySelector('#lista1');
    const lista2 = document.querySelector('#lista2');
    const fragment = createDocumentFragment();

    const arrayOriginal = [
        { id: 'a-1', producto: 'mesa' },
        { id: 'a-2', producto: 'silla' },
        { id: 'a-3', producto: 'boli' },
        { id: 'a-4', producto: 'botella' },
        { id: 'a-5', producto: 'cuaderno' },
        { id: 'a-6', producto: 'tele' },
        { id: 'a-7', producto: 'gafas' },
        { id: 'a-8', producto: 'micro' },
    ];

    //arrayProductosSeleccionados
    let arrayProductosSeleccionados = JSON.parse(localStorage.getItem('productos')) || [];
    /*EVENTOS*/
    //evento de boton mas anadir a productos seleccionados y anadir al local y pintar lista 2

    //evento de boton menos sacar de productos seleccionador y anadir al local y pintar lista 2
    document.addEventListener('click', ({ target }) => {//destructing el event en {target}
        if (target.classList.contains('add')) {//nos valdrian .matches(), .closest() y .classList()
            const id = target.parentElement.id;
            console.log('anadiendo...', id);
            anadirProductosSeleccionados(id);
            pintarLista2();
        }
        if (target.classList.contains('remove')) {
            const id = target.parentElement.id;
            console.log('eliminando...', id);
            sacarProductosSeleccionados(id);
            pintarLista2();
        }
    })

    /*FUNCIONES*/
    //Pintar lista 1, pintana nada mas cargar la pagina
    const pintarLista1 = () => {
        console.log('pintando uno');
        arrayOriginal.forEach(({ id, producto }) => {
            const elementoLista = document.createElement('LI');
            elementoLista.id = item.id;
            elementoLista.innerHTML = `${item.producto}<button class="add">anadir</button>`;//innerHTML mejor que textContent dado que innerHTML sustituye el contenido y textContent lo da, innerHTML lo pisa
            //desestructuramos item en id y producto


            fragment.append(elementoLista);
        })
    }
    //anadir a arrayProductosSeleccionados
    const anadirProductosSeleccionados = (id) => {
        //recorrer el array y recoger si el elemento existe
        //pasarlo al arraySeleccionados
        console.log(id);//comprobacion de si el flujo de trabajo funciona como queremos
        const productoEncontrado = arrayOriginal.find(({ item }) => item.id == id)
        console.log(productoEncontrado);
        arrayProductosSeleccionados.push(productoEncontrado);
        //ahora añadimos los productos al local
    }
    //sacar del arrayProductosSeleccionados
    const sacarProductosSeleccionados = (id) => {
        console.log('eliminando...',id)

        const indiceElemento = arrayProductosSeleccionados.findIndex((item)=>item.id==id)
        if(indiceElemento!=-1){
            arrayProductosSeleccionados.splice(indiceElemento,1)//el 1 es la cantidad de elementos que se van a eliminar desde la posicion del array indiceElemento
            setLocal();
        }
    }

    //anadir al local el array productos
    const setLocal = () => {
        console.log('stetando local ....', arrayProductosSeleccionados);
        localStorage.setItem('productos', JSON.stringify(arrayProductosSeleccionados));

    }

    //recoger el local
    const getLocal = () => {
        return JSON.parse(localStorage.getItem('productos'));
    }
    //Pintar lista 2
    const pintarLista2 = () => {
        console.log('pintando dos');
        const productos = getLocal();
        productos.forEach(({ id, producto }) => {
            const elementoLista = document.createElement('LI');
            elementoLista.id = item.id;
            elementoLista.innerHTML = `${item.producto}<button class="remove">eliminar</button>`;
            fragment.append(elementoLista);
        })
        lista2.append(fragment);
        arrayProductosSeleccionados.forEach(element => {
            console.log(element);
        });
    }

    const init = () => {
        pintarLista1;
        pintarLista2;
    }
    init()


})//LOAD
