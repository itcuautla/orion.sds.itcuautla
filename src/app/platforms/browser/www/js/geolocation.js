var watchID;

function startgeolocation(semaforos,map)
{
    var marker;
    var within_area;
    var within_semaforo=true;
  


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

                    document.getElementById('car_driving').style.display='none'
                    document.querySelectorAll('.bar_bg')[0].style.display='block'


                    document.querySelectorAll('.bar')[1].style.display='block'
                    document.getElementById('map').style.width='85%'

                    map.setView([position.coords.latitude, position.coords.longitude],20)
                    within_area=L.geoJSON(JSON.parse(semaforos[i].area),{  "color": "red" }).addTo(map);

                    var tiempo_rojo=semaforos[i].tiempo_rojo
                    var tiempo_amarillo=semaforos[i].tiempo_amarillo
                    var tiempo_verde=semaforos[i].tiempo_verde


                    var horaactual=new Date()


                    var actual_color=currentcolor(
                        tiempo_verde,
                        tiempo_amarillo,
                        tiempo_rojo,
                        horaactual.getHours() + ":" + horaactual.getMinutes() + ":"+ horaactual.getSeconds(),
                        semaforos[i].inicio_proceso_semaforo
                        )


                    startanimation(
                        document.querySelectorAll('.bar')[0],
                        document.querySelectorAll('.bar_bg')[0],
                            {
                                tiempo_verde:  tiempo_verde ,
                                tiempo_amarillo: tiempo_amarillo,
                                tiempo_rojo: tiempo_rojo
                            },
                            actual_color
                    )

                    startanimation(
                        document.querySelectorAll('.bar')[1],
                        document.querySelectorAll('.bar_bg')[1],
                            {
                                tiempo_verde:  tiempo_verde ,
                                tiempo_amarillo: tiempo_amarillo,
                                tiempo_rojo: tiempo_rojo
                            },
                            actual_color
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


        if(controls[0]){
             controls[0].stop()
        }

        if(controls[1]){
            controls[1].stop()
       }

       if(controls[2]){
        controls[2].stop()
        }

        if(controls[3]){
            controls[3].stop()
         }

    


         document.querySelectorAll('.bar_bg')[0].style.display='none'
        
         document.getElementById('car_driving').style.display='flex'

            map.removeLayer(within_area) 

            document.querySelectorAll('.bar_bg')[0].style.backgroundColor='white'
            document.querySelectorAll('.bar')[0].style.height='100%'

            document.querySelectorAll('.bar')[1].style.display='none'
            document.getElementById('map').style.width='100%'
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

 
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 5000 , enableHighAccuracy: true});
  
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

    var modulo= ( toSecond(actual) - toSecond(inicio)  ) % ciclo


    if(modulo<=tiempo_verde){

        return {
            color: 'verde' ,
            tiempo: modulo
        }


    }else if(modulo>tiempo_verde && modulo<=(tiempo_verde+tiempo_amarillo)){
    
        return {
            color: 'amarillo' ,
            tiempo: modulo
        }

    }else {
    
        return {
            color: 'rojo' ,
            tiempo: modulo
        }
    }

}