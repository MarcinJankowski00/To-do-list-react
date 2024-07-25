import { Wrapper, Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const DownloadButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </Wrapper>
    );
};

export default DownloadButton;