// // FollowItem.jsx
// let FollowItem = (props) => {
//   return (
//     <div className="followItem">
//       <div>
//         <img src={props.avatar} />
//         <div>
//           <p>{props.title}</p>
//           <p>{props.handler}</p>
//         </div>
//       </div>
//       <button>Follow</button>
//     </div>
//   );
// }

// export default FollowItem

function FollowItem() {
  return (
    <div className="followItem">
      <span>User</span>
      <button>Follow</button>
    </div>
  )
}

export default FollowItem