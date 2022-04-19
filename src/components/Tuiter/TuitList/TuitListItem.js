import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats"
const TuitListItem= ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(

        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src= {tuit["avatar-image"]} className="wd-content-margin-one wd-change-image"/>
                </div>
                <div className="col-10">
                    <i onClick={() => deleteTuit(tuit)} className="fas fa-remove-format fa-2x fa-pull-right"></i>
                    <span className="wd-author-handle wd-author">{tuit.postedBy.username}</span>
                    <span className="wd-handle" >@{tuit.handle}</span>
                    <span className="wd-handle"> - {tuit.time}</span>
                    <p className="wd-main-content">{tuit.comments}</p>
                    <div className="wd-small-content wd-general-border">
                        <div className="wd-small-title">{tuit.title ? tuit.title : ""}</div>
                        <div className="wd-small-text">{tuit.tuit? tuit.tuit : ""}</div>
                        {tuit["attachments"] ? (tuit["attachments"].image ? <img src={tuit["attachments"].image}className="wd-image"/> : "") : ""}
                        {tuit["attachments"] ? (tuit["attachments"].video ?
                            <iframe width="450"
                                    height="330"
                                    src={(tuit["attachments"] ? "https://www.youtube.com/embed/"+ tuit["attachments"].video : "")}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            : ""): "" }
                    </div>
                    <div className="wd-end-border row">

                        <div className="col ">
                            <i className="fa fa-comment wd-icon wd-icon-most-left" >{tuit.stats.comments}</i>
                        </div>
                        <div className="col">
                            <i className="fa fa-share wd-icon" >{tuit.stats.retuits}</i>
                        </div>
                        <div className="col">
                            <TuitStats tuit={tuit}/>
                        </div>
                        <div className="col">
                            <i className="fa fa-share wd-icon" >{""}</i>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
}
export  default TuitListItem;