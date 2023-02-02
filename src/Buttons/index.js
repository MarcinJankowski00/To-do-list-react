import './style.css';

const Buttons = ({ tasks, doneTasksHide }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button className="button">
                {doneTasksHide ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                className="button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}

export default Buttons;