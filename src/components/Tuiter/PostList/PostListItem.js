import React from "react";

const PostListItem= (
    {
        Item = {
            "avator_icon":"../avatar.jpg",
            "username":"Elon Musk", 
            "handle":"elonmusk",
            "time":"23h",
            "comments":"Amazing show about <a href=>@Inspiration4x</a> mission!",
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
    <img src= {Item.avator_icon} className="wd-content-margin-one wd-change-image"/>
    <span className="wd-author-handle wd-author">{Item.userName}</span>
    <span className="wd-handle" >@{Item.handle}</span>
    <span className="wd-handle"> - {Item.time}</span>
    <p className="wd-main-content">{Item.comments}</p>
    <div className="wd-small-content wd-general-border">
        <img src={Item.image} className="wd-image"/>
        <span className="wd-small-title">{Item.title}</span>
        <span className="wd-small-text">{Item.descrition? "Item.descrition" : ""}</span>
    </div>
    <div className="wd-end-border">
        <i className="fa fa-comment wd-icon wd-icon-most-left" >${Item.comment_num}</i>
        <i className="fa fa-share wd-icon" >${Item.retweet_num}</i>
        <i className="fa fa-heart wd-icon" >${Item.love_num}</i>
        <i className="fa fa-share wd-icon" >${Item.share_num}</i>
    </div>
</div>
);
}
export default PostListItem;