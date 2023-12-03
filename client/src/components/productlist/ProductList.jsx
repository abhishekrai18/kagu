import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  styled,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import SelectCategory from "./SelectCategory";

const Component = styled(Box)`
  background: #ffffff;
  margin: 0 100px;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  text-align: center;
`;

const DealText = styled(Typography)`
  font-size: 34px;
  font-weight: 400;
  font-family: "Mrs Eaves XL Serif";
  line-height: 40px;
  color: #2f4858;
`;

const Total = styled(Typography)`
  font-size: 15px;
  font-weight: 400;
  font-family: "Mrs Eaves XL Serif";
  line-height: 22.5px;
  color: #999999;
`;

const Image = styled("img")`
  width: auto;
  height: 300px;
  transition: transform 0.2s ease; // Add a smooth transition on hover

  &:hover {
    transform: scale(1.05);
  }
  position: relative;
  z-index: 1;
`;

const DiscountTag = styled("div")`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff5733;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 3px;
  z-index: 2;
`;

const Text = styled(Typography)`
  font-size: 16px;
  margin-top: 5px;
`;

const Grid = styled(Box)`
  display: Grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-row-gap: 60px;
  padding: 20px;
  position: relative;
`;

const SortButton = styled(Button)`
  background-color: #2f4858;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 30px;
  width: 140px;

  &:hover {
    background-color: #1a2e3f;
  }
`;

const Product = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  const { product } = useParams();
  const [sortByPrice, setSortByPrice] = useState(null); // State to control sorting

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  if (sortByPrice) {
    products.sort((a, b) => {
      if (sortByPrice === "asc") {
        return a.price.cost - b.price.cost;
      } else {
        return b.price.cost - a.price.cost;
      }
    });
  }

  return (
    <>
      <Component>
        <Deal>
          <DealText>All PRODUCTS</DealText>
          <Total>({products.length} Products)</Total>
          {}
          <div style={{ display: "flex" }}>
            <div>
              <SelectCategory />
            </div>
            <div style={{ marginLeft: "58vw" }}>
              <Total>SORT BY</Total>
              <SortButton
                onClick={() =>
                  setSortByPrice(sortByPrice === "asc" ? "desc" : "asc")
                }
              >
                {sortByPrice === "asc" ? "High to Low" : "Low to High"}
              </SortButton>
            </div>
          </div>
        </Deal>
        <Divider />
        <Grid>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box textAlign="center" style={{ position: "relative" }}>
                <DiscountTag>{product.price.discount} OFF</DiscountTag>
                <Image src={product.detailUrl} alt="product" />
                <Text
                  style={{
                    fontWeight: 200,
                    color: "#2f4858",
                    fontFamily: "Mr Eaves XL Modern",
                  }}
                >
                  {product.title.shortTitle}
                </Text>
                <Text
                  style={{
                    fontWeight: 300,
                    color: "#212121",
                    fontFamily: "Mr Eaves XL Modern",
                  }}
                >
                  Starting From ₹{product.price.cost}
                </Text>
                <Text
                  style={{
                    fontWeight: 100,
                    fontSize: "15px",
                    lineHeight: "15px",
                    color: "#999999",
                    fontFamily: "Mr Eaves XL Modern",
                  }}
                >
                  MRP ₹
                  <span style={{ textDecoration: "line-through" }}>
                    {product.price.mrp}
                  </span>
                </Text>
              </Box>
            </Link>
          ))}
        </Grid>
        <Divider />
      </Component>
    </>
  );
};

export default Product;
