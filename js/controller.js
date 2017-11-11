var controller = function controller(vista, data) {
    
    view.closeAdd();


    view.onFilter = function onFilter(filterYear, filterGenre, filterPrice, filterFormat, filterObject) {

        var vinilosFiltrados = data

            //filtro por año
            .filter(function (elemento) {
                // si filterYear está vacío retornamos true
                if (!filterYear) return true;
                // si no, retornamos el resultado de la comparación
                return elemento.ano > filterYear;
            })

            //filtro por genero
            .filter(function (elemento) {
                // si filterYear está vacío retornamos true
                if (!filterGenre) return true;
                // si no, retornamos el resultado de la comparación
                return elemento.genero.includes(filterGenre);
                if(elemento.genero.includes(filterGenre)){
                    elemento.puntos += 1;
                }
            })

            //filtro por precio
            .filter(function (elemento) {
                // si filterYear está vacío retornamos true
                if (!filterPrice) return true;

                // como el valor de filterPages es un rango separado por un guión, 
                // utilizamos la función split para acceder a los 2 valores
                var rango = filterPrice.split("-");

                // retornamos el resultado de la comparación
                return elemento.precio >= rango[0] && elemento.precio < rango[1];
            })
        
            //filtro por genero
            .filter(function (elemento) {
                // si filterYear está vacío retornamos true
                if (!filterFormat) return true;
                // si no, retornamos el resultado de la comparación
                return elemento.formato.includes(filterFormat);
            })
        
        //filtro por genero
            .filter(function (elemento) {
                // si filterYear está vacío retornamos true
                if (!filterObject) return true;
                // si no, retornamos el resultado de la comparación
                return elemento.tipo.includes(filterObject);
            });

        // renderizamos con la variable librosFiltrados
        view.render(vinilosFiltrados);
    }

    // view.onOrdenar = function onOrdenar(elemento) {
    //     var vinilosOrdenados = data
    //     .sort(function(elemento,elemento){
    //             return elemento.puntos - elemento.puntos;
    //         });
    //     view.render(vinilosOrdenados);
    // }

    // render inicial con todos los libros
    view.render(data);
    // llamamos a setHeaderEvents
    view.setHeaderEvents();
}

// llamamos la función controlador y le pasamos la vista y los datos
controller(view, data);
