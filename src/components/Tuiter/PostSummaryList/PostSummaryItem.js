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
        <div>
            <p className="wd-topic-style wd-content-margin">{post.topic}</p>
            <div className="wd-content-margin">
                                <p className="wd-author-style" >{post.userName}</p>
                                <i className="fas fa-user-check" ></i>
                                <p className="wd-topic-style" > - {post.time}</p>
            </div>
                            <img src={post.image} className="wd-image-explore"/>
                            <p className="wd-content-margin wd-main-text " >{post.title}</p>
                            <p className="wd-content-margin wd-topic-style" >{post.tweets? post.tweets : ""}</p>
        </div>
    );
}
export default PostSummaryItem;
