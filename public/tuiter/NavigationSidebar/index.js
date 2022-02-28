const NavigationSidebar = () => {
    return(`
<div class="list-group">
    <a class="list-group-item list-group-item-action" href="/"style="background-color: black">
    <i class="fab fa-twitter" style="color: white"></i>
    </a>
    <a class="list-group-item list-group-item-action"style="background-color: black">
    <i class="fas fa-house-user" style="color: white">Home</i>
    </a>
    <a class="list-group-item list-group-item-action active " style="background-color: #0a53be">
     <i class="fas fa-hashtag" style="color: white">Explore</i>
     </a>
     <a class="list-group-item list-group-item-action" style="background-color: black">
                <i class="fas fa-bell" style="color: white">Notification</i>
      </a>
      <a class="list-group-item list-group-item-action"style="background-color: black">
                <i class="fas fa-envelope" style="color: white">Message</i>
      </a>
      <a class="list-group-item list-group-item-action"style="background-color: black">
                <i class="fas fa-bookmark"style="color: white">Bookmark</i>
      </a>
      <a class="list-group-item list-group-item-action"style="background-color: black">
                <i class="fas fa-list"style="color: white">List</i>
      </a>
      <a class="list-group-item list-group-item-action"style="background-color: black">
                <i class="fas fa-user"style="color: white">Profile</i>
      </a>
      <a class="list-group-item list-group-item-action"style="background-color: black">
                <i class="fas fa-circle-ellipsis"style="color: white">More</i>
      </a>
<!-- continue the rest of the list -->
</div>
<div class="d-grid mt-2">
    <a href="tweet.html"
    class="btn btn-primary btn-block rounded-pill" style="background-color: #0a53be">
    Tweet</a>
</div>
`);
}
export default NavigationSidebar;