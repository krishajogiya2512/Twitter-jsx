// let FollowList = () => {
//     return (
//         <div>
//             <h1></h1>
//         </div>
//     )
// }

// FollowList.jsx
// import FollowItem from "./FollowItem";

// let FollowList = () => {

//   let data = [
//     { avatar:"https://picsum.photos/id/237/200/200", title:"luis.", handler:"@disco_lu"},
//     {avatar:"https://picsum.photos/id/238/200/200", title:"CosmicChouhan", handler:"@CosmicChouhan"},
//     {avatar:"https://picsum.photos/id/239/200/200", title:"Contraction Trader", handler:"@iramyram"},
//     {avatar:"https://picsum.photos/id/240/200/200", title:"Zeeshan Adeen", handler:"@iamzee"}
//   ]

//   return (
//     <div className="followList">
//       <h1 className="followList__title">Who to follow</h1>
//       <div>
//         {data.map((item) => {
//           return <FollowItem key={item.title} avatar={item.avatar} title={item.title} handler={item.handler} />
//         })}
//       </div>
//       <button className="followList__button">Show more</button>
//     </div>
//   )
// }

// export default FollowList;

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