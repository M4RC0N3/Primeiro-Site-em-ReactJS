import React from "react";
import logoUC from "./img/logoUC.svg";
import desktop from "./img/desktop.svg";
import bgConversor from "./img/bgConversor.svg";
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
      <section id="home">
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
      <section id="conversor">
        <img src={bgConversor} alt="" draggable="false"/>
        <form className="form-conversor">
          <label htmlFor="textAreaConversor">
            <title draggable="false"><h2>CONVERSOR DE CARACTERES</h2></title>
          </label>
            <textarea name="textAreaConversor" id="textAreaConversor" className="textAreaConversor"></textarea>
            <section className="buttons">
          <button type="button" className="formatin-out">ALTERNADO</button>
          <button type="button" className="formatin-out">MINÚSCILA</button>
          <button type="button" className="formatin-out">MAIÚSCULA</button>
          <button type="button" className="formatin-out">SELECIONA TEXTO</button>
          <button type="button" className="formatin-out">INVERTER TEXTO</button>
          <button type="button" className="formatin-out">PRIMEIRA LETRA DE CADA PALAVRA</button>        
        </section>
        </form>

      </section>
    </div>
  );
}

export default App;