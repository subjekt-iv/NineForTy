function recordameMiddleware(req, res, next){
    next();
    if(req.cookies.recordame!=undefined&&req.session.usuarioLogueado==undefined){
        /*aca escribir el codigo del session que lee todos los usuarios*/ 
    }
    next();
}

module.exports = recordameMiddleware;