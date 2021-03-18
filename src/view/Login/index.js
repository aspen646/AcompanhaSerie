import React from 'react';
import Header from '../components/Header/index';
import './styles.css';

export default function Login(){

    return(
      <div className="container">
        <div className="logo">
          <nobr style={{color: '#E5E5E5'}}>Acompanha</nobr>
          <nobr style={{color: '#EC625F'}}>Série</nobr>
        </div>
        
        <div className="box">

          <div className="left-box"></div>
          <div className="right-box">
            <h1>Entrar</h1>
            <form className="formulario">
              <div>
                <input type="text" name="" required className="entrada entrarCampos"/>
                <label>Email:</label>
              </div>
              {/* <label>
                email: 
                <input type="text" className="entrada entrarCampos"/>
              </label>
              <label>
                senha: 
                <input type="text" className="entrada entrarCampos"/>
              </label> */}
            </form>
          </div>
        </div>
      </div>
    );  
}