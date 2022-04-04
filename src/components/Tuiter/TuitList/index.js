import React, {useEffect, useState}  from "react";
import TuitListItem from "./TuitListItem";
import {useSelector,useDispatch} from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";
const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), );
    return (
        <ul className="list-group">

            {
                tuits.map(tuit => <TuitListItem key={tuit._id}  tuit={tuit}/>)
            }
        </ul>
    );
}
export default TuitList;