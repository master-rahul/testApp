module.exports.create = (request, response) => {
    return response.redirect('/');
}
module.exports.destroy = (request, response) => {
   request.logout((error) => {
        if(error) return response.redirect('/');
        else return response.redirect('/');
   });

}