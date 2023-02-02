import './style.css';

const List = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item ${(props.doneTasksHide && task.done) ? " list__items--hide" : ""}`}>
                <button className="list__button list__button--toggle">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__task${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li >
        ))}
    </ul >
)

export default List;