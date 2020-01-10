document.forms.namedItem("form_login").addEventListener('submit', function(e)
{
    var inputs=e.srcElement.elements

    var data = 
    {
        correo: inputs[0].value ,
        contraseña: inputs[1].value
    }
    
    LoginRequest(data).then(function(e){

        if(e==='true'){

            Cookies.set('email_orion',data.email)
            Cookies.set('pass_orion',  sjcl.encrypt("pass", data.contraseña))
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