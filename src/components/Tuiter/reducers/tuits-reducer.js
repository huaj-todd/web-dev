//import tuits from "../data/tuits.json";
import {FIND_ALL_TUITS,DELETE_TUIT,UPDATE_TUIT,CREATE_TUIT}  from "../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:

            return [
                ...state,
                action.newTuit
            ];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                image: "../../../images/react-blue.png",
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS",
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    comments: 333,
                    dislikes:123
                }
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return state;
    }
}
export default tuitsReducer;