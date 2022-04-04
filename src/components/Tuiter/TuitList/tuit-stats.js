import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-up-tuit');
    };
    const dislikeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-down-tuit');
    };
    return (
        <div className="pt-3 ms-2 row">

            <div className="col-3">
                likes: {tuit.likes}
            </div>
            <div className="col-3">
                {
                    tuit.liked && <i onClick={likeTuit} className="fas fa-thumbs-up" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked && <i onClick={likeTuit} className="fas fa-thumbs-up"></i>
                }
            </div>


            <div className="col-3">
                dislikes: {tuit.dislikes}
            </div>
            <div className="col-3">
                {
                    tuit.disliked && <i onClick={dislikeTuit} className="fas fa-thumbs-down"style={{color: 'red'}}></i>
                }
                {
                    !tuit.disliked && <i onClick={dislikeTuit} className="fas fa-thumbs-down"></i>
                }
            </div>
        </div>

);
}
export default TuitStats;