import React, { useState } from 'react';
import Header from '../components/Header/index';
import api, {token} from '../../services/api';
import './styles.css';

export default function Login(){
  const [poster, setPoster] = useState("https://image.tmdb.org/t/p/original/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg");
  const [apiData, setApiData] = useState({});

  function carregarImg(){
    api.get(`/trending/tv/week?api_key=${token}`)
        .then((response) => {
            // newArr.push(response.data);
            console.log(response.data.results);
        })
        .catch((e) => {
            if(!e.response){
                return;
            }
        });
  }
  carregarImg();
    return(
      <div className="container">
        <div className="logo">
          <nobr style={{color: '#E5E5E5'}}>Acompanha</nobr>
          <nobr style={{color: '#EC625F'}}>Série</nobr>
        </div>
        
        <div className="box">
          <div className="left-box">
            <img srcSet={poster} alt="" height="600" />
          </div>
          <div className="right-box">
            <h1>Entrar</h1>
            <form className="formulario">
              <div className="input-container">
                <input type="text" name="email" className="entrada entrarCampos" required/>
                <label className="labelInput">Email</label>
              </div>
              <div className="input-container">
                <input type="password" name="" className="entrada entrarCampos" required/>
                <label className="labelInput">Senha</label>
              </div>
              <input className="entrada entrarBotao" type="submit" name="enviar" value="Entrar"/>  
                <div className="checkbox">
                    <input type="checkbox" name="lembrarLogin"/>
                    <label htmlFor="lembrarLogin">Lembre-se de mim</label>
                </div>
            </form>
          </div>
        </div>
      </div>
    );  
}