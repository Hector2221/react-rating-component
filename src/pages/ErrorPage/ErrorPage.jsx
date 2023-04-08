import { images } from "../../constants/images";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="card ErrorPage">
      <h1>ErrorPage</h1>
      <Link to="/react-rating-component">regresar</Link>
      <img src={images.ErrorPage} alt="" />
    </div>
  );
};
