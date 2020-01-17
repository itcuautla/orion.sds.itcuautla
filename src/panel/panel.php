<?php if(!isset($_COOKIE["email_orion"]) && !isset($_COOKIE["pass_orion"])){ header('Location: index.html'); } ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

   
<!-- Librerias externas-->

    <!-- Libreria MUI -->
    <link href="//cdn.muicss.com/mui-latest/css/mui.min.css" rel="stylesheet" type="text/css" />
    <script src="//cdn.muicss.com/mui-latest/js/mui.min.js"></script>
    <!-- Libreria Cleave -->
    <script src="https://cdn.jsdelivr.net/npm/cleave.js@1.5.3/dist/cleave.min.js"></script>
     <!-- Libreria leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
    <!-- Libreria leaflet geoman -->
    <link rel="stylesheet" href="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css" />
    <script src="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.min.js"></script>
    <!-- Libreria esri leaflet -->
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet/0.0.1-beta.5/esri-leaflet.js"></script>
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.css">
    <!-- Libreria Leaflet.fullscreen -->
    <script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css' rel='stylesheet' />
    <!-- Libreria Leaflet basemaps -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-basemaps@0.3.4/L.Control.Basemaps.css">
    <script src="https://cdn.jsdelivr.net/npm/leaflet-basemaps@0.3.4/L.Control.Basemaps-min.js"></script>
    <!-- Libreria Leaflet Sidebar-->
    <script src="https://cdn.jsdelivr.net/npm/leaflet-sidebar-v2@3.2.2/js/leaflet-sidebar.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-sidebar-v2@3.2.2/css/leaflet-sidebar.css"> 
    <!--Libreria noty-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.css" integrity="sha256-p+PhKJEDqN9f5n04H+wNtGonV2pTXGmB4Zr7PZ3lJ/w=" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.js" integrity="sha256-xzc5zu2WQtJgvCwRGTXiHny3T+KQZa6tQF24RVDRlL0=" crossorigin="anonymous"></script>
    <!--Libreria sweet alert-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.5.4/dist/sweetalert2.all.min.js"></script>
    <!-- Fuente Roboto Material Design-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap" rel="stylesheet">
    <!-- Font awesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Libreria Tippy -->
    <script src="https://unpkg.com/popper.js@1"></script>
    <script src="https://unpkg.com/tippy.js@5"></script>
    <!-- Libreria Cookie -->
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js"></script>
    <!-- Libreria Intro.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.9.3/intro.js" integrity="sha256-SPZP/x8QDPEhRlpJjet4AD5X4ergPWcxjhMn73SwyOE=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.9.3/introjs.min.css" integrity="sha256-/oZ7h/Jkj6AfibN/zTWrCoba0L+QhP9Tf/ZSgyZJCnY=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intro.js@2.9.3/themes/introjs-modern.css">
    
<!-- Estilos locales-->

    <!-- Estilos locales de la pagina -->
    <link rel="stylesheet" href="css/panel/all.css">
    <!-- Icono de la pagina-->
    <link rel="icon" href="img/orion.png" type="image/png">
    <!-- Titulo de la pagina-->
    <title>ORION</title>

  
</head>

<body>


    
    <!-- Cabecera de la pagina -->
    <?php include('component/header.html'); ?>

    <!-- Contenedor del mapa -->
    <div id="map"></div>
    
    <!-- Sidebar del mapa -->
    <?php include('component/sidebar.html'); ?>



</body>

    <!-- Script Locales -->
    <script src="js/global_variables.js"></script>
    <script src="js/request.js"></script>
    <script src="js/panel/form_sem.js"></script>
    <script src="js/panel/map/map_configuraton.js"></script>
    <script src="js/panel/map/map_sidebar.js"></script>
    <script src="js/panel/map/map_events.js"></script>
    <script src="js/panel/user_session.js"></script>
    <script src="js/panel/help.js"></script>


</html>