import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
import React from "react";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="wd-end-border row">

            <div className="col ">
                <i className="fa fa-comment wd-icon wd-icon-most-left" >{tuit.stats&&tuit.stats.comments}</i>
            </div>
            <div className="col">
                <i className="fa fa-share wd-icon" >{tuit.stats&&tuit.stats.retuits}</i>
            </div>
            <div className="col">


                {
                    tuit.liked&& <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked:false,
                })} className="far fa-thumbs-up ms-2" style ={{color: "red"}}/>
                }
                {
                    !tuit.liked&& <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true,
                    })} className="far fa-thumbs-up ms-2"/>
                }

                {tuit.likes}
            </div>

            <div className="col">
                {
                    tuit.disliked && <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        dislikes: tuit.dislikes -1,
                        disliked: false,
                    })} className="fas fa-thumbs-down" style={{color: 'red'}}/>
                }
                {
                    !tuit.disliked && <i onClick={
                        () => updateTuit(dispatch, {
                            ...tuit,
                            dislikes: tuit.dislikes + 1,
                            disliked: true,
                        })
                    } className="fas fa-thumbs-down"/>
                }
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="fa fa-share wd-icon" >{""}</i>
            </div>

        </div>


);
}
export default TuitStats;