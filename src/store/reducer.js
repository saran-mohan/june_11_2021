import { UPDATE_NAME } from "./actionTypes";

const initialState = {
    name: '',
};

const reducer = (state = initialState, action) => {
    if(action.type === UPDATE_NAME) {
        return {
            ...initialState,
            name: action.name,
        };
    }

    return state;
}

export default reducer;
