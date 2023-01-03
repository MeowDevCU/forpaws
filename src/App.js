import "./App.css";
import Nav from "./Nav/nav";
import Friends from "./Friends/friends"
import NewPost from "./NewPost_page/newpost";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forpaws</h1>
        <link rel="stylesheet" href="search.css"></link>
        <div class="search_bar">
          <form name="search">
            <input type="text" placeholder="Searc"></input>
          </form>
        </div>
      </header>
      
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Friends/>}/>
          <Route path="/newPost" element={<NewPost/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
