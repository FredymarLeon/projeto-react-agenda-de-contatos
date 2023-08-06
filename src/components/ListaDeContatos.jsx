import React, {useState, useEffect} from "react";
import CadastrarContato from "./CadastrarContato";
import "./ListaDeContato.css";

function ListaDeContatos(){
    const [contatos, setContatos]= useState([]);
    const [contatoEditado, setContatoEditado] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/contatos")
        .then((res)=> res.json()) 
        .then((data)=> setContatos(data))
        .catch((error)=> console.log(error));
    }, []);

        const handleCadastrarContato = (contato)=>{
            setContatos((prevContato)=> [...prevContato, contato]);
        }

        const handleEliminarContato = (id) => {
            setContatos((prevContatos) => prevContatos.filter((contato) => contato.id !== id));
        };

        const handleEditarContato = (contato) => {
            setContatoEditado(contato);
        };

        const handleSalvarContatoEditado = (contatoEditado) => {
            setContatos((prevContatos) =>
              prevContatos.map((contato) =>
                contato.id === contatoEditado.id ? contatoEditado : contato
              )
            );
            setContatoEditado(null);
        };

    return(
        <div className="container"><CadastrarContato onCadastrarContato={handleCadastrarContato}/>
            <h1 className="title">Lista de Contatos</h1>

            <ul className="contato-list">
                {contatos.map((contato)=> (
                    <li key={contato.id} className="contact-list-item">
                        <div className="contact-info">
                            <div className="contact-name">
                            {contato.nome}</div>
                            <div className="contact-email">
                            {contato.email}</div>
                            <div className="contact-phone">
                            {contato.telefone}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="contato-list">
                {contatos.map((contato) => (
                    <li key={contato.id} className="contact-list-item">
                        <div className="contact-info">
                             <div className="contact-name">{contato.nome}</div>
                            <div className="contact-email">{contato.email}</div>
                            <div className="contact-phone">{contato.telefone}</div>
                        </div>
                        <button onClick={() => handleEliminarContato(contato.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <ul className="contato-list">
                {contatos.map((contato) => (
                    <li key={contato.id} className="contact-list-item">
                        {contatoEditado && contatoEditado.id === contato.id ? (
                        <div className="contact-info">
                            <input
                                type="text"
                                value={contatoEditado.nome}
                                onChange={(e) =>
                                setContatoEditado({ ...contatoEditado, nome: e.target.value })}
                            />
                            <input
                                type="text"
                                value={contatoEditado.email}
                                onChange={(e) =>
                                setContatoEditado({ ...contatoEditado, email: e.target.value })}
                            />
                            <input
                                type="text"
                                value={contatoEditado.telefone}
                                onChange={(e) =>
                                setContatoEditado({ ...contatoEditado, telefone: e.target.value })}
                            />
                            <button onClick={() => handleSalvarContatoEditado(contatoEditado)}>Salvar</button>
                        </div>
                        ) : (
                        <div className="contact-info">
                            <div className="contact-name">{contato.nome}</div>
                            <div className="contact-email">{contato.email}</div>
                            <div className="contact-phone">{contato.telefone}</div>
                            <button onClick={() => handleEditarContato(contato)}>Editar</button>
                        </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeContatos;