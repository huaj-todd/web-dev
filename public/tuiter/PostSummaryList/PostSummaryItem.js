const PostSummaryItem = (post) => {
    return(`
<div>
    <p class="wd-topic-style wd-content-margin">${post.topic}</p>
    <div>
                    <div class="wd-content-margin">
                        <p class="wd-author-style" style="display:inline; color: white">${post.userName}</p>
                        <i class="fas fa-user-check" style="display:inline;color: white"></i>
                        <p class="wd-topic-style" style="display:inline;"> - ${post.time}</p>
                    </div>
                    <img src=${post.image} class="wd-image">
                    <p class="wd-content-margin wd-main-text " style="color: white">
                    ${post.title}
                    </p>
                    <p class="wd-content-margin wd-topic-style" style="color: white">${post.tweets}</p>
     </div>
     </div>
`);
}
export default PostSummaryItem;