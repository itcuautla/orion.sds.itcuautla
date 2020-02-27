const {timeline,easing,styler,tween} = popmotion

var controls=[];

function startanimation(element,bg,tiempos_colores,estado_actual)
{
        const bar = styler(element);
        const bar_bg=bg

        var track1,track2,track3;
        var tiempo1,tiempo2,tiempo3;

        if(estado_actual.color=='verde'){
            track3='green'
            tiempo3=tiempos_colores.tiempo_verde
            track1='yellow'
            tiempo1=tiempos_colores.tiempo_amarillo
            track2='red'
            tiempo2=tiempos_colores.tiempo_rojo
        }else if(estado_actual.color=='amarillo'){
            track3='yellow'
            tiempo3=tiempos_colores.tiempo_amarillo
            track1='red'
            tiempo1=tiempos_colores.tiempo_rojo
            track2='green'
            tiempo2=tiempos_colores.tiempo_verde
        }else if(estado_actual.color=='rojo'){
            track3='red'
            tiempo3=tiempos_colores.tiempo_rojo
            track1='green'
            tiempo1=tiempos_colores.tiempo_verde
            track2='yellow'
            tiempo2=tiempos_colores.tiempo_amarillo
        }



       

        var init=tween({
            from:{ height:'0%'}  ,
            to: { height: '100%'},
            duration: parseInt(estado_actual.tiempo+'000'),
            ease: easing.linear
        }).start(
        { 
            update: function(v)
            {
                  bar.set(v)    
                  bar_bg.style.backgroundColor=track3
            },
            complete: function()
            {

                        
                    var control=timeline(
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
            
                            if(color[track2]==0 && color[track3]==0){
                                bar.set({   height:  color[track1]+'%' })
                                bar_bg.style.backgroundColor=track1
                            }
            
                            if(color[track1]==100 && color[track3]==0){ 
                                bar.set({ height:  color[track2]+'%' })
                                bar_bg.style.backgroundColor=track2
                            }
            
                            if(color[track1]==100 && color[track2]==100){  
                                bar.set({  height:  color[track3]+'%' })
                                bar_bg.style.backgroundColor=track3
                            }
                        },
                        complete: () => {
                           console.log('finish')
                        }
                    })
                    controls.push(control)     
                }
        })

        controls.push(init)
}