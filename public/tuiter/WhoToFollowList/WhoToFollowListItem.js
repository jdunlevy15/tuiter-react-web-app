const WhoToFollowListItem = (who) => {
  return `<div class="list-group-item">
    <div class="row pe-2">
      <div class="col-2">
        <img
          style="width: 48px; height: 48px"
          class="rounded-circle"
          src="${who.avatarIcon}"
        />
      </div>
      <div class="col-7 ps-3">
        <p class="mb-0 ms-1">
          ${who.userName} <i class="fas fa-check-circle"></i>
        </p>
        <p class="text-secondary mb-0 ms-1">@${who.handle}</p>
      </div>
      <div class="col-3 align-self-center">
        <div class="align-items-center justify-content-center">
          <button class="rounded-pill btn-primary align-middle">
            Follow
          </button>
        </div>
      </div>
    </div>
  </div>`;
};

export default WhoToFollowListItem;
