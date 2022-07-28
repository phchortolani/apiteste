export default async function ip(request,response){
    if (!request.body) {
        request.statusCode = 404;
        request.end('Error');
        return;
    }
   
    const { ipString , Mobile} = request.body;

    await fetch("http://ip-api.com/json/"+ipString+"?fields=mobile,status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,hosting,query")
    .then(async function (data) {
        var res = await data.json()
        if (res) {
            response.send(`País:${res.country} - Região: ${res.regionName} - ${res.region} - Cidade: ${res.city} - mobile: ${Mobile}, - ISP: ${res.isp}`) 
        }
    });


}