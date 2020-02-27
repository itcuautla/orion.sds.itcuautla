const {timeline,easing,styler,tween} = popmotion
var control=false

function startanimation(bars,bars_bg,time_colors,actual_state){
        control=false
        var isgreen=true

        var track1,track2,track3;
        var tiempo1,tiempo2,tiempo3;

        if(actual_state.color=='verde'){

            track3='green'
            tiempo3=time_colors.tiempo_verde
            track1='yellow'
            tiempo1=time_colors.tiempo_amarillo
            track2='red'
            tiempo2=time_colors.tiempo_rojo

        }else if(actual_state.color=='amarillo'){

            track3='yellow'
            tiempo3=time_colors.tiempo_amarillo
            track1='red'
            tiempo1=time_colors.tiempo_rojo
            track2='green'
            tiempo2=time_colors.tiempo_verde

        }else if(actual_state.color=='rojo'){

            track3='red'
            tiempo3=time_colors.tiempo_rojo
            track1='green'
            tiempo1=time_colors.tiempo_verde
            track2='yellow'
            tiempo2=time_colors.tiempo_amarillo

        }
       
        var init = tween(
        {
            
            from:{ height:'0%'}  ,
            to: { height: '100%'} ,
            duration: parseInt(actual_state.tiempo+'000'),
            ease: easing.linear

        }).start(
        { 
            update: function(v)
            {

                if(control){
                    init.stop()
                    return;
                }


                bars.sem.set(v)    
                bars_bg.sem.style.backgroundColor=track3

                bars.map.set(v)    
                bars_bg.map.style.backgroundColor=track3

            },
            complete: function()
            {

                        
                var time=timeline(
                    [
                        { 
                        track: track1,
                            from: 0  ,
                            to: 100 , 
                            duration: parseInt(tiempo1+'000')
                        },
                        { 
                        track: track2,
                            from: 0  ,
                            to: 100 , 
                            duration: parseInt(tiempo2+'000')
                        },
                        { 
                        track: track3,
                            from: 0  ,
                            to: 100 , 
                            duration:  parseInt(tiempo3+'000')
                        }
            
                    ],{
                        ease: easing.linear
                        ,loop: 'Infinity'
                    }).start(
                    {
                        update: color => {
                            

                            if(control){
                                time.stop()
                                return;
                            }

            
                            if(color[track2]==0 && color[track3]==0){

                                bars.sem.set({   height:  color[track1]+'%' })
                                bars_bg.sem.style.backgroundColor=track1

                                bars.map.set({   height:  color[track1]+'%' })
                                bars_bg.map.style.backgroundColor=track1


                                


                              


                            }
            
                            if(color[track1]==100 && color[track3]==0){ 

                                
                                bars.sem.set({ height:  color[track2]+'%' })
                                bars_bg.sem.style.backgroundColor=track2

                                bars.map.set({ height:  color[track2]+'%' })
                                bars_bg.map.style.backgroundColor=track2



                            }
            
                            if(color[track1]==100 && color[track2]==100)
                            {  
                                bars.sem.set({  height:  color[track3]+'%' })
                                bars_bg.sem.style.backgroundColor=track3

                                bars.map.set({  height:  color[track3]+'%' })
                                bars_bg.map.style.backgroundColor=track3                                
                            }

                            
                            if(color['green']>0)
                            {
                                if(isgreen){
                                    speak('semáforo en color verde. sigue avanzando')
                                }
                                isgreen=false
                            }

                          





                           







                        },
                        complete: () => {
                           console.log('finish')
                        }
                    })
                }
        })
    }


function stopanimation(){
    control=true
}