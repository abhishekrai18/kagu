import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import Search from "./Search";
import Custombutton from "./Custombutton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #ffd166;
  height: 55px;
  display: flex;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-textdecoration: none;
  color: #2f4858;
`;

const SubHeading = styled(Typography)`
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  font-family: "Cedarville Cursive", cursive;
`;

const CustomButtonWrapper = styled(Box)`
  margin: 0 12% 0 auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component to="/">
          <SubHeading>Kagu-ya</SubHeading>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <Custombutton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
