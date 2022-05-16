
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';


const ContactoPage =(props)=>{

	const initialForm ={
		nombre:'',
		email: '',
		telefono:'',
		mensaje:''
	}

	const [sending, setSending]= useState(false);
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState(initialForm)

	const handleChange=e =>{
		const{name, value}= e.target;
		setFormData(oldData=>({
			...oldData,
			[name]: value //forma dinamica
		}));
	}
	const handleSubmit = async e =>{
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response= await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
		setSending(false);
		setMsg(response.data.message);
		if(response.data.error===false){
			setFormData(initialForm)
		}
	}

    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rápido</h2>
            <form  className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre_id">Nombre</label>
                    <input type="text" id="nombre_id" name="nombre" value={formData.nombre} onChange={handleChange}/>                    
                </p>
                <p>
                    <label for="email_id">Email</label>
                    <input type="email" id="email_id" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono_id">Telefono</label>
                    <input type="text" id="telefono_id" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje_id">Comentario</label>
                    <textarea id="mensaje_id" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>      
                </p>
		        {sending?<p className="alert alert-success">Enviando...</p>:null}
		        {msg?<p className="alert alert-warning">{msg}</p>:null}
                <p className="acciones">
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="columna right">
            <h2>Otras vias de contacto</h2>
            <p>Tambien se pueden comunicar con nosotros </p>
            <ul>
                <li>Telefono: +54-291-7455555</li>
                <li>Email: contacto@turismoluna.com.ar</li>
                <li>Facebook:turismoluna</li>
                <li>Instagram: @turismoluna</li>
            </ul>
        </div>
    </main>
    );
}
export default ContactoPage;