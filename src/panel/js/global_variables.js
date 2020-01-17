//IMG PATH
    let trafficlight_icon='img/semaforo.png';

//URLs request 

    //Direccion URL a la cual se haran peticiones
    var url = "https://sds.cuautla.tecnm.mx:8080"
    //Direccion URL para obtener todos los semaforos
    var all_sem_url = url +"/All/Show"
    //Direccion URL para crear un semaforo en la base de datos
    var create_sem_url = url +"/All/Create"
    //Direccion URL para obtener un semaforo
    var select_sem_url= url +"/All/Select"
    //Direccion URL para eliminar un semaforo en la base de datos
    var delete_sem_url = url +"/All/Delete"
    //Direccion URL para validar un inicio de sesion
    var login_url = url +"/Usuario/Validar"

//Data

    //Variable GeoJson para almacenar areas geograficas(poligono) de un semaforo
    var geojson={}