import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"
import React from "react";

const PostSummaryList = () => {
    return (
<ul className="list-group">
    {
        post.map(post => {
            return(
                <PostSummaryItem post={post}/>
            );
        })
    }
</ul>
); }
export default PostSummaryList;