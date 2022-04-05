import React from "react";
import {useDispatch} from "react-redux";
//import * as service from '../../services/tuits-service';
import {deleteTuit}  from "../actions/tuits-actions";
import TuitStats from "./tuit-stats";

const TuitListItem= ({tuit}) => {
    const dispatch = useDispatch();
    return(

        <div className="list-group-item">
            <i className="fas fa-remove-format float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
            <div className="row">
            <div className="col-1">
                <img src= {tuit["avatar-image"]} className="wd-change-image"/>
            </div>
            <div className="col-11">

            <span className="wd-author-handle wd-author">{tuit.postedBy && tuit.postedBy.username}</span>
            <span className="wd-handle" >@{tuit.handle}</span>
            <span className="wd-handle"> - {tuit.time}</span>
            <div className="wd-small-content wd-general-border">
                <div className="wd-small-title">{tuit.title ? tuit.title : ""}</div>
                <div className="wd-small-text">{tuit.tuit? tuit.tuit : ""}</div>
                {tuit["attachments"] ? (tuit["attachments"].image ? <img src={tuit["attachments"].image}className="wd-image"/> : "") : ""}
                {tuit["attachments"] ? (tuit["attachments"].video ?
                        <iframe width="550"
                                height="330"
                                src={(tuit["attachments"] ? "https://www.youtube.com/embed/"+ tuit["attachments"].video : "")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                        : ""): "" }
            </div>
            <TuitStats tuit={tuit}/>
            </div>
            </div>
        </div>
    );
}
export  default TuitListItem;