export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = (idtask) => {
    return {
        type: 'DELETE_TASK',
        payload: idtask
    }
}
