import { useState, useContext } from "react";

import { Box, Button, Typography, styled } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

import LoginDialog from "../login/loginDialog";
import Profile from "./Profile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { DataContext } from "../../context/DataProvider";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 6% 0 auto;
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }
  align-items: center;
`;

const Container = styled(Link)`
  text-decoration: none;
  color: gray;
  display: flex;
`;

const LoginButton = styled(AccountCircleIcon)({
  color: 'black',
  width: '35px',
  height: '35px',
  margin: '0 60px',
  cursor: 'pointer'
});

const ShoppingCart = styled(AddShoppingCartIcon)({
  color: "black",
  width: "35px",
  height: "35px",
  margin: "0",
  cursor: "pointer"
});

const Custombutton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton onClick={() => openDialog()} />
      )}
      <LoginDialog open={open} setOpen={setOpen} />
      <Container to="/cart">
        <ShoppingCart />
      </Container>
    </Wrapper>
  );
};

export default Custombutton;
