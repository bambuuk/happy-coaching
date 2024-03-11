import { styled } from "@mui/material";
import RatingList from "./RatingList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toTopAnimation } from "../utils/motion";

const TestimonialsItem = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "32px",
  border: "1px solid #edeff5",
  padding: "20px 25px",
}));

const Description = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  color: "#667085",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    WebkitLineClamp: 5,
  },
}));

const BoldDescr = styled("span")(({}) => ({
  fontWeight: 700,
  color: "#333461",
}));

const Avatar = styled("img")(({}) => ({
  display: "block",
  width: "64px",
  height: "64px",
  objectFit: "cover",
}));

const UserWrapper = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const UserTitle = styled("div")(({ theme }) => ({
  marginTop: "16px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "19px",
  lineHeight: "126%",
  textAlign: "center",
  color: "#333461",
}));

const UserSubtitle = styled("div")(({ theme }) => ({
  marginTop: "4px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  textAlign: "center",
  color: "rgba(74, 85, 108, 0.5)",
}));

const MTestimonialsItem = motion(TestimonialsItem);

const TestimonialsCard = ({ boldText, text, img, name, subName }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <MTestimonialsItem
      ref={ref}
      initial="hidden"
      variants={toTopAnimation}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <Description>
        {boldText ? <BoldDescr>{boldText}</BoldDescr> : ""}
        {text}
      </Description>
      <UserWrapper>
        <Avatar src={img} alt="User photo" />
        <UserTitle>{name}</UserTitle>
        <UserSubtitle>{subName}</UserSubtitle>
        <RatingList />
      </UserWrapper>
    </MTestimonialsItem>
  );
};

export default TestimonialsCard;
