import React from "react";

const PostListItem= (
    {
        Item = {
            "avator_icon":"../avatar.jpg",
            "username":"Elon Musk", 
            "handle":"elonmusk",
            "time":"23h",
            "comments":"",
            "image":"../image_explores/countdown.jpeg",
            "title":"Countdown: Inspiration Mssion to Space | Netflex Official Site","descrition":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
            "comment_num":"4.2K", 
            "retweet_num":"3.5K",
            "love_num":"2.7K",
            "share_num":"",
        }
    }
) => {
    return(
<div>
    <div className="row">
        <div className="col-3">
            <img src="https://st4.depositphotos.com/1012074/25277/v/600/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg"
            className="wd-image"/>
        </div>
        <div className="col-9">
            <span className="wd-author-handle wd-author wd-important-text">{Item.username}</span>
            <span className="wd-handle wd-important-text" >@{Item.handle}</span>
            <span className="wd-handle"> - {Item.time}</span>
            <p className="wd-main-content ">{Item.comments}</p>
            <div className="wd-small-content wd-general-border">
                <span className="wd-small-title wd-important-text">{Item.title}</span>
                <p className="wd-small-text">{Item.descrition? Item.descrition : ""}</p>
            </div>
            <img src="https://sciencefiction.com/wp-content/uploads/2019/10/Countdown-1-2.jpg" className="wd-image-explore"/>
            <div className="wd-end-border wd-important-text">
                <i className="fa fa-comment wd-icon wd-icon-most-left" >${Item.comment_num}</i>
                <i className="fa fa-share wd-icon" >${Item.retweet_num}</i>
                <i className="fa fa-heart wd-icon" >${Item.love_num}</i>
                <i className="fa fa-share wd-icon" >${Item.share_num}</i>
            </div>
        </div>
    </div>

</div>
);
}
export default PostListItem;