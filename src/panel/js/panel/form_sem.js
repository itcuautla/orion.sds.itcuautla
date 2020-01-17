//Agrega formato a los input de horario de inicio y suspencion
document.querySelectorAll('.format-time').forEach( function(input){

    new Cleave(input, {
        time: true,
        timePattern: ['h', 'm', 's']
        });

})
//Verifica si el marcador de un semaforo ha sido creado
function CheckMarkerCreate(inputs){

    if(inputs[0].value=="" && inputs[1].value==""){
         //Notificacion 
         new Noty({
            text: 'Coloca el marcador del semaforo en el mapa',
            layout: 'topLeft',
            theme: 'metroui',
            timeout: 2500,
            progressBar: true,
        }).show();
        return false
    }else{
        return true
    }
}
//Limpia el valor de todos los inputa
function CleanInputs(inputs)
{
    for (let i = 0; i< inputs.length; i++)
    {
        inputs[i].value=""
    }

}

//Evento del boton eliminar semaforo
document.getElementById('del_sem').onclick=function(e){

    //Obtiene los datos del formulario de registro de un semaforo
    let inputs = document.forms.namedItem("form_sem").elements
    //JSON para almenar coordenas geograficas
    var json_coordenadas = {
        coordenadas:{
            latitud: inputs[0].value ,
            longitud: inputs[1].value 
        }
    }

    //Mensaje para confirmar si el usuario desea eliminar un semaforo
    Swal.fire({
        title: '¿Estas seguro de eliminar este semaforo?',
        text: "El semaforo se eliminara de la base de datos ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'cancelar'
      }).then((result) => {

        //Si el usuario confirma eliminar el semaforo 
        if (result.value) {
            
            //Hace una peticion al servidor para eliminar un semaforo que tenga las coordenas de json_coordenadas
            DeleteSemRequest(json_coordenadas).then(function(e){

                CleanInputs(inputs)
                location.reload()
        
            })
        }
      })
     
e.preventDefault()
};

//Evento para registrar un semaforo
document.forms.namedItem('form_sem').addEventListener('submit',function(e){

    //Si el area geografica no ha sido creada no permite registrar un semaforo
    if( Object.keys(geojson).length === 0 ){

        Swal.fire(
            'Crea un semaforo en el mapa',
            'Para poder registrar un semaforo primero crea el area geografica del semaforo en el mapa',
            'info'
          )
    
       }else{
    
        //Obtiene los datos del formulario de registro de semaforo
        let inputs = document.forms.namedItem("form_sem").elements
    
        //Si el marcador del semaforo no ha sido creado no permite registrar un semaforo
        if(CheckMarkerCreate(inputs)){
     
            let data=
            {
                semaforo:
            {
                nombre: inputs[2].value,
                estado_semaforo: true,
                longitud: parseFloat( inputs[1].value),
                latitud: parseFloat( inputs[0].value),
                tiempo_inicio: 0,
                inicio_suspension_semaforo: inputs[7].value,
                inicio_proceso_semaforo: inputs[6].value,
                tiempo_verde: parseInt(inputs[3].value),
                tiempo_amarillo: parseInt(inputs[4].value),
                tiempo_rojo:parseInt( inputs[5].value),
                
            },
                area: geojson
            }
       
            //Peticio al servidor para crear semaforo
            CreateSemRequest(data).then(function(e){
                if(e){
                    //Si el semaforo se registra correctamente se muestra notificacion
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registro exitoso',
                        text:'El semaforo se registro correctamente',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    })
                }
            });
        
        //Se limpian los valores de los inputs
        CleanInputs(inputs)
        //Se cierra sidebar
        sidebar.close('home')
        //Se inicializa geojson para almacenar el area geografica e otro semaforo
        geojson={}
    
        }
    
    
       }
    

e.preventDefault()
})
