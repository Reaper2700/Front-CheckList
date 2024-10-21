import styles from './HeaderList.module.css'

export function HeaderList({ tasksCounter, checkedTasksCounter }) {
    return (
        <header className={styles.container}>
        <aside>
          <p>Tarefas criadas</p>
          <span>{tasksCounter=0}</span>
        </aside>
  
        <aside>
          <p>Concluídas</p>
          <span>
            {tasksCounter === 0
              ? tasksCounter
              : `${checkedTasksCounter} de ${tasksCounter}`}
          </span>
        </aside>
      </header>
    );
  }
  