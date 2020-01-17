//Se almacena  temporalmente las coordenadas de los poligonos que se crean.
  let coordinates = []

//Evento que se ejecuta cada vez que se dibuja un vertice de un poligono en el mapa
  map.on('pm:drawstart', ({ workingLayer }) => {
    workingLayer.on('pm:vertexadded', e => {
      coordinates.push([e.latlng.lng, e.latlng.lat]);
    });  
});

//Evento que se ejecuta cada vez que selecciona un elemento a dibujar
  map.on('pm:drawstart', e => {
    if(e.shape=='Marker'){
      e.workingLayer._icon.src=trafficlight_icon;
  }
});

//Evento que se ejecuta cada vez que se termina de dibujar un elemento en el mapa
  map.on('pm:drawend', e => {
    if (e.shape == "Polygon") {
      geojson['type'] = 'Polygon';
      coordinates.push(coordinates[0])
      geojson['coordinates'] = [coordinates]
      coordinates = []
      sidebar.open('home')

      //Notificacion 
      new Noty({
        text: 'Registra los datos del semaforo',
        layout: 'topRight',
        theme: 'metroui',
        timeout: 2500,
        progressBar: true,
      }).show();
    }
});

//Evento que se ejecuta cada vez que se crea un elemento en el mapa
  map.on('pm:create', e => {
    //Si se crea un marcador de un semaforo
    if (e.shape == "Marker") {
      //Obtiene datos del formulario se registro de semaforo
      let inputs = document.forms.namedItem("form_sem").elements
      //Limpia inputs
      CleanInputs(inputs)
      //Cierra sidebar
      sidebar.close('home')
      //Envia valor de coordenadas geograficas a los campos latitud y longitud del formulario registro de semaforo
      inputs[0].value = e.marker._latlng.lat
      inputs[1].value = e.marker._latlng.lng

      //Notificacion 
      new Noty({
        text: 'Dibuja el area geografica del semaforo',
        layout: 'topRight',
        theme: 'metroui',
        timeout: 2500,
        progressBar: true,
      }).show();

      //Habilita el modo dibujar area geografica(poligono)
      map.pm.enableDraw('Polygon', {
        snappable: true,
        snapDistance: 20,
      });
      e.marker.dragging._marker._icon.src=trafficlight_icon;

      //Agregar marcador el mapa
      AddMarker(e);
    }


    
  });



function AddMarker(e) {
  
  //se crea un nuevo marcador y se le asigna el evento que se lanzará al hacerle click
  var marcador = new L.marker( [e.marker._latlng.lat, e.marker._latlng.lng] ).on('click', ClickSem) 
  
  //se agrega el marcador a map
  marcador.addTo(map)
  marcador._icon.src=trafficlight_icon;
  

}

//Funcion que se ejecuta cada vez que se hace click en un semaforo
function ClickSem(e) {
  sidebar.open('home')
  var json_coordenadas = {
      coordenadas:{
          longitud: e.latlng.lng ,
          latitud: e.latlng.lat
      }
   }
  //Hace una peticion al servidor para obtener los datos de un semaforo con las coordenas json_coordenadas
  SelectSemRequest(json_coordenadas).then(function(data)
  {
      //Parsea los datos del semaforo a un JSON
      var json_data = JSON.parse(data).semaforo[0]
      //Selecciona el formulario de registro de semaforo
      let inputs = document.forms.namedItem("form_sem").elements
      //Envia a los inputs los datos de json_data
      inputs[0].value= json_data.latitud
      inputs[1].value= json_data.longitud
      inputs[2].value= json_data.nombre
      inputs[3].value= json_data.tiempo_verde
      inputs[4].value= json_data.tiempo_amarillo
      inputs[5].value= json_data.tiempo_rojo
      inputs[6].value= json_data.inicio_proceso_semaforo
      inputs[7].value= json_data.inicio_suspension_semaforo
  })
 

 
  
}

//Evento que se dispara cada vez que se carga todo el documento html
window.onload=function(){

  //Realiza peticion para obtener todos los semaforos
  AllSemRequest().then(function(data){
    //Parsea los datos obtenidos a un JSON
    var json_data = JSON.parse(data).semaforos

    //Recorre todos los datos de json_data
    for(let i=0;i<json_data.length;i++)
    {
      //Agrega al mapa todas areas geograficas de los semaforos registrados en la base de datos
      L.geoJSON(JSON.parse(json_data[i].area),{
        "color": "yellow"
      }).addTo(map);
      //Agrega al mapa todos los marcadores de los semaforos registrados en la base de datos
      var marcador = new L.marker([json_data[i].latitud, json_data[i].longitud]).on('click', ClickSem)
      marcador.addTo(map)
      marcador._icon.src=trafficlight_icon; 
    }


  })
}