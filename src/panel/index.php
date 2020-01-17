<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Libreria MUI -->
    <link href="//cdn.muicss.com/mui-latest/css/mui.min.css" rel="stylesheet" type="text/css" />
    <script src="//cdn.muicss.com/mui-latest/js/mui.min.js"></script>
    <!--Libreria noty-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.css" integrity="sha256-p+PhKJEDqN9f5n04H+wNtGonV2pTXGmB4Zr7PZ3lJ/w=" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.js" integrity="sha256-xzc5zu2WQtJgvCwRGTXiHny3T+KQZa6tQF24RVDRlL0=" crossorigin="anonymous"></script>
    <!-- Libreria Tingle -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.2/tingle.min.css" integrity="sha256-2gnCTFNhubDm8AiLEQsyFcFKK8/MmR66o1LrZsgSApE=" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.2/tingle.min.js" integrity="sha256-HW9FyRCNRnMtYFcp2JokPJKlIXC+FD7BK49wh7r9PoM=" crossorigin="anonymous"></script>
    <!-- Font awesome -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Libreria Cookie -->
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js"></script>
    <!-- Libreria SJCL -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sjcl/1.0.8/sjcl.min.js" integrity="sha256-nIoG9XIePM1QNttI6KAGLYGNxc4DNinxxmOZW0/Z7uA=" crossorigin="anonymous"></script>
  
    <!-- Estilos locales de la pagina -->
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/login/all.css">
    <link rel="stylesheet" href="css/app/all.css">
    <!-- Icono de la pagina-->
    <link rel="icon" href="img/orion.png" type="image/png">
    <!-- Titulo de la pagina-->
    <title>ORION</title>

</head>

<body>

    <!-- Menu tabs -->
    <div id='tabs'>

        <i class="fa fa-android fa-2x" id="mode_app" ></i>  

        <i class="fa fa-map-marker fa-2x" id="mode_login" style="background-color:rgba(0,0,0,0.1);"></i>  

    </div>

    <!-- Contenido -->
    <div id='content'>

        <?php include('component/app.html'); ?>

        <?php include('component/login.html'); ?>
        
    </div>


    <!-- Script Locales -->
    <script src="js/global_variables.js"></script>
    <script src="js/request.js"></script>
    <script src="js/login/form_login.js"></script>
    <script src="js/login/info.js"></script>
    <script src="js/index.js"></script>

</body>
</html>