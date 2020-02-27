function speak(text){

    TTS.speak({
        text: text ,
        locale: 'es-GB'
    }, function () {
        
    }, function (reason) {
        console.log(reason)
    });

}