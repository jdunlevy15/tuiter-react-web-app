import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
  <div>
  <span class="wd-search-div">
    <i class="fas fa-search"></i>
    <input
      type="text"
      id="search-bar"
      placeholder="Search Tuiter"
      class="wd-transparent-input"
    />
  </span>
  <span class="wd-float-right"
    ><i class="fas fa-cog fa-2x wd-bootstrap-blue"></i
  ></span>
</div>
<!-- Tabs -->
          <ul class="mt-3 mb-3 nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
              <a class="d-none d-md-block nav-link" href="#">Entertainment</a>
            </li>
          </ul>

          <!-- Image -->
          <div class="wd-image-caption-wrapper">
            <h3 class="wd-image-caption text-white">SpaceX's Starship</h3>
            <image
              width="100%"
              src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
            />
          </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
