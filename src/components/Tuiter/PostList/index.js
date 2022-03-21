import PostListItem from "./PostListItem"
import item from "./item.json"
import React from "react";
const PostList = () => {
    return (
<ul class="list-group">
    {
        item.map(item => {
            return(
                <PostListItem item={item}/>
            );
        })
    }
</ul>
); }
export default PostList;