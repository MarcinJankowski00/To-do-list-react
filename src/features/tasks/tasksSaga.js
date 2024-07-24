import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasksState } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks))
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Coś poszło nie tak")
    }
}

function* saveTasksInLocalStorageHandler() {
    const { tasks } = yield select(selectTasksState);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}