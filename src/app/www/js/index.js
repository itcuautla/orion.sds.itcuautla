var semaforos=[]

var app = {
 
    initialize: function() 
    {
        
        setTimeout(function()
        {
            document.getElementById('splashscreen').style.display='none';

        },1200)

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {

        HttpRequest().then(function(data)
        {
            data.semaforos.forEach(semaforo => 
            {

            semaforos.push(semaforo)
            L.geoJSON(JSON.parse(semaforo.area),{  "color": "yellow" }).addTo(map);
            
            });


            startgeolocation(semaforos,map)
           
        }).catch( err => {
            
            alert('revisa tu conexion a internet')

        })

        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) 
    {


        

       
     

    }
};

app.initialize();