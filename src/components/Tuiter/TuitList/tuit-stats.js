import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
import React from "react";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-up-tuit');
    };
    const dislikeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-down-tuit');
    };
    return (
        <div className="wd-end-border row">

            <div className="col ">
                <i className="fa fa-comment wd-icon wd-icon-most-left" >{tuit.stats.comments}</i>
            </div>
            <div className="col">
                <i className="fa fa-share wd-icon" >{tuit.stats.retuits}</i>
            </div>
            <div className="col-3">
                likes: {tuit.likes}
            </div>
            <div className="col-3">
                {
                    tuit.liked && <i onClick={likeTuit} className="fas fa-thumbs-up" style={{color: 'red'}}/>
                }
                {
                    !tuit.liked && <i onClick={likeTuit} className="fas fa-thumbs-up"/>
                }
            </div>


            <div className="col">
                dislikes: {tuit.dislikes}
            </div>
            <div className="col">
                {
                    tuit.disliked && <i onClick={dislikeTuit} className="fas fa-thumbs-down" style={{color: 'red'}}/>
                }
                {
                    !tuit.disliked && <i onClick={dislikeTuit} className="fas fa-thumbs-down"/>
                }
            </div>
            <div className="col">
                <i className="fa fa-share wd-icon" >{""}</i>
            </div>

        </div>


);
}
export default TuitStats;