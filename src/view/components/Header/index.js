import React from 'react';

export default function Header( props ){

  if( props.type === "login" ){
    return(
      <header>
        <div>Acompanha Série</div>
      </header>
    );
  }else if( props.type === "menu" ){
    return(
      <header>
        <div>menu com opção de logoff</div>
      </header>
    );
  }else if( props.type === "serie" ){
    return(
      <header>
        <div>menu da serie escolhida</div>
      </header>
    );
  }

  
}