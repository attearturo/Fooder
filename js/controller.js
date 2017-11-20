var puntajeTotal;
var controller = function controller(vista, data) {

    view.closeAdd();

    view.ordenar = function ordenar(puntajeGlobal) {
        
        var Precio = puntajeGlobal.precio.value;
        var Cercania = puntajeGlobal.cercania.value;
        var Tranquilidad = puntajeGlobal.tranquilidad.value;
        var Creatividad = puntajeGlobal.creatividad.value;
        var Informalidad = puntajeGlobal.informalidad.value;

        console.log(
            'Precio: ' + Precio +
            ' Cercania: ' + Cercania +
            ' Creatividad: ' + Creatividad +
            ' Tranquilidad: ' + Tranquilidad +
            ' Informalidad: ' + Informalidad
        )

        var sumar = data.forEach(function (elemento) {
            elemento.puntaje = 0;
            
            if (elemento.creatividad < Precio) {
                elemento.puntaje += 1;
            }
            
            if (elemento.creatividad < Creatividad) {
                elemento.puntaje += 1;
            }            
            
            if (elemento.tranquilidad < Tranquilidad) {
                elemento.puntaje += 1;
            }            
            
            if (elemento.formalismo < Informalidad) {
                elemento.puntaje += 1;
            }
            
            elemento.puntaje += elemento.ranking;

            var puntajes = [];
            puntajes= data.puntaje;
            console.log(puntajes);
        });
        
        var listaOrdenada = data
            .sort(function (a, b) {
                return a.puntaje < b.puntaje;
            });
        view.render(listaOrdenada);
    }

    // render inicial
    view.render(data);
    // llamamos a setHeaderEvents
    view.setHeaderEvents();
}

// llamamos la función controlador y le pasamos la vista y los datos
controller(view, data);
