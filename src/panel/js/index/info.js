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
<p>El sistema ORION es una herramienta de apoyo digital
 a los semáforos existentes, mostrando al usuario el estado(color)
  del semáforo en tiempo real, el cual podrá ser usado en cualquier
   momento principalmente cuando un semáforo se encuentre en mal estado.
</p>

<h2>Acerca</h2>
<p>El sistema ORION fue desarrollado por alumnos del Tecnológico Nacional de México campus Cuautla
en el programa de modalidad servicio social. El cual tiene como objetivo brindar un bien social al publico en general.
</p>

<img src='img/itc.png' height='80'>
<img src='img/tecnm.png' height='90'>
<img src='img/open.jpg' height='80'>


</div>
`);



