/* Made by Amilesh 29/12/2022 */
import "./trend.css";

const Trend = (props) => {
  const { tag } = props;
  return (
    <div className="follow">
      <button className="tag">#{tag}</button>
    </div>
  );
};

export default Trend;
