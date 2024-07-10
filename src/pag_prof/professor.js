import "./professor.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState } from "react";

function Professor() {
  const [subjectMatter, setSubjectMatter] = useState('');
  const [classLink, setClassLink] = useState('');
  const [classFile, setClassFile] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClassSubmit = (e) => {
    e.preventDefault();
    console.log("Aula submetida:", subjectMatter, classLink, classFile);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", name, email, password);
    setIsEditModalOpen(false);
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
          <h2>Perfil do Professor</h2>
          <div className="corpo_texto">
            <div className="form-section">
              <form onSubmit={handleClassSubmit}>
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
          <button className="edit-button" onClick={() => setIsEditModalOpen(true)}>Edite seus dados</button>
        </main>
      </div>

      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edite seus dados</h2>
            <form onSubmit={handleEditSubmit}>
              <label>
                Nome:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                Senha:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Professor;
