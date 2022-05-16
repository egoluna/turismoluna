
var express = require('express');
var router = express.Router();

/* M05U04-------------------------------------------------------------------------- */
var usuariosModel =require('./../../models/usuariosModel');
/* -------------------------------------------------------------------------------- */

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', { 
    layout: 'admin/layout' 
  });
});

/* M05U04-------------------------------------------------------------------------- */
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if (data != undefined) {      
      req.session.id_usuario = data.id;   
      req.session.nombre = data.usuario;
      //res.redirect('/admin/novedades');
      res.redirect('/admin/panel');
    } else {
      res.render('admin/login', { 
        layout: 'admin/layout', error: true });
    }
  }catch(error){ console.log(error); }
})

//Cierre de sesión
router.get('/logout', function (req, res, next) {
	req.session.destroy(); //destruir las variables de sesion
  res.render('admin/login', { 
    layout: 'admin/layout' 
  });
});
/* -------------------------------------------------------------------------- */
module.exports = router;
