import style from './TaskArea.module.css';
import { useState } from 'react';
import { Empty } from './List/Empty';
import { Item } from './List/Item';

export function TaskArea() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);


    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();

        if (newTask.trim() === '') {
            return;
        }


        const newTaskObject = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };

        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    }


    function handleToggleTask(id) {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);


        const completed = updatedTasks.filter((task) => task.completed);
        setCompletedTasks(completed);
    }


    function handleRemoveTask(id) {
        if (!confirm('Deseja mesmo apagar essa tarefa?')) {
            return;
        }

        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);


        const completed = filteredTasks.filter((task) => task.completed);
        setCompletedTasks(completed);
    }

    const tasksCounter = tasks.length;
    const checkedTasksCounter = completedTasks.length;

    return (
        <div>
            <form className={style.TaskForm} onSubmit={handleSubmit}>
                <textarea
                    name="comment"
                    placeholder="Adicionar uma nova tarefa"
                    value={newTask}
                    onChange={handleTaskChange}
                />

                <button type="submit">
                    Criar
                </button>
            </form>

            <header className={style.container}>
                <aside>
                    <p>Tarefas criadas</p>
                    <span>{tasksCounter}</span>
                </aside>

                <aside>
                    <p>Concluídas</p>
                    <span>
                        {tasksCounter === 0
                            ? '0'
                            : `${checkedTasksCounter} de ${tasksCounter}`}
                    </span>
                </aside>
            </header>

            {tasks.length > 0 ? (
                <div className={style.taskList}>
                    <div>
                        {tasks.map((task) => (
                            <Item
                                key={task.id}
                                data={task}
                                removeTask={handleRemoveTask}
                                toggleTaskStatus={handleToggleTask}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <Empty />
            )}
        </div>
    );
}
