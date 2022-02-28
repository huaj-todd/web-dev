const PostListItem= (item) => {
    return(`
<div>
    <img src=${item.avator_icon} class="wd-image wd-general-border">
    <img src=${item.image} class="wd-content-margin-one wd-change-image">
    <a class="wd-author-handle wd-author">${item.username}</a>
    <a class="wd-handle">@${item.handle}</a>
    <a class="wd-handle"> - ${item.time}</a>
    </br>
    <p class="wd-main-content">${item.comments}</p>
    <div class="wd-small-content wd-general-border">
    <p class="wd-small-title">${item.title}</p>
    <p class="wd-small-text">${item.descrition? `${item.descrition}`: ""}</p>

    </div>
    <div class="wd-end-border">
    <i class="fa fa-comment-o wd-icon wd-icon-most-left" style="font-size:18px;color:lightgrey">${item.comment_num}</i>
    <i class="fa fa-share wd-icon" style="font-size:18px;color:lightgrey">${item.retweet_num}</i>
    <i class="fa fa-heart wd-icon" style="font-size:18px;color:red">${item.love_num}</i>
    <i class="fa fa-mail-forward wd-icon" style="font-size:18px;color:lightgrey">${item.share_num}</i>
    </div>
</div>
`);
}
export default PostListItem;