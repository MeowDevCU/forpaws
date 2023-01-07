/* Made by Neel 03/01/2023*/
import Nav from "../Nav/nav";
import "./newpost.css";
import { useState } from "react";
import { storage, db } from "../firebase-config"

const NewPost = (props) => {
  const {pfp, username} = props;
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');


  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage((e.target.files[0]));
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            db.collection("posts").add({
              caption: caption,
              imageURL: url,
              username: "username",
              pfp: "https://media.tenor.com/1NRoxR1fXngAAAAi/hug-cat.gif"
            })
            alert("Your image has been posted")
            setCaption('');
            setImage(null);
          })
      }

    )
  }

  return (
    <>
      <header className="App-header">
        <div className="header-items">
          <div></div>
          <div></div>
          <h1>Forpaws</h1>
        </div>
      </header>
      <Nav />
      <div className="newpost-margin">
        <div className="gradient-border newpost-border">
          <div className=" internal newpost">
            <div className="newpostImg">
              <input
                type="file"
                onChange={handleImage}
                accept="image/png , image/jpeg"
              ></input>
            </div>
            <div className="image-preview">
              <img src={image} />
            </div>
            <div className="newpost-caption">
              <img src={pfp} className="pfp-post" />
              <a href="">
                <b>
                  <i>username</i>            
                </b>
              </a>
              
             </div>
             <textarea className="caption-txtbox" rows="2" cols="20" required maxLength="150" placeholder="Caption your post!"onChange={e => setCaption(e.target.value)}>       
              </textarea>
              <button className="post-btn" onClick={handleUpload}>POST</button>
          </div>
          
              
        </div>
      </div>
    </>
  );
};

export default NewPost;
