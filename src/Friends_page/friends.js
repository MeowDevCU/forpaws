import Post from "./post.js";
import Nav from "../Nav/nav";
import WhoToFollow from "./who-to-follow.js";
import Trend from "./trend.js";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config.js";
import Login from "../Login_page/login.js";

const Friends = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <header className="App-header">
        <div className="header-items">
          <div></div>
          <div className="search_bar ">
            <form name="search">
              <input className="entry" type="text" placeholder="Search"></input>
            </form>
          </div>
          <h1>Forpaws</h1>
        </div>
      </header>
      <Nav />
      <div className="feed">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              pfp={post.post.pfp}
              username={post.post.username}
              imageURL={post.post.imageURL}
              caption={post.post.caption}
            />
          );
        })}
      </div>

      <div className="who-to-follow">
        <h3>Who To Follow</h3>
        <WhoToFollow
          username="coconut_doggy"
          pfp="https://preview.redd.it/lxnhuv7l4za71.jpg?auto=webp&s=43980cf4f864c7344903a39adcc8fef988d377ff"
        />
        <WhoToFollow
          username="chonkychutney"
          pfp="https://media.tenor.com/1NRoxR1fXngAAAAi/hug-cat.gif"
        />
        <WhoToFollow
          username="chonkychutney"
          pfp="https://media.tenor.com/1NRoxR1fXngAAAAi/hug-cat.gif"
        />
        <br />
        <h3>What's Trending</h3>
        <Trend tag="playboi capybara" />
        <Trend tag="Sussycats" />
      </div>
    </>
  );
};

export default Friends;
