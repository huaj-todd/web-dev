import React from "react";
import ProfileItem from "./profileItem";
import {useSelector} from "react-redux";

const ProfileScreen  = () => {
    const profiles = useSelector(state => state.profiles);
    return (JSON.stringify(profiles));

}
export default  ProfileScreen;