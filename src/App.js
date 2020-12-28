import React from "react";
import logoUC from "./img/logoUC.svg";
import desktop from "./img/desktop.svg";
function App(){
  return(
    <div className="App">
      <header>
        <nav>
          <img src={logoUC} alt="Logo do YouConverter" draggable="false"/>
          <ul>
            <li>Home</li>
            <li>Conversor</li>
            <li>Contador</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </header>
      <section className="home">
        <div className="chao"></div>
        <img src={desktop} alt="Desktop"/>
        <div className="card-container">
          <div className="card-content">
            <h1>YOU<span>CONVERTER</span></h1>
            <p>
              Esse é um site de converter frases e 
              textos de minúsculo para maiúsculo e 
              vice-versa. Além de possuir 
              ferramenta que contabiliza o número 
              de palavras e parágrafos de um texto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;