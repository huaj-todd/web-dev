import React from "react";

const PostSummaryItem = (
                            {
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications orSPAs",
                                 "image": "../image_explores/react_js.png",
                             }
                         }) => {
    return(
        <div className="wd-content-border">
            <div className="row">

                <div className="col">
                    <span className="wd-content-margin wd-important-text">{post.topic? post.topic : ""}</span>
                    <div className="wd-content-margin">
                        <span className="wd-important-text">{post.userName}</span>
                        <i className="fas fa-user-check" ></i>
                        <span> - {post.time}</span>
                        <p className="wd-content-margin wd-important-text" >{post.title}</p>
                        <p className="wd-content-margin" >{post.tweets? post.tweets : ""}</p>
                    </div>
                </div>
                <div className="col-3">
                    <img src={post.image} className="wd-image"/>
                </div>


            </div>



        </div>
    );
}
export default PostSummaryItem;
