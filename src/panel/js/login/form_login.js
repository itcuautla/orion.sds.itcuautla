//Evento que se ejecuta para iniciar sesion
document.forms.namedItem("form_login").addEventListener('submit', function(e)
{
    //Obtiene los datos del formulario inicio de sesion
    var inputs=e.srcElement.elements
    //Almacena en un JSON el correo y contraseña capturados
    var data = 
    {
        correo: inputs[0].value ,
        contraseña: inputs[1].value
    }
    //Realiza peticion al servidor para validar datos de inicio de sesion
    LoginRequest(data).then(function(e){

        //Si el usuario esta registrado en la base de datos
        if(e==='true'){
            //Guarda su sesion en COOKIE
            Cookies.set('email_orion',data.email)
            //Encripta contraseña del usuario
            Cookies.set('pass_orion',  sjcl.encrypt("pass", data.contraseña))
            //Redirige al archivo panel.php
            window.location.href = "panel.php";
           
        }else{
                //Notificacion 
                new Noty({
                    text: 'Email y/o contraseña incorrectos',
                    type: 'error',
                    layout: 'topRight',
                    theme: 'metroui',
                    timeout: 1000,
                    progressBar: true,
                }).show();
        }

    })
    



    e.preventDefault();
})