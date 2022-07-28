export default async function ip(request,response){
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }
   
    const { ipString } = request.body;

    await fetch("http://ip-api.com/json/" + ipString)
    .then(async function (data) {
        var res = await data.json()
        if (res) {
            response.send(`País:${res.country} - Região: ${res.regionName} - ${res.region} - Cidade: ${res.city} - mobile:`+res.mobile) 
        }
    });


}