import { IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.svg";
import { Button } from "./CustomElements";

const HeaderUI = styled("header")(({}) => ({
  width: "100%",
  height: "100%",
}));

const HeaderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "60px",
  padding: "10px 75px 10px 85px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down(1280)]: {
    padding: "10px",
  },
}));

const Logo = styled("div")(({}) => ({
  cursor: "pointer",
}));

const Menu = styled("div")(({}) => ({
  display: "flex",
  gap: "27px",
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "#20ad96",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const Navigation = styled("nav")(({ theme }) => ({
  display: "block",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavigationList = styled("ul")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  width: "100%",
  height: "100%",
}));

const NavigationItem = styled("li")(({}) => ({
  fontFamily: `"Kumbh Sans", sans-serif`,
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "160%",
  letterSpacing: "-2%",
  color: "#4a556c",
  flexShrink: 0,
  whiteSpace: "nowrap",
  cursor: "pointer",
}));

const MenuBtn = styled(Button)(({ theme }) => ({
  display: "block",
  maxWidth: "193px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  return (
    <HeaderUI>
      <HeaderWrapper>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Menu>
          <CustomIconButton size="small" edge="start" aria-label="menu">
            <MenuIcon style={{ fontSize: "40px" }} />
          </CustomIconButton>
          <Navigation>
            <NavigationList>
              <NavigationItem>Home</NavigationItem>
              <NavigationItem>Services</NavigationItem>
              <NavigationItem>About us</NavigationItem>
              <NavigationItem>Extra Sales page</NavigationItem>
            </NavigationList>
          </Navigation>
          <MenuBtn>Get your free guide now</MenuBtn>
        </Menu>
      </HeaderWrapper>
    </HeaderUI>
  );
};

export default Header;
