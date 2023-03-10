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
            <Route exact path="/forpaws" element={<Navigate to="./home" />} />
            <Route path="forpaws/home" element={<Home />} />
            <Route path="forpaws/friends" element={<Friends />} />
            <Route path="forpaws/newPost" element={<NewPost />} />
            <Route path="forpaws/login" element={<Login />} />
         </Routes>
      </Router>
   );
}

export default App;
