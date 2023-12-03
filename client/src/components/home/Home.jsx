import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

import { Fragment, styled, Box, Divider } from "@mui/material";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Hr = styled(Divider)`
  height: 40px;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSection />
        <Hr/>
        <Slide products={products} title="Deal of the Day" timer={true} />
      </Component>
    </>
  );
};

export default Home;
