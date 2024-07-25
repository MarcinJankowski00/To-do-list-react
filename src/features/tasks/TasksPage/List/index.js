import { useSelector, useDispatch } from "react-redux";
import { Tasks, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import { searchQueryParamName } from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const List = () => {
    const query = useQueryParameter(searchQueryParamName);
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
                        toggledone="true"
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done ? "true" : undefined}>
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove="true"
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