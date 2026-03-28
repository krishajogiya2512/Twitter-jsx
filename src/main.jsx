// import {createRoot} from "react-dom/client"
// import Header from "./components/Header.jsx"
// import FollowList from "./components/FollowList.jsx"
// import FollowItem from "./followItem.jsx"

// let app = (
//   <div>
//     <Header />
//     <FollowList /> 
//     <FollowItem />
//   </div>
// )

// import { createRoot } from "react-dom/client"
// import Header from "./Header.jsx"
// import FollowList from "./FollowList.jsx"
// import FollowItem from "./FollowItem.jsx"
// import "./index.css"

// function App() {
//   return (
//     <div>
//       <Header />
//       <FollowList />
//       <FollowItem />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")).render(<App />)

import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
import FollowList from "./FollowList.jsx"
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <FollowList />
    </div>
  )
}

createRoot(document.getElementById("root")).render(<App />)
