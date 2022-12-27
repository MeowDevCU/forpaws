import logo from './assets/logo.svg';
import './App.css';
import Nav from './nav.js';
import Post from './post.js';
import WhoToFollow from './who-to-follow.js';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Forpaws</h1>
      </header>
      
      <nav>
        <Nav />
      </nav>
      
      
      <main>
      
        <div className="feed">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className="who-to-follow">
          <h3>Who to follow</h3>
          <WhoToFollow/>
          <WhoToFollow/>
          <WhoToFollow/>
         </div>

      </main>
    </div>
  );
}

export default App;
