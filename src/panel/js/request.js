//Realiza peticion al servidor, retorna un promise
function HttpRequest(url,json)
{
    if(json){
        return fetch( url , 
            { 
            method: "POST",
             body: JSON.stringify(json)
            });
    }else{
        return fetch(url);    
    }
}

//Realiza peticion al servidor para validar un inicio de sesion, retorna un promise con los datos
function LoginRequest(data){

    let data_response=HttpRequest(login_url,data).then(res => res.text());
    return data_response;

}
//Realiza peticion al servidor para obtener todos los semaforos, retorna un promise con los datos
function AllSemRequest(){

    let data_response=HttpRequest(all_sem_url).then(res => res.text());
    return data_response;

}
//Realiza peticion al servidor para obtener los datos de un semaforo, retorna un promise con los datos
function SelectSemRequest(data){
   
    let data_response=HttpRequest(select_sem_url,data).then(res => res.text());
    return data_response;
    
}
//Realiza peticion al servidor para registrar un semaforo en la base de datos, retorna un promise con los datos
function CreateSemRequest(data){

    let data_response=HttpRequest(create_sem_url,data).then(res => res.text());
    return data_response;


}
//Realiza peticion al servidor para eliminar un semaforo de la base de datos, retorna un promise con los datos
function DeleteSemRequest(data){

    let data_response=HttpRequest(delete_sem_url,data).then(res => res.text());
    return data_response;

}

