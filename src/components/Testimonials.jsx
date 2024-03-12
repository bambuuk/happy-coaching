import { styled } from "@mui/material";
import { Button, CustomContainer } from "./CustomElements";
import { testimonialsInfo } from "../assets/data/data";
import TestimonialsCard from "./TestimonialsCard";
import { toTopAnimation } from "../utils/motion";
import { motion } from "framer-motion";

const TestimonialsUI = styled("section")(({}) => ({
  width: "100%",
  height: "100%",
}));

const TitleBlock = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "68px 0 68px 32px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down(1440)]: {
    padding: "68px 32px",
  },
  [theme.breakpoints.down(768)]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

const TitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  flex: 1,
  [theme.breakpoints.down(768)]: {
    textAlign: "center",
  },
}));

const SubTitle = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  color: "rgba(74, 85, 108, 0.5)",
}));

const Title = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "121%",
  letterSpacing: "-0.02em",
  color: "#333461",
  [theme.breakpoints.down(1280)]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

const BtnBlock = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.inter,
  maxWidth: "225px",
  width: "100%",
  height: "48px",
  marginLeft: "96px",
  padding: "12px 68.5px",
  [theme.breakpoints.down(768)]: {
    marginLeft: "0",
  },
}));

const TestimonialsList = styled("div")(({ theme }) => ({
  padding: "18px 32px",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(auto, 450px))",
  gridTemplateRows: "repeat(2, minmax(auto, 312px))",
  columnGap: "32px",
  rowGap: "42px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "minmax(auto, 450px)",
    gridTemplateRows: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "18px 20px",
  },
}));

const MTitleBlock = motion(TitleBlock);

const Testimonials = () => {
  return (
    <TestimonialsUI>
      <CustomContainer>
        <MTitleBlock
          variants={toTopAnimation}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TitleWrapper>
            <SubTitle>Testimonials</SubTitle>
            <Title>Results that speak for themselves</Title>
          </TitleWrapper>
          <BtnBlock>Get started</BtnBlock>
        </MTitleBlock>

        <TestimonialsList>
          {testimonialsInfo.map(
            ({ boldText, text, img, id, name, subName }, index) => {
              return (
                <TestimonialsCard
                  key={id}
                  boldText={boldText}
                  text={text}
                  img={img}
                  name={name}
                  subName={subName}
                  index={index}
                />
              );
            }
          )}
        </TestimonialsList>
      </CustomContainer>
    </TestimonialsUI>
  );
};

export default Testimonials;
