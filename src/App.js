import "./App.css";
import Home from "./Home_page/home";
import Friends from "./Friends_page/friends";
import NewPost from "./NewPost_page/newpost";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login_page/login";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </Router>
   );
}

export default App;
