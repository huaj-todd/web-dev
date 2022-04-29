import NavigationSidebar from "../NavigationSidebar/index.js";
import React from "react";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import WhoToFollowList from "../WhoToFollowList/index"
const HomeScreen = () => {
    return(
        <>
            <div class="row mt-2">
            <div class="col-2">
             <NavigationSidebar />
            </div>

            <div class="col-7">
            <PostList/>
            </div>
                <div className="col-3">
                    <WhoToFollowList/>
                </div>

            </div>
        </>
    )
};
export default HomeScreen;