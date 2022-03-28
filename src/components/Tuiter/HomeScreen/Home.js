import NavigationSidebar from "../NavigationSidebar/index.js";
import React from "react";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
const HomeScreen = () => {
    return(
        <>
            <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
             {NavigationSidebar()}
            </div>

            <div className="col">
            {PostList()}
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            {PostSummaryList()}
            </div>

            </div>
        </>
    )
};
export default HomeScreen;