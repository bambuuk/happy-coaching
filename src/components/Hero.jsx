import { styled } from "@mui/material";
import { Button } from "./CustomElements";
import fullHeroImg from "../assets/fullHeroImg.png";
import { motion } from "framer-motion";
import { leftShowing, rightShowing } from "../utils/motion";

const HeroUI = styled("section")(({}) => ({
  width: "100%",
  height: "100%",
}));

const HeroWrapper = styled("div")(({ theme }) => ({
  margin: "0 auto",
  maxWidth: "1440px",
  overflow: "hidden",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down(1024)]: {
    gridTemplateColumns: "1fr",
  },
}));

const FirstBlock = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down(1280)]: {
    justifyContent: "center",
  },
}));

const FirstBlockWrapper = styled("div")(({ theme }) => ({
  maxWidth: "544px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  margin: "129.5px 64px 0 32px",
  [theme.breakpoints.down(1280)]: {
    margin: "40px 30px 0 32px",
  },
  [theme.breakpoints.down(1024)]: {
    alignItems: "center",
    maxWidth: "none",
    margin: "40px 32px",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    maxWidth: "none",
    margin: "40px 20px",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 800,
  fontSize: "48px",
  lineHeight: "121%",
  letterSpacing: "-0.02em",
  color: "#333461",
  [theme.breakpoints.down(1280)]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down(1024)]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

const Description = styled("p")(({ theme }) => ({
  margin: "24px 64px 0 0",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "150%",
  color: "rgba(74, 85, 108, 0.7)",
  [theme.breakpoints.down(1280)]: {
    margin: "20px 64px 0 0",
  },
  [theme.breakpoints.down(1024)]: {
    textAlign: "center",
    margin: "24px 0 0 0",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const Form = styled("form")(({ theme }) => ({
  marginTop: "38px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "299px",
  width: "100%",
  [theme.breakpoints.down(1280)]: {
    marginTop: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    marginTop: "38px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
  },
}));

const Input = styled("input")(({ theme }) => ({
  padding: "12px 14px 12px 16px",
  border: "1px solid #d0d5dd",
  borderRadius: "8px",
  height: "48px",
  width: "100%",
  fontFamily: theme.typography.inter,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  color: "#667085",
  "&:focus": {
    border: "1px solid #20ad96",
  },
}));

const PrivacyPolicyBlock = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  fontFamily: theme.typography.inter,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "143%",
  color: "#667085",
}));

const PrivacyPolicyLink = styled("a")(({}) => ({
  textDecoration: "underline",
  cursor: "pointer",
  color: "#667085",
}));

const FormBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  fontFamily: theme.typography.inter,
}));

const SecondBlock = styled("div")(({}) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
}));

const SecondBlockWrapper = styled("div")(({}) => ({
  width: "100%",
}));

const ImgWrapper = styled("div")(({}) => ({
  width: "100%",
  position: "relative",
}));

const HeroImg = styled("img")(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const LeftShowingFirstBlock = motion(FirstBlock);
const RightShowingSecondBlock = motion(SecondBlock);

const Hero = () => {
  return (
    <HeroUI>
      <HeroWrapper>
        <LeftShowingFirstBlock
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftShowing}
        >
          <FirstBlockWrapper>
            <Title>Results that speak for themselves</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </Description>
            <Form>
              <Input type="text" required placeholder="Name" />
              <Input type="email" required placeholder="Enter your email" />
              <PrivacyPolicyBlock>
                <span>We care about your data in our&nbsp;</span>
                <PrivacyPolicyLink href="#">privacy policy</PrivacyPolicyLink>
              </PrivacyPolicyBlock>
              <FormBtn>Get free guide</FormBtn>
            </Form>
          </FirstBlockWrapper>
        </LeftShowingFirstBlock>

        <RightShowingSecondBlock
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightShowing}
        >
          <SecondBlockWrapper>
            <ImgWrapper>
              <HeroImg src={fullHeroImg} alt="" />
            </ImgWrapper>
          </SecondBlockWrapper>
        </RightShowingSecondBlock>
      </HeroWrapper>
    </HeroUI>
  );
};

export default Hero;
