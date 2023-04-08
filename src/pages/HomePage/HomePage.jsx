import { Link } from "react-router-dom";
import { images } from "../../constants/images";
import "./HomePage.css";
import { useState } from "react";

export const HomePage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const items = [1, 2, 3, 4, 5];

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="card card-how">
      <div className="star">
        <img src={images.star} alt="" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div id="option-value" className="options">
        {items.map((item) => (
          <button
            key={item}
            className={`numbers ${selectedButton === item ? "selected" : ""}`}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Link to={`/rating/${selectedButton}`}>
        <button
          className="submit"
          type="submit"
          disabled={selectedButton === null}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};
