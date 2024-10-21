import styles from "./Header.module.css"
import {Rocket} from 'phosphor-react';


export function Header(){
    return(
        <header className={styles.header}>
            <Rocket size={32} className={styles.blue}/>
            <strong> <div className={styles.blue}>TO</div><div className={styles.purple}>DO</div></strong>
        </header>
    );
}