const initialState = {
    notes:[]
};
const myNotes = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTES":
            const {id,data}=action.payload
            
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: id,
                        data:data
                        
                    }
                ]
            }
        case "DELETE_NOTES":
            return {
                ...state,
                notes:state.notes.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}
export default myNotes