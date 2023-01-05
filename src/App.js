import "./App.css";
import Nav from "./Nav/nav";
import Home from "./Home_page/home";
import Friends from "./Friends_page/friends";
import NewPost from "./NewPost_page/newpost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login_page/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-items">
          <div></div>
          <div className="search_bar">
            <form name="search">
              <input type="text" placeholder="Search"></input>
            </form>
          </div>
          <h1>Forpaws</h1>
        </div>
      </header>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Friends />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
