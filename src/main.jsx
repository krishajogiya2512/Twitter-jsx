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