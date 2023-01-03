import "./App.css";
import Nav from "./Nav/nav";
import Friends from "./Friends/friends"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forpaws</h1>
      </header>

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Friends/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
