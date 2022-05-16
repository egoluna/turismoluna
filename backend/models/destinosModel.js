var pool = require('./bd');

/*listar*/
async function getDestinos(){
	var query="select id,titulo,subtitulo,cuerpo,imagen from destinos order by id DESC";
	var rows=await pool.query(query);
	return rows;
}


/*insert*/
async function insertarDestino(obj){
	try{
	var query="insert into destinos set ?";
	var rows = await pool.query(query,[obj])
	return rows;
	}
	catch(error){
		console.log(error);
		throw error;
	}// cierra catch
}// cierra insertDestino

/* Eliminar */
async function eliminarDestinoById(id){
	var query="delete from destinos where id=?";
    var rows = await pool.query(query,[id]);
	return rows;
}

/* Traer destino x id */
async function getDestinoById(id){
	var query="select id,titulo,subtitulo,cuerpo,imagen from destinos where id=?";
	var rows=await pool.query(query,[id]);
	return rows[0];
}

/* Actualizar destino x id */
async function modificarDestinoById(obj,id){
	try{
	var query="update destinos set ? where id=?";
	var rows= await pool.query(query,[obj,id]);
	console.log(query);
	return rows;
	} catch(error){
		throw error;
	}
}


module.exports={getDestinos, insertarDestino, eliminarDestinoById, getDestinoById, modificarDestinoById} 