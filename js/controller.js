var controller = function controller(vista, data) {
    view.ordenar = function ordenar(puntajeGlobal) {
        
        var Precio = puntajeGlobal.precio.value;
        var Zona = puntajeGlobal.zona.value;
        var Tranquilidad = puntajeGlobal.tranquilidad.value;
        var Creatividad = puntajeGlobal.creatividad.value;
        var Informalidad = puntajeGlobal.informalidad.value;
        var Comida = puntajeGlobal.comida.value;

        console.log(
            ' Precio: ' + Precio +
            ' Zona: ' + Zona +
            ' Creatividad: ' + Creatividad +
            ' Tranquilidad: ' + Tranquilidad +
            ' Informalidad: ' + Informalidad +
            ' Comida: ' + Comida
        )

        var sumar = data.forEach(function (elemento) {
            elemento.puntaje = 0;

            var rango = Precio.split("-");
            if (elemento.precio >= rango[0] && elemento.precio < rango[1]) {
                elemento.puntaje += 1;
            }
            
            if (Zona.includes(elemento.zona)) {
                elemento.puntaje += 1;
            }            
            
            if (elemento.tranquilidad <= Tranquilidad) {
                elemento.puntaje += 1;
            }            
            
            if (elemento.formalismo <= Informalidad) {
                elemento.puntaje += 1;
            }

            if (elemento.formalismo <= Informalidad) {
                elemento.puntaje += 1;
            }

            var menuComida = elemento.especialidad.split(",");
            menuComida.forEach(function(tipo){
                if (Comida.includes(tipo)) {
                    elemento.puntaje += 1;
                }   
            });
            
            elemento.puntaje += elemento.ranking;
            console.log(elemento.puntaje);
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
