import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    if (tasks.length === 0) {
        return null;
    };

    return (
        <Container>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllDone())}
            >
                Ukończ wszystkie
            </Button>
        </Container>
    );
};

export default Buttons;