import styles from "./Header.module.css"

function Header(){
    return (
        <header className={styles.header}>
            <span>Agenda de Contatos</span>
            <nav>
                <a href="#">Buscar Contato</a>
                <a href="#">Adicionar Contato</a>
                <a href="#">Editar Contato</a>
                <a href="#">Apagar Contato</a>
            </nav>
        </header>
    )
}

export default Header;