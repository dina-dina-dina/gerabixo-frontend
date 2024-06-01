import "./style.css";
import React, { useState, useEffect } from "react";

function Principal() {
  return (
    <body>
      <header>
        <img src="../imagens/logo_gera.png" alt="Logo GeraBixo" />
        <h1>GERABIXO</h1>
        <div class="spacer"></div>
      </header>
      <div class="corpo">
        <div class="esquerda">
          <p>
            <button>LOGIN</button>
          </p>

          <div id="Calendario">
            <div id="header"></div>
            <button class="btn" onclick="moveMonth(-1)">
              &#10094; Anterior
            </button>
            <button class="btn" onclick="moveMonth(1)">
              Próximo &#10095;
            </button>
            <table>
              <thead>
                <tr>
                  <th>Dom</th>
                  <th>Seg</th>
                  <th>Ter</th>
                  <th>Qua</th>
                  <th>Qui</th>
                  <th>Sex</th>
                  <th>Sáb</th>
                </tr>
              </thead>
              <tbody id="calendar-body"></tbody>
            </table>
          </div>
        </div>
        <main class="corpo_texto">
          <h2>Página Principal</h2>
          <p>
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            repellat! Necessitatibus asperiores doloribus, laudantium saepe
            ipsum eius perspiciatis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum, distinctio rerum
          </p>
        </main>
        <div class="direita">
          <p>
            <h2>Torne-se um Apoiador</h2>
            <button>Registre-se</button>
          </p>
        </div>
      </div>
    </body>
  );
}

export default Principal