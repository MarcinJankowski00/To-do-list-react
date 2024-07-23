import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Tasks, Item, Content, Button } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const List = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <Tasks>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={hideDone && task.done}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item >
            ))}
        </Tasks >
    );
}

export default List;