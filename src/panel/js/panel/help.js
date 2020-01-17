//Funcion que se ejecuta para darle un intro rapido al usuario de como funciona el panel de control.
function help(){
    
//Objeto de la libreria Intro.js
let menu=introJs()

// Configuracion de etiquetas
menu.setOption("nextLabel", "siguiente");
menu.setOption("prevLabel", "anterior");
menu.setOption("skipLabel", "saltar");
menu.setOption("doneLabel", "terminar");


//Pasos del intro
menu.addSteps([
{
    element: document.querySelector('.leaflet-control-zoom-in'),
    intro: "Zoom in: hace un zoom hacia dentro en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-control-zoom-out'),
    intro: "Zoom out: hace un zoom hacia afuera en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-pm-icon-marker'),
    intro: "Marcador: activa el marcador del semaforo para ser colocado en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-pm-icon-polygon'),
    intro: "Dibuja poligono: activa el modo dibujar un area geografica(poligono) en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-control-fullscreen-button'),
    intro: "Pantalla completa: activa el modo pantalla completa sobre el mapa",
    position: 'right'
},
{
    element:document.querySelector('.geocoder-control-input'),
    intro: "Busqueda: busca lugares, municipios, estados en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.basemaps'),
    intro: "Base de mapa: activa diferentes estilos de mapas",
    position: 'right'
},
{
    element:document.querySelector('#form_sem'),
    intro: "Formulario Semaforo: registra todos los datos que pertencen a un semaforo",
    position: 'right'
},
{
    element:document.getElementById('form_sem').children[0],
    intro: "Latitud, Longitud: coordenadas geograficas del marcador de un semaforo",
    position: 'right'
},
{
    element:document.getElementById('form_sem').children[1],
    intro: "Datos Semaforo: campos para capturar los datos de un semaforo",
    position: 'right'
},
{
    element:document.getElementById('form_sem').children[2],
    intro: "Registrar,Eliminar: botones para registrar o eliminar un semaforo en la base de datos",
    position: 'right'
}
]);

//Abre sidebar
menu.onbeforechange(function(e){
    if(e.id==='form_sem'){
        sidebar.open('home')
    }
})
//Cierra sidebar al terminar intro
menu.oncomplete(function(){
    sidebar.close('home')
});

//Inicia el intro
menu.start()



}

