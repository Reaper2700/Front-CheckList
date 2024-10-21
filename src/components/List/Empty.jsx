import styles from './Empty.module.css'
import clip from '../../assets/clip.png';


export function Empty({task,tasks}) {
    return (
        <div className={styles.container}>
            <img src={clip} alt="icone da prancheta"/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}