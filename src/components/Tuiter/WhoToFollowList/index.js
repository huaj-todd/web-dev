import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
<ul className="list-group">
<li className="list-group-item">
Who to Follow
</li>
    {
        who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
        })
    }
</ul>
); }
export default WhoToFollowList;