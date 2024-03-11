import { styled } from "@mui/material";
import star from "../assets/icons/starIcon.svg";

const Rating = styled("div")(({}) => ({
  marginTop: "16px",
  display: "flex",
  gap: "4px",
}));

const RatingStar = styled("img")(({}) => ({
  display: "block",
  width: "20px",
  height: "20px",
  objectFit: "cover",
}));

const RatingList = () => {
  return (
    <Rating>
      <RatingStar src={star} />
      <RatingStar src={star} />
      <RatingStar src={star} />
      <RatingStar src={star} />
      <RatingStar src={star} />
    </Rating>
  );
};

export default RatingList;
