const WhoToFollowListItem = (who) => {
    return(`

<li class="list-group-item list-group-item-action" style="background-color: black">
                        <div class="row">
                            <div class="col-2">
                                <img src=${who.avatarIcon} class="wd-avator">
                            </div>

                            <div class="col-7">
                                <div class="wd-who-to-follow wd-content-margin" style="color: white">
                                    ${who.userName} 
                                    <i class="fas fa-user-check"></i>
                                </div>
                                <div class="wd-who-to-follow wd-content-margin" style="color: white">@${who.handle}</div>
                            </div>
                            <div class="col-3">
                                <button type="submit" class="btn btn-primary" style="border-radius: 20px ;background-color: #0a53be">Follow</button>
                            </div>
                        </div>
                    </li>



</li>
`);
}
export default WhoToFollowListItem;