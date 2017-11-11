var view = {

  
    // seleccionamos el nuevo cerrar y agrega un eventListener
    closeAdd: function closeAdd() {
        document.querySelector('#close').addEventListener("click", function () {
            document.querySelector('#top').style.display = 'none';
        });
    },


    // genera cada oferta extrayendo sus datos del Modelo
    getElemVinilo: function getElemVinilo(infoVinilo) {
        var div = document.createElement('div');
        div.setAttribute('class', 'col-md-6');
        div.innerHTML = `
        <div class="lista">
			<img class="imagen" style="width:100%" src="restaurantes/${infoVinilo.imagen}" class="img-responsive"/>
			<div class="middle">
            <button><h4 class="text">RESERVAR</h4></button>
            </div>
            <h4><Strong>${infoVinilo.nombre}</Strong></h4>
			<p>${infoVinilo.direccion}</p>
			<p>Precio promedio $ ${infoVinilo.direccion}</p>
			<h4 class="colorPrice">Valoración <strong>${infoVinilo.ranking}</strong> (${infoVinilo.review} votos) </h4>
        </div>
		`;
        var that = this;

        // seleccionamos el nuevo botón y agregamos un eventListener
        div.querySelector('button').addEventListener('click', function () {
            // creamos el elemento modal con la información del libro
            var modal = that.getModalVinilo(infoVinilo);
            // agregamos el elemento modal al div del libro
            div.appendChild(modal);
        });
        return div;
    },

    getModalVinilo: function getModalVinilo(infoVinilo) {

        var div = document.createElement('div');
        div.innerHTML = `
        <div class='modal-backdrop fade'></div>
    
    <div class='modal fade' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
            <div class='modal-content'>

                <div class='modal-header'>
                    <button type='button' class='closeView' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                    <h3 class='title'>${infoVinilo.nombre}</h3>             
                    <h4 class="colorPrice">Precio Promedio<strong>$ ${infoVinilo.precio}</strong></h4>  
                </div>

                <div class='modal-body'>
                    <div class='col-md-12'>
                        <img class="imagen " style="width:100%" src="restaurantes/${ infoVinilo.imagen = null ? "predeterminado.png" : infoVinilo.imagen }" class="img-responsive" />
                    </div>

                    <div class='col-md-12'>
                        <br><p><Strong>Detalles</Strong>
                        </p><p>${infoVinilo.descripcion}</p>

                        <div class='line'>                       
                        <p>Dirección: <Strong>${infoVinilo.direccion}</Strong></p>
                        <p>Telefonos: <Strong>${infoVinilo.phone}</Strong></p>
                        <p>Tiempo promedio de estadia: <Strong>${infoVinilo.tiempo}</Strong></p>
                        </div>
                        <p>Especialidad: <Strong>${infoVinilo.especialidad}</Strong></p>
                        <div class='col-md-6'>
                        <img class="imagen " style="width:100%" src="restaurantes/${ infoVinilo.imagen = null ? "predeterminado.png" : infoVinilo.imagen }" class="img-responsive" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

        //selecciona el elemento de la clase canal
        var modal = div.querySelector('.modal');
        // seleccionamos el elemento con la clase modal-backdrop
        var backdrop = div.querySelector('.modal-backdrop');

        modal.style.display = 'block';

        setTimeout(function () {
            //se pasan las opacidades al setTimeout 
            modal.style.opacity = 1;
            backdrop.style.opacity = .5;
            div.querySelector('.modal-dialog').style.transform = 'translate(0,0)';

        });

        var remove = function () {
            modal.style.opacity = 0;
            backdrop.style.opacity = 0;
            setTimeout(function () {
                div.remove();
                //se elimina el elemento despues de 500 milisegundo 
            }, 500);
        };

        modal.addEventListener('click', function (e) {
            if (e.target === modal) remove();
        });

        div.querySelector('button').addEventListener('click', remove);
        return div;
    },




    // muestra en tiempo real la cantidad de resultados antes y despues de aplicar filtros
    getResults: function getResults(listaVinilos) {
        var div = document.createElement('div');
        div.setAttribute('class', 'col-md-12');
        div.innerHTML = `
        <div class="resultados">
			<p>${listaVinilos.length} resultados</p>
        </div>
		`;
        return div;
    },

    getElemVinilos: function getElemVinilos(listaVinilos) {
        var div = document.createElement('div');
        div.setAttribute('class', 'row');

        var that = this;

        listaVinilos.forEach(function (infoVinilo) {
            var li = that.getElemVinilo(infoVinilo);
            div.appendChild(li);
        });

        return div;
    },

    setHeaderEvents: function setHeaderEvents() {
        // cambiamos createElement por querySelector
        var header = document.querySelector('header');

        var that = this;
        var filterByYear = header.querySelector('#agradable');
        var filterByGenre = header.querySelector('#byGenre');
        var filterByPrice = header.querySelector('#byPrice');
        var filterByFormat = header.querySelector('#byFormat');
        var filterByObject = header.querySelector('#byObject');

        var handler = function () {
            that.onFilter(filterByYear.value, filterByGenre.value, filterByPrice.value, filterByFormat.value, filterByObject.value);
        }

        filterByYear.addEventListener('change', handler);
        filterByGenre.addEventListener('change', handler);
        filterByPrice.addEventListener('change', handler);
        filterByFormat.addEventListener('change', handler);
        filterByObject.addEventListener('change', handler);

    },

    ordenar: function ordenar(listaVinilos) {
        var that = this;
        listaVinilos.sort(function(elemento,elemento){
                return elemento.puntos - elemento.puntos;
            });

        return listaVinilos;
    },

    render: function render(listaVinilos) {

        var main = document.getElementById('main');
        main.setAttribute('class', 'container');

        var elemVinilos = this.getElemVinilos(listaVinilos);
        // elemVinilos.ordenar(elemVinilos);

        var tamLista = this.getResults(listaVinilos);

        main.innerHTML = '';
        main.appendChild(tamLista);
        main.appendChild(elemVinilos);
    }
};
