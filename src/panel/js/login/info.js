// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "cerrar"
    //cssClass: ['custom-class-1', 'custom-class-2']
});


document.getElementById('open_info').onclick=function(){
    modal.open()
}


// add a button
modal.addFooterBtn('Aceptar', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function() {
    // here goes some logic
    modal.close();
});

// set content
modal.setContent(`

<div id='info'>
    <section>
        <img src='img/orion_black.png' height='200'>
    </section>

<h2>Sistema Digital de Semáforos</h2>
<p>
El sistema Digital de Semáforos fue nombrado ORION en honor a las tres estrellas ALNITAK, ALNILAM, MINTAKA de la constelación ORION que forman la particular figura de tres luces secuenciales iguales a las de un semáforo tradicional.
ORION sds es una red de semaforos digitales virtualizados la cual tiene como objetivo ser una herramienta digital de apoyo para los semaforos existentes en las ciudades, mostrando al usuario el estado(color) del semáforo mientras conduce en tiempo real, el semáforo digital puede ser usado en cualquier momento principalmente cuando un semáforo se encuentre averiado.

</p>

<h2>Acerca</h2>
<p>El sistema digital de semaforos ORION fue desarrollado por alumnos del Tecnológico Nacional de México campus Cuautla
en el programa de modalidad servicio social. El cual tiene como objetivo brindar un bien social.
</p>

<img src='img/itc.png' height='80'>
<img src='img/tecnm.png' height='90'>


</div>
`);



