/* Made by Neel 27/12/2022*/
import "./post.css";

const Post = (props) => {
  const { link, pfp, username, caption, profileurl } = props;

  return (
    <div className="post-border">
      <div className="post">
        <div className="postImg">
          <img src={link} />
          <div className="buttons">
            <svg
              className="heart"
              width="31"
              height="39"
              viewBox="0 0 42 39"
              fill="white"
              fill-opacity="0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.0953 1C24.3332 1 21 7.72725 21 7.72725C21 7.72725 17.6669 1 10.9047 1C5.40917 1 1.05731 5.6397 1.00106 11.176C0.886488 22.668 10.035 30.8406 20.0626 37.7087C20.339 37.8985 20.6656 38 21 38C21.3344 38 21.661 37.8985 21.9375 37.7087C31.964 30.8406 41.1125 22.668 40.999 11.176C40.9427 5.6397 36.5909 1 31.0953 1V1Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              className="comment"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="white"
              fill-opacity="0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7194 3.8061V3.80693L28.7322 27.0767L25.3872 23.6926L24.9468 23.247H24.3204H3.62195C2.8405 23.247 2.16504 22.5889 2.16504 21.7555V3.8061C2.16504 2.97265 2.8405 2.31454 3.62195 2.31454H27.2773C28.049 2.31454 28.7194 2.96279 28.7194 3.8061Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
            <svg
              className="bookmark"
              width="31"
              height="26"
              viewBox="0 0 31 34"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1377 0.871338H4.49153C2.11046 0.871338 0.183954 2.49542 0.183954 4.48041L0.162308 33.353L15.3146 27.9394L30.4669 33.353V4.48041C30.4669 2.49542 28.5187 0.871338 26.1377 0.871338Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="caption">
          <img src={pfp} className="pfp-post" />
          <a href={profileurl}>
            <b>
              <i>{username}</i>
            </b>
          </a>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

/*
  <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>
    <lord-icon
    src="https://cdn.lordicon.com/pnhskdva.json"
    trigger="click"
    style="width:250px;height:250px">
    </lord-icon>

    <lord-icon
        src="https://cdn.lordicon.com/gigfpovs.json"
        trigger="click"
        colors="primary:#121331"
        state="morph-1"
        style="width:250px;height:250px">
    </lord-icon>

    <lord-icon
        src="https://cdn.lordicon.com/hpivxauj.json"
        trigger="click"
        colors="primary:#121331"
        state="hover"
        style="width:250px;height:250px">
    </lord-icon>
*/
