var pool = require('./bd');

/**M06U01-------------------------------------------------------------------- */
/*listar*/
async function getNovedades(){
	var query="select id,titulo,subtitulo,cuerpo,year(fecha) as anio,month(fecha)as mes, day(fecha)as dia, img_id from novedades order by id DESC";
	var rows=await pool.query(query);
	return rows;
}


/*insert*/
async function insertNovedad(obj){
	try{
	var query="insert into novedades set ?";
	var rows = await pool.query(query,[obj])
	return rows;
	}
	catch(error){
		console.log(error);
		throw error;
	}// cierra catch
}// cierra insert
/*//-------------------------------------------------------------------------- */
/**M06U02-------------------------------------------------------------------- */
/* Eliminar */
async function deleteNovedadById(id){
	var query="delete from novedades where id=?";
    var rows = await pool.query(query,[id]);
	return rows;
}

/* Traer novedad x id */
async function getNovedadById(id){
	var query="select id,titulo,subtitulo,cuerpo,year(fecha) as anio,  month(fecha) as mes, day(fecha)as dia,img_id from novedades where id=?";
	var rows=await pool.query(query,[id]);
	return rows[0];
}

/* Actualizar novedad x id */
async function modificarNovedadById(obj,id){
	try{
	var query="update novedades set ? where id=?";
	var rows= await pool.query(query,[obj,id]);
	console.log(query);
	return rows;
	} catch(error){
		throw error;
	}
}


/*//-------------------------------------------------------------------------- */


module.exports={getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById} //M06U01 - M06U02