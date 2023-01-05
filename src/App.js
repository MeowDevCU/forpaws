import "./App.css";
import Nav from "./Nav/nav";
import Friends from "./Friends/friends";
import NewPost from "./NewPost_page/newpost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login_page/login";
import Logout from "./Login_page/logout"


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <div></div>
            <div className="search_bar">
               <form name="search">
                  <input type="text" placeholder="Search"></input>
               </form>
            </div>
            <h1>Forpaws</h1>
         </header>


         
         
         
         <Router>
            <Nav />
            <Routes>
               <Route path="/" element={<Friends />} />
               <Route path="/newPost" element={<NewPost />} />
               <Route path="/login" element={<Login />} />
               <Route path="/logout" element={<Logout />}/>

            </Routes>
         </Router>
         
         
      </div>
   );
}

export default App;
