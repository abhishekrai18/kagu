import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { navData } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
  margin: 80px 130px 10px 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  color: black;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Link to={`/product/${data.text}`}>
          <Box>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Box>
        </Link>
      ))}
    </Component>
  );
};

export default NavBar;
