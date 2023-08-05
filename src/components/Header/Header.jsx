import styles from "./Header.module.css"

function Header(){
    return (
        <header className={styles.header}>
            <span>Agenda de Contatos</span>
        </header>
    )
}

export default Header;