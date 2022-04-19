const PostSummaryItem = (post) => {
    return(`
<div>
    <p class="wd-topic-style wd-content-margin">${post.topic}</p>
    <div class="row">
        <div class="col-4">
        <img src=${post.image} class="wd-image-explore"/>
        </div>
        <div class="col-7">
                    <div class="wd-content-margin">
                        <p class="wd-author-style" style="display:inline;">${post.userName}</p>
                        <i class="fas fa-user-check" style="display:inline;"></i>
                        <p class="wd-topic-style" style="display:inline;"> - ${post.time}</p>
                    </div>
                    
                    <p class="wd-content-margin wd-main-text">
                    ${post.title ? post.title : ""}
                    </p>
                    <p class="wd-content-margin wd-topic-style" style="color: white">${post.tweets? `${post.tweets}`: ""}</p>
        </div>
                    
     </div>
`);
}
export default PostSummaryItem;