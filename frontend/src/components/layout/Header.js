import React from 'react';
import '../../styles/components/layout/Header.css';
const Header =(props)=>{
    return(
    <header>
        <img src="images/banner.png" className="w-100" alt="Luna" />
        {/*<div className="holder container-fluid">
            
            <div className="logo">
                <img src="images/logo.png" width="100" alt="Luna" />
                
                <h1>Luna Viajes</h1>
            </div>
        </div>*/}
    </header>

    );}
export default Header;