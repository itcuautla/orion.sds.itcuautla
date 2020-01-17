//Tooltip para cerrar sesion

tippy('#tooltip', {
    content: `<button class="mui-btn mui-btn--raised" 
    onclick=
    "
    Cookies.remove('email_orion');
    Cookies.remove('pass_orion');
    window.location.href = 'index.php'
    "
    >Cerrar Sesión</button>`,
    arrow: false,
    interactive: true
});










