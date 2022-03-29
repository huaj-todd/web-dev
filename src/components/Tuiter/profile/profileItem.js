import React from "react";
const profileItem =({profile}) =>{
    return (
        <div className="list-group-item">
            <p>{profile.firstName}</p>
        </div>
    );
}
export default  profileItem;