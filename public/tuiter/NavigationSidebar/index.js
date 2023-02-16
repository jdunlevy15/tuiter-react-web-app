const NavigationSidebar = () => {
  return `
  <div class="list-group">
  <a
    href="../home/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-home"></i>
    <span class="d-none d-xl-inline">Home</span>
  </a>
  <a href="#" class="list-group-item list-group-item-action active">
    <i class="fas fa-hashtag"></i>
    <span class="d-none d-xl-inline">Explore</span>
  </a>
  <a
    href="../notifications/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-bell"></i>
    <span class="d-none d-xl-inline">Notifications</span>
  </a>
  <a
    href="../messages/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-envelope"></i>
    <span class="d-none d-xl-inline">Messages</span>
  </a>
  <a
    href="../bookmarks/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-bookmark"></i>
    <span class="d-none d-xl-inline">Bookmarks</span>
  </a>
  <a
    href="../lists/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-list"></i>
    <span class="d-none d-xl-inline">Lists</span>
  </a>
  <a
    href="../profile/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-user"></i>
    <span class="d-none d-xl-inline">Profile</span>
  </a>
  <a
    href="../more/index.html"
    class="list-group-item list-group-item-action"
  >
    <i class="fas fa-ellipsis-h"></i>
    <span class="d-none d-xl-inline">More</span>
  </a>
</div>
    `;
};
export default NavigationSidebar;
