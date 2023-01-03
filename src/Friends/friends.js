import Post from "./post.js";
import WhoToFollow from "./who-to-follow.js";
import Trend from "./trend.js";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config.js";

const Friends = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      db.collection("posts").onSnapshot(snapshot => {
         setPosts(snapshot.docs.map(doc =>  
          doc.data()));
          
      });
   }, []);

   return (
      <>
         <div className="feed">
            {posts.map((post) => {
               return (
                  <Post
                     pfp={post.pfp}
                     username={post.username}
                     link={post.link}
                     caption={post.caption}
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
         </div>

         <div className="trending">
            <h3>What's Trending</h3>
            <Trend tag="playboi capybara" />
            <Trend tag="Sussycats" />
         </div>
      </>
   );
};

export default Friends;
