var express=require('express');
var router=express.Router();
var novedadesModel=require('./../models/novedadesModel');
var destinosModel=require('./../models/destinosModel');   //DESTINOS
var cloudinary= require('cloudinary').v2;
var nodemailer=require('nodemailer'); 


router.get('/novedades', async function(req,res,next){
	let novedades=await novedadesModel.getNovedades();
	novedades= novedades.map(novedades=>{
		if(novedades.img_id){
			const imagen=cloudinary.url(novedades.img_id, {
				//width:'100%',
				//height:200,
				//crop:'fill'
			});
			return{
				...novedades,
				imagen
			}
		}else
        {
            return{
				...novedades,
				imagen:''
			}
        }
	});
	res.json(novedades);
});


//Destinos
router.get('/destinos', async function(req,res,next){
	let destinos=await destinosModel.getDestinos();
	destinos= destinos.map(destino=>{
		if(destino.imagen){
			const imagen=cloudinary.url(destino.imagen, {
				//width:'100%',
				//height:200,
				//crop:'fill'
			});
			return{
				...destino,
				imagen
			}
		}else
        {
            return{
				...destino,
				imagen:''
			}
        }
	});
	res.json(destinos);
});


router.post('/contacto', async(req,res)=>{
	const mail={
		to:'egoviedoluna@gmail.com',
		subject:'Contacto web',
		html:`${req.body.nombre} se contacto a través de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
	}
	const transport= nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth:{
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});
	await transport.sendMail(mail)
	res.status(201).json({
		error:false,
		message:'Mensaje enviado'
	});
});

module.exports=router;