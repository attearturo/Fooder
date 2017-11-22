var puntajeGlobal = {
        precio: "",
        zona: "",
        creatividad: "",
        tranquilidad: "",
        informalidad: "",
        comida: "",
    };

    
var view = {
    
    activarEstiloLista: function activarEstiloLista(){
			var tiltSettings = [
			{},
			{
				movement: {
					imgWrapper : {
						translation : {x: 10, y: 10, z: 30},
						rotation : {x: 0, y: -10, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					lines : {
						translation : {x: 10, y: 10, z: [0,70]},
						rotation : {x: 0, y: 0, z: -2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					caption : {
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 10, y: -10, z: 0},
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						rotation : {x: -5, y: 10, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
					},
					caption : {
						translation : {x: 30, y: 30, z: [0,40]},
						rotation : {x: [0,15], y: 0, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: 10, y: 10, z: [0,20]},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						rotation : {x: -5, y: 10, z: 0},
						reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
					},
					caption : {
						translation : {x: 20, y: 20, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 5, y: -5, z: 0},
						rotation : {x: 0, y: 0, z: 6},
						reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						translation : {x: 0, y: -8, z: 0},
						rotation : {x: 3, y: 3, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					lines : {
						translation : {x: 15, y: 15, z: [0,15]},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: 0, y: 8, z: 0},
						reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
					},
					caption : {
						translation : {x: 10, y: -15, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					}
				}
			},
			{
				movement: {
					lines : {
						translation : {x: -5, y: 5, z: 0},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					caption : {
						translation : {x: 15, y: 15, z: 0},
						rotation : {x: 0, y: 0, z: 3},
						reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
					},
					overlay : {
						translation : {x: 15, y: -15, z: 0},
						reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						translation : {x: 5, y: 5, z: 0},
						reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
					},
					caption : {
						translation : {x: 10, y: 10, z: [0,50]},
						reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
					}
				}
			},
			{
				movement: {
					lines : {
						translation : {x: 40, y: 40, z: 0},
						reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
					},
					caption : {
						translation : {x: 20, y: 20, z: 0},
						rotation : {x: 0, y: 0, z: -5},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: -30, y: -30, z: 0},
						rotation : {x: 0, y: 0, z: 3},
						reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
					}
				}
			}];

			function init() {
				var idx = 0;
				[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
					idx = pos%2 === 0 ? idx+1 : idx;
					new TiltFx(el, tiltSettings[idx-1]);
				});
			}

			// Preload all images.
			imagesLoaded(document.querySelector('main'), function() {
				document.body.classList.remove('loading');
				init();
			});
    },
    

    // genera cada oferta extrayendo sus datos del Modelo
    getElemVinilo: function getElemVinilo(infoVinilo) {
        var div = document.createElement('div');
        div.setAttribute('class', 'backgroundLista col-md-4');
        div.innerHTML = `

        <main>
			<section class="content content--c1">
				<a href="#" class="tilter tilter--1">
					<figure class="tilter__figure">
						<img class="tilter__image" src="restaurantes/${infoVinilo.imagen}" alt="img01" />
						<div class="tilter__deco tilter__deco--shine"><div></div></div>
						<figcaption class="tilter__caption">
							<h3 class="tilter__title">${infoVinilo.nombre}</h3>
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
        
    this.activarEstiloLista();
    }
};
