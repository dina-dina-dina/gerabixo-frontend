import "./professor.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState } from "react";

function Professor() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectMatter, setSubjectMatter] = useState('');
  const [classLink, setClassLink] = useState('');
  const [classFile, setClassFile] = useState(null);

  const handleClassSubmit = (e) => {
    e.preventDefault();
    console.log("Aula submetida:", selectedSubject, subjectMatter, classLink, classFile);
  };

  return (
    <div className="professor">
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <main>
          <h2>Upload de Aulas</h2>
          <div className="corpo_texto">
            <div className="form-section">
              <form onSubmit={handleClassSubmit}>
                <label>
                  Selecione a Matéria:
                  <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Matematica">Matemática</option>
                    <option value="Portugues">Português</option>
                    <option value="Historia">História</option>
                    <option value="Geografia">Geografia</option>
                    <option value="Fisica">Física</option>
                    <option value="Quimica">Química</option>
                  </select>
                </label>
                <label>
                  Assunto da Matéria:
                  <textarea value={subjectMatter} onChange={(e) => setSubjectMatter(e.target.value)}></textarea>
                </label>
                <label>
                  Link da Aula:
                  <input type="text" value={classLink} onChange={(e) => setClassLink(e.target.value)} />
                </label>
                <label>
                  Ou faça upload de um arquivo:
                  <input type="file" onChange={(e) => setClassFile(e.target.files[0])} />
                </label>
                <button type="submit">Enviar Aula</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Professor;