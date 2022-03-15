import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
<div class="mb-3 row">
                <div class="col-10">
                    <input  class="wd-search-area" type="text"  placeholder="Search Tuiter"  title="tooltip"/>
                </div>
                <div class="col-2">
                    <i class="fas fa-fish" style="color:blue"></i>
                </div>

           
</div>
<ul class="nav mb-2 nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
            
</ul>
 <div class="card">
                <img src="../Starship-Mk1-Day.jpeg" class="card-img-top img-fluid" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title wd-img-text-setting">SpaceX's Starship</h5>
                </div>
</div>


${PostSummaryList()}
`);
}
export default ExploreComponent;