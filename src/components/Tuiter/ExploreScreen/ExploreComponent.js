import PostSummaryList from "../PostSummaryList";
import React from "react";
const ExploreComponent = () => {
    return(
        <div>
            <div className="mb-3 row">
                            <div className="col-10">
                                <input  className="wd-search-area" type="text"  placeholder="Search Tuiter"  title="tooltip"/>
                            </div>
                            <div className="col-2">
                                <i className="fas fa-fish" ></i>
                            </div>

            </div>
            <ul className="nav mb-2 nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" href="for-you.html">For You</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="trending.html">Trending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="news.html">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="sports.html">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                                </li>

            </ul>
             <div className="card">
                            <img src="/tuiters/Starship-Mk1-Day.jpeg" className="card-img-top img-fluid" alt="..."/>
                            <div className="card-img-overlay">
                                <h5 className="card-title wd-img-text-setting">SpaceX's Starship</h5>
                            </div>
            </div>
        </div>
);
}
export default ExploreComponent;