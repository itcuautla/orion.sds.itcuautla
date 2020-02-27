function HttpRequest()
{
    var url_request='https://sds.cuautla.tecnm.mx:8080/All/Show'
    
    var response= fetch( url_request ).then(res => res.json());

    return response;
   
}