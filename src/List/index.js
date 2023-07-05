import { Tasks, Item, Content, Button } from "./styled";

const List = ({ hideDone, tasks, removeTask, toggleTaskDone }) => (
    <Tasks>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={hideDone && task.done}
            >
                <Button
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item >
        ))}
    </Tasks >
);

export default List;