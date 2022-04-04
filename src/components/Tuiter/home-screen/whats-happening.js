import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

    return (
        <>
            <button onClick={() => createTuit(dispatch, newTuit)} className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75" onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}></textarea>
        </>
    );
}
export default WhatsHappening;