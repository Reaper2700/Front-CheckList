import { Check, Trash } from 'phosphor-react'; // Certifique-se de que esses ícones estão corretos
import style from './Item.module.css'; // Certifique-se de que o caminho está correto

export function Item({ data, removeTask, toggleTaskStatus }) {
    // Função para alternar o status da tarefa
    function handleTaskToggle() {
        toggleTaskStatus(data.id); // Envia apenas o id, conforme esperado
    }

    // Função para remover a tarefa
    function handleRemove() {
        removeTask(data.id);
    }

    const checkboxCheckedClassname = data.completed
        ? style['checkbox-checked']
        : style['checkbox-unchecked'];
    const paragraphCheckedClassname = data.completed
        ? style['paragraph-checked']
        : '';

    return (
        <div className={style.container}>
            <div>
                <label htmlFor="checkBox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.completed} />
                    <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
                        {data.completed && <Check size={12} />}
                    </span>
                    <p className={`${style.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    );
}
