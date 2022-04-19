import NavigationSidebar from "../NavigationSidebar/index.js";
import React from "react";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
const HomeScreen = () => {
    return(
        <>
            <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
             {NavigationSidebar()}
            </div>

            <div class="col">
            {PostList()}
            </div>

            </div>
        </>
    )
};
export default HomeScreen;