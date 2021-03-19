import React, { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import api, {token} from '../../services/api';
import './styles.css';

export default function Login(){
  const [poster, setPoster] = useState(""); //https://image.tmdb.org/t/p/original/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg
  const [posterCount, setPosterCount] = useState(0);
  const [posterArr, setPosterArr] = useState([]);

  useEffect(() => {
    ( async () => {
      api.get(`/trending/tv/week?api_key=${token}`)
      .then((response) => {
        response.data.results.map((result) => {
          setPosterArr([... posterArr, result.poster_path]);
          
        });
      })
      .catch((e) => {
          if(!e.response){
              return;
          }
      });
    } )()
  }, []);

  useEffect(() => {
    ( async () => {
      await setPoster(`https://image.tmdb.org/t/p/original${posterArr[posterCount]}`);
      
    } )()
  }, [posterCount]);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }


  // function nextPoster(){
  //   console.log(newArr.length);
  //   console.log(posterCount + ' antes');
  //   if((newArr.length - 1) == posterCount){
  //     setPosterCount(0);
  //   }else{
  //     setPosterCount(posterCount+1);
  //   }
  //   console.log(posterCount + ' dps');
  // }

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
          {/* <input onClick={nextPoster} className="entrada entrarBotao" type="submit" name="enviar" value="Entrar"/>   */}
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