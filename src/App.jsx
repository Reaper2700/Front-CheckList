import './Global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskArea } from './components/TaskArea';


function App() {
  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.wrapper}>
          <main>
            <TaskArea />
          </main>
        </div>
      </section>
    </div>
  )
}

export default App
