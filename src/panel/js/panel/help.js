function help(){
    
let menu=introJs()

menu.setOption("nextLabel", "siguiente");
menu.setOption("prevLabel", "anterior");
menu.setOption("skipLabel", "saltar");
menu.setOption("doneLabel", "terminar");



menu.addSteps([
{
    element: document.querySelector('.leaflet-control-zoom-in'),
    intro: "Botón de zoom in: hace un zoom hacia dentro en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-control-zoom-out'),
    intro: "Botón de zoom out: hace un zoom hacia afuera en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-pm-icon-marker'),
    intro: "Botón de marcador: activa el marcador del semaforo para ser colocado en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-pm-icon-polygon'),
    intro: "Botón de poligono: activa el modo dibujar poligono en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.leaflet-control-fullscreen-button'),
    intro: "Botón pantalla completa: activa el modo pantalla completa sobre el mapa",
    position: 'right'
},
{
    element:document.querySelector('.geocoder-control-input'),
    intro: "Botón busqueda: busca lugares, municipios, estados en el mapa",
    position: 'right'
},
{
    element:document.querySelector('.basemaps'),
    intro: "Botón base de mapa: activa diferentes estilos de mapas",
    position: 'right'
},
{
    element:document.querySelector('#form_sem'),
    intro: "Formulario Semaforo: registra todos los datos que pertencen a un semaforo",
    position: 'right'
},
{
    element:document.getElementById('form_sem').children[0],
    intro: "Latitud, Longitud: coordenadas geograficas del marcador del mapa",
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


menu.onbeforechange(function(e){
    if(e.id==='form_sem'){
        sidebar.open('home')
    }
})

menu.oncomplete(function(){
    sidebar.close('home')
});

menu.start()



}

