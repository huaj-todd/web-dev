import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

    return (
        <>
            <div className="pt-2 row">
                <div className="col-1">
                    <img className="wd-rounded-corners" height="50" width="50" src="tuiters/avatar.jpg"/>
                </div>
                <div className="col-9">
                    <textarea className="form-control w-75 bg-black text-white ms-3 w-100 wd-search-area" onChange={(
                        e) =>
                        setNewTuit({...newTuit, tuit: e.target.value})}/>
                   <hr className="ms-3" size="4"/>
                    <i className="fas fa-image text-primary wd-icon-margin ms-3" ></i>
                    <i className="fas fa-chart-line text-primary wd-icon-margin"></i>
                    <i className="fas fa-smile-wink text-primary wd-icon-margin"></i>
                    <i className="fas fa-calendar text-primary wd-icon-margin" ></i>
                </div>

                <div className="col-1">
                </div>
                <div className="col-1">
                    <button onClick={() => createTuit(dispatch, newTuit)} className="btn btn-primary float-end wd-button-radius">
                        Tuit
                    </button>
                </div>
            </div>


        </>
    );
}
export default WhatsHappening;