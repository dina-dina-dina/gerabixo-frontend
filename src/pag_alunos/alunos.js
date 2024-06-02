import "./alunos.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Alunos()
{
  return (
    <div>
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <div className="esquerda">
          <p>
            <button>Login (Professor e Aluno)</button>
          </p>
          <div id="Calendario">
            <p>espaço para o calendário</p>
          </div>
        </div>

        <main className="corpo_texto">
          <h2>Página do Aluno</h2>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Matemática</h3>
              <ul>
                <li>
                  <input type="checkbox" id="mat1" />
                  <label htmlFor="mat1">Funções</label>
                </li>
                <li>
                  <input type="checkbox" id="mat2" />
                  <label htmlFor="mat2">Probabilidade</label>
                </li>
                <li>
                  <input type="checkbox" id="mat3" />
                  <label htmlFor="mat3">Geometria Analítica</label>
                </li>
                <li>
                  <input type="checkbox" id="mat4" />
                  <label htmlFor="mat4">Estatística</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (link)</a>
                <a href="#">Lista de Exercícios (link)</a>
              </div>
            </div>
          </div>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Física</h3>
              <ul>
                <li>
                  <input type="checkbox" id="fis1" />
                  <label htmlFor="fis1">Mecânica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis2" />
                  <label htmlFor="fis2">Termodinâmica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis3" />
                  <label htmlFor="fis3">Óptica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis4" />
                  <label htmlFor="fis4">Eletromagnetismo</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Química</h3>
              <ul>
                <li>
                  <input type="checkbox" id="qui1" />
                  <label htmlFor="qui1">Estequiometria</label>
                </li>
                <li>
                  <input type="checkbox" id="qui2" />
                  <label htmlFor="qui2">Reações Químicas</label>
                </li>
                <li>
                  <input type="checkbox" id="qui3" />
                  <label htmlFor="qui3">Química Orgânica</label>
                </li>
                <li>
                  <input type="checkbox" id="qui4" />
                  <label htmlFor="qui4">Eletroquímica</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
        </main>

        <div className="direita">
          <h2>Torne-se um Apoiador</h2>
          <button>Registre-se</button>
        </div>
      </div>
    </div>
  );
}

export default Alunos;
