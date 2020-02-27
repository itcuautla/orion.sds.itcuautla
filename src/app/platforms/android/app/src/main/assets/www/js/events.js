document.addEventListener("pause", function(){

    stopanimation()
    stopgeolocation()

    if(marker && draw_area){
        map.removeLayer(marker)  
        map.removeLayer(draw_area) 
    }



}, false);



document.addEventListener("resume", function(){


   startgeolocation(semaforos,map)



}, false);