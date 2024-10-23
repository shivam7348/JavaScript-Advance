import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import NoPage from "./pages/nopage/NoPage"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App