import "./home.css";
import Nav from "../Nav/nav";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Home = () => {
   const auth = getAuth();

   return (
      <>
         <header className="App-header"><div className="header-items">
            <div></div>
            <div className="search_bar">
               <form name="search">
                  <input className="entry" type="text" placeholder="Search"></input>
               </form>
            </div>
            <h1>Forpaws</h1>
         </div></header>
         {auth.currentUser != null ? <Nav /> : <Link to="..\login">
            <div className=" dark-btn login-btn">LOGIN/SIGNUP</div>
         </Link>}
      </>
   );
};

export default Home;
