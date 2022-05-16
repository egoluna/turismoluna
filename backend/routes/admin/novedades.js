var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');//M06U01
var util = require('util');//M06U03
var cloudinary = require('cloudinary').v2;//M06U03
const uploader = util.promisify(cloudinary.uploader.upload);//M06U03
const destroy = util.promisify(cloudinary.uploader.destroy); //M06U03

/* GET home page. */
router.get('/', async function (req, res, next) { //M06U01 async
  var novedades = await novedadesModel.getNovedades(); //M06U01

  /*M06U03 --------------------------------------*/
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    }
    else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });
  /* - end - M06U03 ----------------------------*/
  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre
    , novedades //M06U01 
  });
});

/* AGREGAR GET - M06u01  */
router.get('/agregar', function (req, res, next) {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

/* AGREGAR POST - M06u01  */
router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Se requiere que todos los campos sean completados'
      });
    }
  }
  catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se puedo guardar'
    });
  }
});

/* Eliminar GET - M06u02  */
/*router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});
*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/eliminar',
    {
      layout: 'admin/layout',
      novedad
    });
});

router.post('/eliminar', async (req, res, next) => {
  var id = req.body.id;

  /**M06U03 - eliminar imagen */
  let novedad=await novedadesModel.getNovedadById(id);
	if(novedad.img_id){
		await(destroy(novedad.img_id));
	}
  /*-------------------------------------------------------- */
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades');
});


/* Modificar GET - M06u02  */
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var imagen ="";
  var novedad = await novedadesModel.getNovedadById(id);

    /*M06U03 Agregar imagen a MODIFICAR--------------------------------------*/
    if (novedad.img_id) {
        var imagen = cloudinary.image(novedad.img_id, {
        //  width: 200,
          height: 200,
          crop: 'fill'
        });
      }
    /* - end - M06U03 ----------------------------*/
  

  res.render('admin/modificar',
    {
      layout: 'admin/layout',
      novedad,
      imagen  //M6U3- agregar imagen
    });
});


/* Modificar POST - M06u02  */
router.post('/modificar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      /* M0603 ----------------------------------- */
      let img_id = req.body.imgOriginal;
      let borrar_img_vieja = false;
      if (req.body.imgEliminar === "1") {
        img_id = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.imgOriginal) {
        await (destroy(req.body.imgOriginal));
      }
      /* fin M0603 ----------------------------------- */

      let obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
        img_id
      }
      //console.log(obj);
      await novedadesModel.modificarNovedadById(obj, req.body.id);
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'Se requiere que todos los campos sean completados'
      });
    }
  }
  catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    });
  }
});

module.exports = router;