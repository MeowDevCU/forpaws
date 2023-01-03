/* Made by Neel 03/01/2023*/
import "./newpost.css";

const NewPost = () => {
   return (
      <div className="newpost-border">
         <div className="newpost">
            <div className="newpostImg">
               <input type="file" id="imageLoader" name="imageLoader" />
            </div>
            
         </div>
      </div>
   );
};

export default NewPost;
