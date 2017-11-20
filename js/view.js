var puntajeGlobal = {
        precio: "",
        zona: "",
        creatividad: "",
        tranquilidad: "",
        informalidad: "",
        comida: "",
    };
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
        div.setAttribute('class', 'col-md-4');
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

        div.querySelector('button').addEventListener('click', function () {
            var modal = that.getModalVinilo(infoVinilo);
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
                    <h4 class="colorPrice">Precio Promedio<strong>$ ${infoVinilo.precio}00</strong></h4>  
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
                        <img class="imagenMini" style="width:100%" src="restaurantes/${ infoVinilo.imagen = null ? "predeterminado.png" : infoVinilo.imagen }" class="img-responsive" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

        var modal = div.querySelector('.modal');
        var backdrop = div.querySelector('.modal-backdrop');
        modal.style.display = 'block';

        setTimeout(function () {
            modal.style.opacity = 1;
            backdrop.style.opacity = .5;
            div.querySelector('.modal-dialog').style.transform = 'translate(0,0)';

        });

        var remove = function () {
            modal.style.opacity = 0;
            backdrop.style.opacity = 0;
            setTimeout(function () {
                div.remove();
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
        
        var that = this; 

        var header = document.querySelector('header');
        puntajeGlobal.precio = header.querySelector('#precio');
        puntajeGlobal.zona = header.querySelector('#zona');
        puntajeGlobal.creatividad = header.querySelector('#creatividad');
        puntajeGlobal.tranquilidad = header.querySelector('#tranquilidad');
        puntajeGlobal.informalidad = header.querySelector('#informalidad');
        puntajeGlobal.comida = header.querySelector('#comida');

        that.ordenar(puntajeGlobal);
        var btnRecomendar = header.querySelector('.recomendar');
        btnRecomendar.addEventListener('click', function(){
            that.ordenar(puntajeGlobal);
        });
        
    },

    render: function render(listaVinilos) {
        var main = document.getElementById('main');
        main.setAttribute('class', 'container');

        var elemVinilos = this.getElemVinilos(listaVinilos);

        var tamLista = this.getResults(listaVinilos);

        main.innerHTML = '';
        main.appendChild(tamLista);
        main.appendChild(elemVinilos);
    }
};
