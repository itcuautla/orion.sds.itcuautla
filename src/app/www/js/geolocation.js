var watchID;
var marker;
var draw_area;

function startgeolocation(semaforos,map)
{
    
    var within_semaforo=true;

    var bars={
        sem: styler( document.querySelectorAll('.bar')[0]),
        map: styler( document.querySelectorAll('.bar')[1])
    }
    var bars_bg={
        sem: document.querySelectorAll('.bar_bg')[0],
        map: document.querySelectorAll('.bar_bg')[1]
    }
  


    function onSuccess(position)
    {
   
        if(marker){  map.removeLayer(marker)  }
        map.setView([position.coords.latitude, position.coords.longitude])
        marker=L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
           
        var point = turf.point([position.coords.longitude, position.coords.latitude ]);


        for (let i = 0; i < semaforos.length; i++)
        {
            var polygon = turf.polygon(JSON.parse(semaforos[i].area).coordinates);

            var pointinarea= turf.booleanPointInPolygon(point, polygon);
            

            if(pointinarea){
                
                if(within_semaforo){

                showelements()
                map.setView([position.coords.latitude, position.coords.longitude],20)
                draw_area=L.geoJSON(JSON.parse(semaforos[i].area),{  "color": "red" }).addTo(map);

                var tiempo_rojo=semaforos[i].tiempo_rojo
                var tiempo_amarillo=semaforos[i].tiempo_amarillo
                var tiempo_verde=semaforos[i].tiempo_verde


                    var actual_color = currentcolor(
                        tiempo_verde,
                        tiempo_amarillo,
                        tiempo_rojo,
                        new Date().toLocaleTimeString('es-MX'),
                        semaforos[i].inicio_proceso_semaforo
                        )
                    

                    
                    switch(actual_color.color)
                    {
                        case 'verde':

                            if(actual_color.tiempo<=2){

                                setTimeout(() => {

                                    speak('semáforo en color amarillo. baja la velocidad')

                                }, 2000);


                            }else{

                                speak('semáforo en color verde. sigue avanzando')

                            }


                        break;
                        case 'amarillo':

                            if(actual_color.tiempo<=2){

                                setTimeout(() => {

                                    speak('semáforo en color rojo. detente con precaución')

                                }, 2000);


                            }else{

                                speak('semáforo en color amarillo. baja la velocidad')

                            }
                            
                        break;
                        case 'rojo':


                            if(actual_color.tiempo<=2){

                                setTimeout(() => {
                                    speak('semáforo en color verde. sigue avanzando')


                                }, 2000);


                            }else{

                                speak('semáforo en color rojo. detente con precaución')



                            }
                            
                        break;
                    }


            
                    
                    startanimation( bars, bars_bg,
                    {
                        tiempo_verde:  tiempo_verde ,
                        tiempo_amarillo: tiempo_amarillo,
                        tiempo_rojo: tiempo_rojo
                    },  actual_color
                    )
                 

                    new Noty({
                        text: 'CUIDADO CON EL SEMAFORO',
                        layout: 'bottomCenter',
                        theme: 'metroui',
                        timeout: 2500,
                        progressBar: true,
                      }).show();

                      within_semaforo=false

                }

                return

            } 
        }
       
        if(!within_semaforo){

            stopanimation()
            hideelements()
            map.removeLayer(draw_area) 
            within_semaforo=true

        }
    
            
        
        

    }

  
    function onError(error)
    {
        new Noty({
            type: 'error',
            text: 'Tu ubicacion no pudo ser obtenida',
            layout: 'bottomCenter',
            theme: 'metroui',
            timeout: 2000,
            progressBar: true,
        }).show();
    }

 
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 8000 , enableHighAccuracy: true});
  
}


function stopgeolocation(){
    navigator.geolocation.clearWatch(watchID)
}

function toSecond(hour){
    var parse=hour.split(":");
    return parse[0]*3600+parse[1]*60+parse[2]*1;
}

function currentcolor(tiempo_verde,tiempo_amarillo,tiempo_rojo,actual,inicio){

    var ciclo = tiempo_verde+tiempo_amarillo+tiempo_rojo

    var modulo = ( toSecond(actual) - toSecond(inicio)  ) % ciclo


    if(modulo<=tiempo_verde){

        return {
            color: 'verde' ,
            tiempo: tiempo_verde-modulo
        }


    }else if(modulo>tiempo_verde && modulo<=(tiempo_verde+tiempo_amarillo)){
    
        return {
            color: 'amarillo' ,
            tiempo: (tiempo_verde+tiempo_amarillo)-modulo
        }

    }else {
    
        return {
            color: 'rojo' ,
            tiempo: ciclo-modulo
        }
    }

}

function showelements(){

    document.getElementById('car_driving').style.display='none'
                    document.querySelectorAll('.bar_bg')[0].style.display='block'


                    document.querySelectorAll('.bar')[1].style.display='block'
                    document.getElementById('map').style.width='85%'

}

function hideelements(){


    document.querySelectorAll('.bar_bg')[0].style.display='none'
        
        document.getElementById('car_driving').style.display='flex'


            document.querySelectorAll('.bar_bg')[0].style.backgroundColor='white'
            document.querySelectorAll('.bar')[0].style.height='100%'

            document.querySelectorAll('.bar')[1].style.display='none'
            document.getElementById('map').style.width='100%'

}