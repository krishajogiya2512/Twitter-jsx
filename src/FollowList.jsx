import FollowItem from "./FollowItem"

function FollowList() {
  return (
    <div className="followList">
      <h3 className="followList__title">Who to follow</h3>

      <FollowItem />
      <FollowItem />
      <FollowItem />
    </div>
  )
}

export default FollowList