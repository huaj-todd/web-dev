const PostListItem= (item) => {
    return(`
<div>
    
    <img src=${item.avator_icon} class="wd-content-margin-one wd-change-image">
    <div class="wd-author-handle wd-author" style="display:inline; color: white">${item.username}</div>
    <div class="wd-handle" style="display:inline; color: white">@${item.handle}</div>
    <div class="wd-handle" style="display:inline; color: white"> - ${item.time}</div>
    </br>
    <p class="wd-main-content">${item.comments}</p>
    <div class="wd-small-content wd-general-border">
    <div>
    <img src=${item.image} class="wd-image">
    <div class="wd-small-title">${item.title}</div>
    <div class="wd-small-text">${item.descrition? `${item.descrition}`: ""}</div>
    </div>
    </div>
    <div class="wd-end-border">
    <i class="fa fa-comment wd-icon wd-icon-most-left" style="font-size:18px;color:lightgrey">${item.comment_num}</i>
    <i class="fa fa-share wd-icon" style="font-size:18px;color:lightgrey">${item.retweet_num}</i>
    <i class="fa fa-heart wd-icon" style="font-size:18px;color:red">${item.love_num}</i>
    <i class="fa fa-share wd-icon" style="font-size:18px;color:lightgrey">${item.share_num}</i>
    </div>
</div>
`);
}
export default PostListItem;