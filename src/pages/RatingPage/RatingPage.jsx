import { images } from "../../constants/images";
import { useParams } from "react-router-dom";

export const RatingPage = () => {
  const { selectedButton } = useParams();
  return (
    <div className="card item-center ">
      <img src={images.rating} alt="" />
      <div className="result">
        <h3 className="btn-select">You selected {selectedButton} out of 5</h3>
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
