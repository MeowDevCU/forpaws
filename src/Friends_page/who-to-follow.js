/* Made by Amilesh 27/12/2022 */
import "./who-to-follow.css";

const WhoToFollow = (props) => {
  const { pfp, username } = props;

  return (
    <div className="follow">
      <img src={pfp} className="pfp" />
      <p id="wtftext">{username}</p>
      <button className="followbtn">Follow</button>
    </div>
  );
};

export default WhoToFollow;
