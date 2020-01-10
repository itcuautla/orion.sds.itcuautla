//Realizar peticion al servidor, retorna un promise
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

function LoginRequest(data){

    let data_response=HttpRequest(login_url,data).then(res => res.text());
    return data_response;

}

function AllSemRequest(){

    let data_response=HttpRequest(all_sem_url).then(res => res.text());
    return data_response;

}

function SelectSemRequest(data){
   
    let data_response=HttpRequest(select_sem_url,data).then(res => res.text());
    return data_response;
    
}


function CreateSemRequest(data){


    let data_response=HttpRequest(create_sem_url,data).then(res => res.text());
    return data_response;


}

function DeleteSemRequest(data){

    let data_response=HttpRequest(delete_sem_url,data).then(res => res.text());
    return data_response;

}

