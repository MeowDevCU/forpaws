/* Made by Neel 03/01/2023*/
import Nav from "../Nav/nav";
import "./newpost.css";
import { useState } from "react";

const NewPost = () => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
