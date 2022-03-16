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
            <p className="wd-content-margin">{post.topic}</p>
            <div className="wd-content-margin">
                                <span>{post.userName}</span>
                                <i className="fas fa-user-check" ></i>
                                <span> - {post.time}</span>
            </div>
                            <img src={post.image} className="wd-image"/>
                            <p className="wd-content-margin" >{post.title}</p>
                            <p className="wd-content-margin" >{post.tweets? post.tweets : ""}</p>
        </div>
    );
}
export default PostSummaryItem;
