import React from "react";
const WhoToFollowListItem = (
    {
    who = {
        avatarIcon: '../image_explores/NASA_logo.svg.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return(
<div className="list-group-item list-group-item-action">
  <div className="row">
    <div className="col-2">
       <img src={who.avatarIcon} className="wd-avator"/>
    </div>

    <div className="col-7">
       <div className="wd-who-to-follow wd-content-margin">
         {who.userName}
         <i className="fas fa-user-check"></i>
       </div>
        <div className="wd-who-to-follow wd-content-margin" >@{who.handle}</div>
    </div>
    <div className="col-3">
      <button type="submit" className="btn btn-primary">Follow</button>
    </div>
  </div>
</div>
    );
}
export default WhoToFollowListItem;