const PostSummaryItem = (post) => {
  return `<div class="list-group-item">
        <div class="row">
        <div class="col col-9">
            <p class="mb-0 text-secondary">${post.topic}</p>
            <p class="mb-0">
            ${post.userName} <i class="fas fa-check-circle"></i>
            <span class="text-secondary">- ${post.time}</span>
            </p>
            <p>
            ${post.title}
            </p>
        </div>
        <div class="col-3">
            <img
            style="width: 96px; height: 96px"
            src="${post.image}"
            />
        </div>
        </div>
        </div>`;
};

export default PostSummaryItem;
