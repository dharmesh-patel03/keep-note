export const addNote = (item) => {
    return {
        type: "ADD_NOTES",
        payload: {
            id: new Date().getTime().toString(),
            data:item
        }
    }
}
export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTES",
        payload:id
    }
}
