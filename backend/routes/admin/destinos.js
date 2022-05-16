var express = require('express');
var router = express.Router();
var destinosModel = require('./../../models/destinosModel');//M06U01
var util = require('util');//M06U03
var cloudinary = require('cloudinary').v2;//M06U03
const uploader = util.promisify(cloudinary.uploader.upload);//M06U03
const destroy = util.promisify(cloudinary.uploader.destroy); //M06U03

/* GET home page. */
router.get('/', async function (req, res, next) { //M06U01 async
  var destinos = await destinosModel.getDestinos(); //M06U01

  /*trae todas las imagenes  --------------------------------------*/
  destinos = destinos.map(destino => {
    if (destino.imagen) {
      const imagen = cloudinary.image(destino.imagen, {
        width: 150,
        height: 100,
        crop: 'fill'
      });
      return {
        ...destino,
        imagen
      }
    }
    else {
      return {
        ...destino,
        imagen: ''
      }
    }
  });
  
  res.render('admin/destinos', {
    layout: 'admin/layout',
    usuario: req.session.nombre
    , destinos  
  });
});

/* AGREGAR GET - M06u01  */
router.get('/agregarDestino', function (req, res, next) {
  res.render('admin/agregarDestino', {
    layout: 'admin/layout'
  });
});

/* AGREGAR POST - M06u01  */
router.post('/agregarDestino', async (req, res, next) => {
  try {

    var imagen = '';
    if (req.files && Object.keys(req.files).length > 0) {
      img = req.files.imagen;
      imagen = (await uploader(img.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await destinosModel.insertarDestino({
        ...req.body,
        imagen
      });
      res.redirect('/admin/destinos');
    } else {
      res.render('admin/agregarDestino', {
        layout: 'admin/layout',
        error: true,
        message: 'Se requiere que todos los campos sean completados'
      });
    }
  }
  catch (error) {
    console.log(error);
    res.render('admin/agregarDestino', {
      layout: 'admin/layout',
      error: true,
      message: 'No se puedo guardar'
    });
  }
});

/* Eliminar GET -   */
router.get('/eliminarDestino/:id', async (req, res, next) => {
  var id = req.params.id;
  await destinosModel.eliminarDestinoById(id);
  res.redirect('/admin/destinos')
});

/*router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/eliminar',
    {
      layout: 'admin/layout',
      novedad
    });
});
*/
router.post('/eliminarDestino', async (req, res, next) => {
  var id = req.body.id;

  /**- eliminar imagen */
  let destino=await destinosModel.getDestinoById(id);
	if(destino.imagen){
		await(destroy(destino.imagen));
	}
  /*-------------------------------------------------------- */
  await destinosModel.eliminarDestinoById(id);
  res.redirect('/admin/destinos');
});


/* Modificar Destino GET - */
router.get('/modificarDestino/:id', async (req, res, next) => {
  var id = req.params.id;
  var imagen ="";
  var destino = await destinosModel.getDestinoById(id);

    /*M06U03 Agregar imagen a MODIFICAR--------------------------------------*/
    if (destino.imagen) {
        var imagen = cloudinary.image(destino.imagen, {
        //  width: 200,
          height: 200,
          crop: 'fill'
        });
      }
    /* - end - M06U03 ----------------------------*/
  

  res.render('admin/modificarDestino',
    {
      layout: 'admin/layout',
      destino,
      imagen  //M6U3- agregar imagen
    });
});


/* Modificar POST - M06u02  */
router.post('/modificarDestino', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      /* M0603 ----------------------------------- */
      let imagen = req.body.imgOriginal;
      let borrar_img_vieja = false;
      if (req.body.imgEliminar === "1") {
        imagen = null;
        borrar_img_vieja = true;
      } else {
        if (req.files && Object.keys(req.files).length > 0) {
          img = req.files.imagen;
          imagen = (await uploader(img.tempFilePath)).public_id;
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
        imagen
      }
      //console.log(obj);
      await destinosModel.modificarDestinoById(obj, req.body.id);
      res.redirect('/admin/destinos');
    } else {
      res.render('admin/modificarDestino', {
        layout: 'admin/layout',
        error: true,
        message: 'Se requiere que todos los campos sean completados'
      });
    }
  }
  catch (error) {
    console.log(error);
    res.render('admin/modificarDestino', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    });
  }
});

module.exports = router;