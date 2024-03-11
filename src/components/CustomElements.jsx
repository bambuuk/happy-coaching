import { styled } from "@mui/material";

export const Button = styled("button")(({}) => ({
  fontFamily: `"Kumbh Sans", sans-serif`,
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#fff",
  borderRadius: "4px",
  padding: "11px 16px",
  backgroundColor: "#20ad96",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: "#105a4e",
  },
}));

export const CustomContainer = styled("div")({
  margin: "0 auto",
  width: "100%",
  height: "100%",
  maxWidth: "1280px",
});
