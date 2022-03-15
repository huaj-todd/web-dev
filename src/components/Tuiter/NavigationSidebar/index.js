import React from "react";

const NavigationSidebar = (active = 'explore') => {
    return(
<div className="list-group">
    <a className="list-group-item list-group-item-action" href="/">
    <i className="fab fa-twitter"></i>
    </a>
    <a className="list-group-item list-group-item-action">
    <i className="fas fa-house-user">Home</i>
    </a>
    <a className="list-group-item list-group-item-action active ">
     <i className="fas fa-hashtag">Explore</i>
     </a>
     <a className="list-group-item list-group-item-action">
                <i className="fas fa-bell">Notification</i>
      </a>
      <a className="list-group-item list-group-item-action">
                <i className="fas fa-envelope" >Message</i>
      </a>
      <a className="list-group-item list-group-item-action">
                <i className="fas fa-bookmark">Bookmark</i>
      </a>
      <a className="list-group-item list-group-item-action">
                <i className="fas fa-list">List</i>
      </a>
      <a className="list-group-item list-group-item-action">
                <i className="fas fa-user">Profile</i>
      </a>
      <a className="list-group-item list-group-item-action">
                <i className="fas fa-circle-ellipsis">More</i>
      </a>
    <div className="d-grid mt-2">
        <a href="tweet.html"
           className="btn btn-primary btn-block rounded-pill" >
            Tweet</a>
    </div>
</div>
);
}
export default NavigationSidebar;