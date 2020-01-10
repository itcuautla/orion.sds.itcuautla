document.querySelectorAll('.format-time').forEach( function(input){

    new Cleave(input, {
        time: true,
        timePattern: ['h', 'm', 's']
        });

})


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

function CleanInputs(inputs)
{
    for (let i = 0; i< inputs.length; i++)
    {
        inputs[i].value=""
    }

}



document.getElementById('del_sem').onclick=function(e){

    let inputs = document.forms.namedItem("form_sem").elements

    var json_coordenadas = {
        coordenadas:{
            latitud: inputs[0].value ,
            longitud: inputs[1].value 
        }
    }

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
        if (result.value) {

            
            DeleteSemRequest(json_coordenadas).then(function(e){

                CleanInputs(inputs)
                location.reload()

        
            })

            
         
        }
      })

  
    
     
e.preventDefault()
};


document.forms.namedItem('form_sem').addEventListener('submit',function(e){
    if( Object.keys(geojson).length === 0 ){

        Swal.fire(
            'Crea un semaforo en el mapa',
            'Para poder registrar un semaforo primero crea el marcador y area geografica del semaforo en el mapa',
            'info'
          )
    
       }else{
    
    
        let inputs = document.forms.namedItem("form_sem").elements
    
    
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
       
        CreateSemRequest(data).then(function(e){
            if(e){

                console.log(e)

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
        

           
    
        CleanInputs(inputs)
        sidebar.close('home')

       
    
    
     
        geojson={}
    
        }
    
    
       }
    

e.preventDefault()
})
