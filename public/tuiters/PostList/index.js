import PostListItem from "./PostListItem.js";
import item from "./item.js"
const PostList = () => {
    return (`
<ul class="list-group">
    ${
        item.map(item => {
            return(PostListItem(item));
        }).join('')
    }
</ul>
`); }
export default PostList;