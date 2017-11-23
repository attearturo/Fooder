var puntajeGlobal = {
    precio: "",
    zona: "",
    creatividad: "",
    tranquilidad: "",
    informalidad: "",
    comida: "",
    sala: "",
};
var puntajeLocal = {
    sala: "",
    precio: "",
    zona: "",
    creatividad: "",
    tranquilidad: "",
    informalidad: "",
    comida: "",
};
(function () {
    const config = {
        apiKey: "AIzaSyDmFoDExbaLNWePwLQ1pGsyhl3_kh46efA",
        authDomain: "fooderhci.firebaseapp.com",
        databaseURL: "https://fooderhci.firebaseio.com",
        projectId: "fooderhci",
        storageBucket: "fooderhci.appspot.com",
        messagingSenderId: "832312219816"
    };

    firebase.initializeApp(config);
}());
var view = {

    estiloLista: function getElemVinilo(estiloLista) {

        var tiltSettings = [
            {}, ];

        function init() {
            var idx = 0;
                    [].slice.call(document.querySelectorAll('a.tilter')).forEach(function (el, pos) {
                idx = pos % 2 === 0 ? idx + 1 : idx;
                new TiltFx(el, tiltSettings[idx - 1]);
            });
        }

        // Preload all images.
        imagesLoaded(document.querySelector('main'), function () {
            document.body.classList.remove('loading');
            init();
        });
    },
    // genera cada oferta extrayendo sus datos del Modelo
    getElemVinilo: function getElemVinilo(infoVinilo) {
        var div = document.createElement('div');
        div.setAttribute('class', 'col-md-4 col-sm-6 col-xs-6');
        div.innerHTML = `
        <main class="smooth">
        <section class="content content--c1">
        <a href="#" class="tilter tilter--1">
            <figure class="tilter__figure">
                <img class="tilter__image" src="restaurantes/${infoVinilo.mini}" alt="img01" />
                <div class="tilter__deco tilter__deco--shine"><div></div></div>
                <figcaption class="tilter__caption">
                    <h3 class="tilter__title">${infoVinilo.nombre}</h3>
                    <p class="tilter__description"><String>Ranking ${infoVinilo.ranking}</String></p>
                    <p class="tilter__description">${infoVinilo.zona}</p>
                </figcaption>
                <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                    <path d="M20.5,20.5h260v375h-260V20.5z" />
                </svg>

            </figure>
        </a>
        </section>
        </main>
		`;
        var that = this;

        div.querySelector('.tilter').addEventListener('click', function () {
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
            
            <main class="smooth">
                <section class="content content--c1">
                    <a href="#" class="tilter tilter--1">
                        <figure class="tilter__figure">
                            <img class="tilter__image" src="restaurantes/${infoVinilo.imagen}" alt="img01" />
                            <div class="tilter__deco tilter__deco--shine">
                                <div>

                                </div>
                            </div>
                            <figcaption class="tilter__caption">
                                <h3 class="tilter__title">${infoVinilo.nombre}</h3>
                                <p class="tilter__description"><String>Ranking ${infoVinilo.ranking}</String></p>
                                <p class="tilter__description">${infoVinilo.zona}</p>
                            </figcaption>
                            <button type='button' class='closeView' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                        </figure>
                    </a>
                </section>
            </main>

            <div class='modal-body'>
                    <h5><Strong>Detalles</Strong></h5>
                    <p>${infoVinilo.descripcion}</p>
                    <div class='line'>
                        <p>Precio promedio:
                            <Strong>$${infoVinilo.precio}00</Strong>
                        </p>
                        <p>Dirección:
                            <Strong>${infoVinilo.direccion}</Strong>
                        </p>
                        <p>Telefonos:
                            <Strong>${infoVinilo.phone}</Strong>
                        </p>
                        <p>Tiempo promedio de estadia:
                            <Strong>${infoVinilo.tiempo}</Strong>
                        </p>
                    </div>
                    <p>Especialidad:
                        <Strong>${infoVinilo.especialidad}</Strong>
                    </p>                    
            </div>
        </div>
    </div>
        
    `;

        //        <div class='hey col-md-6'>
        //                        <img class="imagenMini" style="width:100%" src="restaurantes/${ infoVinilo.imagen = null ? " predeterminado.png " : infoVinilo.imagen }" class="img-responsive" />
        //                    </div>

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
        div.setAttribute('class', 'col-md-9');
        div.innerHTML = `
        <div class="resultados">
			<p>De los primeras cinco ¿A cuales irías?${listaVinilos.length}</p>
        </div>
		`;
        return div;
    },
    getElemVinilos: function getElemVinilos(listaVinilos) {
        var div = document.createElement('div');
        div.setAttribute('class', 'col-md-9');

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

        
        that.ordenar(puntajeGlobal);
//
//        puntajeGlobal.sala = header.querySelector('#sala').value;
//        puntajeGlobal.precio = header.querySelector('#precio').value;
//        puntajeGlobal.zona = header.querySelector('#zona').value;
//        puntajeGlobal.creatividad = header.querySelector('#creatividad').value;
//        puntajeGlobal.tranquilidad = header.querySelector('#tranquilidad').value;
//        puntajeGlobal.informalidad = header.querySelector('#informalidad').value;
//        puntajeGlobal.comida = header.querySelector('#comida').value;

        puntajeGlobal = this.sincronizarFirebase();
        var btnRecomendar = header.querySelector('.recomendar');
        btnRecomendar.addEventListener('click', function () {

            that.escribirFirebase(header.querySelector('#sala').value,
                header.querySelector('#precio').value,
                header.querySelector('#zona').value,
                header.querySelector('#tranquilidad').value,
                header.querySelector('#creatividad').value,
                header.querySelector('#informalidad').value,
                header.querySelector('#comida').value);

            console.log("Local" + header.querySelector('#sala').value);
            
            console.log(puntajeGlobal);
            that.ordenar(puntajeGlobal);
        });

    },

    escribirFirebase: function escribirFirebase(sala, precio, zona, tranquilidad, creatividad, informalidad, comida) {

        var revisarSala = firebase.database().ref().child('preferencias');
        revisarSala.on('value', snap =>
            console.log(snap.val())
        );
        
        firebase.database().ref().child('preferencias').child('Usuario').set({
                    sala: sala,
                    precio: precio,
                    zona: zona,
                    tranquilidad: tranquilidad,
                    informalidad: informalidad,
                    creatividad: creatividad,
                    comida: comida,
                });
        
//        revisarSala.forEach(function (salas) {
//            if (sala.includes(revisarSala.sala)) {
//                console.log('repetida');
//                
//            } else {
//                console.log(revisarSala.sala);
//                firebase.database().ref().child('preferencias').child('Usuario').set({
//                    sala: sala,
//                    precio: precio,
//                    zona: zona,
//                    tranquilidad: tranquilidad,
//                    informalidad: informalidad,
//                    creatividad: creatividad,
//                    comida: comida,
//                });
//            }
//        });
    },

    getFooder: function getFooder() {
        var div = document.createElement('div');
        div.innerHTML = `

        <footer class="footer-distributed">
            <div class="footer-left">
                <span><img src='img/logoSmall.png'></span>
                <p class="footer-links">
                    <a href="#">Nuestra tienda</a>
                    <a href="#">Colección</a>
                    <a href="#">Ofertas</a>
                    <p class="footer-company-name">Fooder &copy; 2017</p>
            </div>
            <div class="footer-center">
                <div><i class="fa fa-map-marker"></i>
                    <p><span>Universidad Icesi</span> Cali, Colombia</p>
                </div>
                <div><i class="fa fa-phone"></i>
                    <p>+1 555 123456</p>
                </div>

                <div><i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">contact@vyny.com</a></p>
                </div>
            </div>

            <div class="footer-right">
                <p class="footer-company-about">
                    <span>Sobre Fooder</span>Nuestra selección de vinilos y tocadiscos con nuevas características, nuevos lanzamientos, UO-ediciones exclusivas y los re-estrenos que todos hemos estado esperando.
                </p>
                <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
        </footer>
       `;
        return div;
    },
    sincronizarFirebase: function sincronizarFirebase() {
        const dbPreferencias = firebase.database().ref().child('preferencias').child('Usuario');

        dbPreferencias.on('value', snap =>
            puntajeGlobal = snap.val());
        return puntajeGlobal;
    },

    render: function render(listaVinilos) {

        var main = document.getElementById('main');
        main.setAttribute('class', 'container');
        var elemVinilos = this.getElemVinilos(listaVinilos);
        var tamLista = this.getResults(listaVinilos);

        main.innerHTML = '';
        main.appendChild(tamLista);
        main.appendChild(elemVinilos);
        this.estiloLista();


        var fooderTag = document.getElementById('fooderPag');
        var fooder = this.getFooder();
        fooderTag.innerHTML = '';
        fooderTag.appendChild(fooder);
    }
};
