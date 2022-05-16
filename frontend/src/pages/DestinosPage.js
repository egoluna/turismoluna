import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DestinoItem from '../components/destinos/DestinoItem';

import '../styles/components/pages/DestinosPage.css';

const DestinosPage=(props)=>{
	const[loading, setLoading]=useState(false);
	const[destinos, setDestinos]= useState([]);
	useEffect(()=>{
		const cargarDestinos=async()=>{
			setLoading(true);
			const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/destinos`);
			setDestinos(response.data);
			setLoading(false);
		};
		cargarDestinos();
	},[]);		
	return(
		<section className="holder">
			<h2>Destinos</h2>
			{loading ?(
				<p> Cargando..</p>
			):(
				destinos.map(item=> <DestinoItem key={item.id}
				title={item.titulo} subtitle={item.subtitulo} 
				imagen={item.imagen} body={item.cuerpo}  />)
			)}
		</section>
	);
}
export default DestinosPage;

