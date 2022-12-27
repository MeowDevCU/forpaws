/* Made by Neel 27/12/2022*/
import './post.css';

const Post = () => {
    return (

        <div className="post">
            <img className="postImg" src="https://pbs.twimg.com/profile_images/1568434017334337537/Vn1qmVlT_400x400.jpg"/>
            <div className="caption">
                <img src="https://media.tenor.com/1NRoxR1fXngAAAAi/hug-cat.gif" className='pfp-post'/>
                <a>Lionel Messi</a>
                <p>Lookin’ like a snack. Come, eat me!</p>
            </div>
        </div>
 
    );
};

export default Post;