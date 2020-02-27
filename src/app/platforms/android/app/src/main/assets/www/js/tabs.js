var tabs=document.getElementById('tabs')

tabs.children[0].addEventListener('click',function(){

    document.getElementById('mode_sem').style.display='flex'
    document.getElementById('mode_map').style.display='none'

    tabs.children[0].style.backgroundColor='rgba(0, 0, 0, 0.1)'
    tabs.children[1].style.backgroundColor='white'

    



})


tabs.children[1].addEventListener('click',function(){

    document.getElementById('mode_sem').style.display='none'
    document.getElementById('mode_map').style.display='flex'


    tabs.children[1].style.backgroundColor='rgba(0, 0, 0, 0.1)'
    tabs.children[0].style.backgroundColor='white'
    
})