import Nav from "../Nav/nav";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config.js";
import { getAuth } from "firebase/auth";
import Login from "../Login_page/login.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  var user = getAuth().currentUser;

  return (
    <>
      {/*condition ? true_expression : false_expression*/}
      {user != null ? <Nav /> : <div></div>}
      {console.log(user)}
      <div></div>
    </>
  );
};

export default Home;
