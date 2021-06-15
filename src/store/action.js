import { UPDATE_NAME } from "./actionTypes";

const updateName = name => ({
    type: UPDATE_NAME,
    name,
});

export default updateName;
