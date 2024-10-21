import { Check, Trash } from 'phosphor-react';
import style from './Item.module.css';

export function Item({ data, removeTask, toggleTaskStatus }) {
    
    function handleTaskToggle() {
        toggleTaskStatus(data.id); 
    }

    
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
