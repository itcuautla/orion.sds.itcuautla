// Cambia la vista del documento al modo descargar app
document.getElementById('mode_app').onclick=function()
{
    document.getElementById('login_html').style.display='none';
    document.getElementById('app_html').style.display='flex';
    document.getElementById('mode_app').style.backgroundColor='rgba(0,0,0,0.15)'
    document.getElementById('mode_login').style.backgroundColor='rgba(0,0,0,0)';
}
// Cambia la vista del documento al modo login
document.getElementById('mode_login').onclick=function()
{
    document.getElementById('app_html').style.display='none';
    document.getElementById('login_html').style.display='flex';
    document.getElementById('mode_app').style.backgroundColor='rgba(0,0,0,0)';
    document.getElementById('mode_login').style.backgroundColor='rgba(0,0,0,0.15)';
}  
