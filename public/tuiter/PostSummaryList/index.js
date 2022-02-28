import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
<ul class="list-group">
<!-- continue here -->
    ${
        post.map(who => {
            return(PostSummaryItem(who));
        }).join('')
    }
</ul>
`); }
export default PostSummaryList;