import React, {useState} from "react";

function CadastrarContato({onAdicionarContato,}){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const contato = {nome, email, telefone};
        fetch("http://localhost:5000/contatos", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(contato)})
        .then(response=>{
            if(response.ok){
                return response.json();
            } else{
                throw new Error("Erro ao adicionar o contato");
            }
        })
        .then(data=>{
            onAdicionarContato(data);
            setNome("");
            setEmail("");
            setTelefone("");
        })
        .catch(error=>{
            console.log(error);
        });
    };
    return (
        <form onSubmit={handleSubmit}className="add-contact-form">
            <h2 className="subtitle">Adicionar Contato</h2>
            <div className="form-group">
                <label htmlFor="nome" className="label">Nome</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}   className="input"
                    id="nome"
                    autoComplete="none">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    id="email"
                    autoComplete="none"></input>
            </div>
            <div className="form-group">
                <label htmlFor="telefone" className="label">Telefone</label>
                <input
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="input"
                    id="telefone"
                    autoComplete="none">
                </input>
            </div>
            <button type="submit" className="button">Adicionar</button>
        </form>
    )
};

export default CadastrarContato;