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
        case 'thumb-up-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.likes--;
                    } else {
                        if(tuit.disliked === true){
                            tuit.disliked = false;
                            tuit.dislikes--;
                        }
                        tuit.liked = true;
                        tuit.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'thumb-down-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.disliked === true){
                        tuit.disliked = false;
                        tuit.dislikes--;
                    } else{
                        if(tuit.liked === true){
                            tuit.liked = false;
                            tuit.likes--;
                        }
                        tuit.disliked = true;
                        tuit.dislikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
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