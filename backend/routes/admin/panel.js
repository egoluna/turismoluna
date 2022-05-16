var express = require('express');
var router = express.Router();
var util = require('util');//M06U03

/* GET home page. */
router.get('/', async function (req, res, next) { //M06U01 async

   res.render('admin/panel', {
     layout: 'admin/layout',
     usuario: req.session.nombre     
   });
});

/* AGREGAR GET - M06u01  */
router.get('/novedades', function (req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout'
  });
});


router.get('/destinos', function (req, res, next) {
    res.render('admin/destinos', {
      layout: 'admin/layout'
    });
  });
  

/* Eliminar GET - M06u02  */
/*router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});
*/



module.exports = router;