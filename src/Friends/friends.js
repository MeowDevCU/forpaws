import Post from "./post.js";
import WhoToFollow from "./who-to-follow.js";
import Trend from "./trend.js";
import React, {useEffect,useState} from 'react';
import {db} from '../firebase-config.js';



const Friends = () => {

  const [posts,setPosts] = useState([
    {
      pfp:"https://resizing.flixster.com/2zhQizNWcHGBt2OAvgFyMEckbLc=/300x300/v2/https://flxt.tmsimg.com/assets/p36086_p_v8_aa.jpg",
      username:"NEWUSERRRR",
      link:"https://pbs.twimg.com/profile_images/1568434017334337537/Vn1qmVlT_400x400.jpg",
      caption:"caption"
    },
    {
      pfp:"https://preview.redd.it/lxnhuv7l4za71.jpg?auto=webp&s=43980cf4f864c7344903a39adcc8fef988d377ff",
      username:"coconut_doggy",
      link:"https://external-preview.redd.it/V5bU4RPx7sI6WPvXoYx5P1Y4MXxCnWqXA6r5_MQtO3Q.jpg?auto=webp&s=df7e02a40953745419d4bd7e1ee52cb5f0f81148",
      caption:"just got my g2"
    }
  ]);

  useEffect(() => {

  },[]);




  return (
    <>
    

      <div className="feed">
      {
      posts.map(post =>{
        <Post pfp={post.pfp} username={post.username} link={post.link} caption={post.caption} />
      })
    }
          <Post
            pfp="https://resizing.flixster.com/2zhQizNWcHGBt2OAvgFyMEckbLc=/300x300/v2/https://flxt.tmsimg.com/assets/p36086_p_v8_aa.jpg"
            username="funkymonkey"
            link="https://pbs.twimg.com/profile_images/1568434017334337537/Vn1qmVlT_400x400.jpg"
            caption="funky monkay"
          />
          <Post
            pfp="https://preview.redd.it/lxnhuv7l4za71.jpg?auto=webp&s=43980cf4f864c7344903a39adcc8fef988d377ff"
            username="coconut_doggy"
            link="https://media.tenor.com/1kZ2j73pGDUAAAAC/capybara-ok-he-pull-up.gif"
            caption="Corolla go skrrtttt"
          />
          <Post
            pfp="https://people.com/thmb/DvZ0fRsOmV41OvSGe032bnPMKpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(779x196:781x198)/orangutan-sunglasses-01fb10dd48e944baa3412da0732f3d31.jpg"
            username="average_golf_enjoyer12"
            link="https://i.kym-cdn.com/entries/icons/original/000/039/565/orangutan.jpg"
            caption="golfin"
          />
          <Post
            pfp="https://preview.redd.it/lxnhuv7l4za71.jpg?auto=webp&s=43980cf4f864c7344903a39adcc8fef988d377ff"
            username="coconut_doggy"
            link="https://external-preview.redd.it/V5bU4RPx7sI6WPvXoYx5P1Y4MXxCnWqXA6r5_MQtO3Q.jpg?auto=webp&s=df7e02a40953745419d4bd7e1ee52cb5f0f81148"
            caption="just got my g2"
          />
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
