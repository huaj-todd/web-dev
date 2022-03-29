import React from "react";

const TuitListItem= (
    {
        post = {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "video": "unKvMC3Y1kI"
            },
            "logo-image": "./tuiters/image_explores/react_js.png",
            "avatar-image": "./tuiters/image_explores/react_js.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            },

        }
    }
        ) => {
    return(

        <div className="list-group-item">
            <p>id: {post._id}</p>
            <img src= {post["avatar-image"]} className="wd-content-margin-one wd-change-image"/>
            <span className="wd-author-handle wd-author">{post.postedBy.username}</span>
            <span className="wd-handle" >@{post.handle}</span>
            <span className="wd-handle"> - {post.time}</span>
            <p className="wd-main-content">{post.comments}</p>
            <div className="wd-small-content wd-general-border">
                <div className="wd-small-title">{post.title ? post.title : ""}</div>
                <img src={post["logo-image"]} className="wd-image"/>
                <div className="wd-small-text">{post.tuit? post.tuit : ""}</div>
            </div>
            <div className="wd-end-border">
                <i className="fa fa-comment wd-icon wd-icon-most-left" >{post.stats.comments}</i>
                <i className="fa fa-share wd-icon" >{post.stats.retuits}</i>
                <i className="fa fa-heart wd-icon" >{post.stats.likes}</i>
                <i className="fa fa-share wd-icon" >{""}</i>
            </div>
        </div>
    );
}
export  default TuitListItem;