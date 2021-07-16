export default (request,response) => {

   const {user, pass} = request.body;


    return response.json({user: user, pass: pass});
}