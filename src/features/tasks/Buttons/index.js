import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    };

    return (
        <Container>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => setAllDone()}
            >
                Ukończ wszystkie
            </Button>
        </Container>
    );
};

export default Buttons;