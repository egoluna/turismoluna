import React from 'react';

const NovedadItem=(props)=>{
	const{title, subtitle,imagen,body, diaN, mesN, anioN}= props;
	return(
	<div className="novedad">
		<p className="fecha">{diaN}/{mesN}/{anioN}</p>
		<h2>{title}</h2>		
		<p className='subtitulo'>{subtitle}</p>
		<img src={imagen} />
		<div className="cuerpo" dangerouslySetInnerHTML={{__html:body}} />		
	</div>
	);
}
export default NovedadItem;
