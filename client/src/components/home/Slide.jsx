import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Divider, Typography, Button, styled } from "@mui/material";
import {Link} from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  text-align: center;
`;

const DealText = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
  font-family: "Abhay-Libre Bold";
  line-height: 32px;
`;

const Image = styled("img")({
  widht: "auto",
  height: 300,
});

const Text = styled(Typography)`
  font-size: 16px;
  margin-top: 5px;
`;

const Slide = ({ products }) => {
  return (
    <Component>
      <Deal>
        <DealText>Our Collection</DealText>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.detailUrl} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
      <Divider />
    </Component>
  );
};

export default Slide;
