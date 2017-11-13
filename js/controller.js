var controller = function controller(vista, data) {

    view.closeAdd();

    view.sumarPuntaje = function sumarPuntaje(puntajeGlobal) {

        var Precio = puntajeGlobal.precio.value;
        var Cercania = puntajeGlobal.cercania.value;
        var Tranquilidad = puntajeGlobal.tranquilidad.value;
        var Creatividad = puntajeGlobal.creatividad.value;
        var Informalidad = puntajeGlobal.informalidad.value;

        console.log(
            'Precio: ' + Precio +
            ' Cercania: ' + Cercania +
            ' Creatividad: ' + Tranquilidad +
            ' Tranquilidad: ' + Creatividad +
            ' Informalidad: ' + Informalidad
        )

        var puntajeSumado = data.forEach(function (elemento) {
            
            if (elemento.barato < Precio) {
                console.log('Precio más barato');
                elemento.ranking += 1;
            }
            
            
            if (elemento.creativo < Creatividad) {
                console.log('Suma en creatividad');
                elemento.ranking += 1;
            }
            
            
            if (elemento.tranquiilo < Tranquilidad) {
                console.log('Suma en tranquilidad');
                elemento.ranking += 1;
            }
            
            
            if (elemento.agradable < Informalidad) {
                console.log('Suma en tranquilidad');
                elemento.ranking += 1;
            }
        });

        // renderizamos con la variable librosFiltrados
        view.render(puntajeSumado);
    }

    view.ordenar = function ordenar() {
        var listaOrdenada = data
            .sort(function (a, b) {
                return a.ranking > b.ranking;
            }).reverse();
        view.render(listaOrdenada);
    }

    // render inicial
    view.render(data);
    // llamamos a setHeaderEvents
    view.setHeaderEvents();
}

// llamamos la función controlador y le pasamos la vista y los datos
controller(view, data);
