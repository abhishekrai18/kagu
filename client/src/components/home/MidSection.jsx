import React from "react";
import { Link } from "react-router-dom";
import { Grid, Divider, Typography, styled, Button } from "@mui/material";

const ImageURL = [
  {
    url: "https://www.ulcdn.net/media/furniture-stores/bangalore/varthur-whitefield/Whitefield-store-mobile.jpg?1683049063",
    text: "Starting With Just ₹13,489",
    link: "/product/Sofa",
  },
  {
    url: "https://www.ulcdn.net/media/furniture-stores/bangalore/jp-nagar/J-P-Nagar-store-mobile.jpg?1683092140",
    text: "Starting With Just ₹19,039",
    link: "/product/Bed",
  },
  {
    url: "https://www.ulcdn.net/media/furniture-stores/mumbai/linking-road/Linking-road_-Mumbai-store-mobile.jpg?1683051673",
    text: "Starting With Just ₹2,995",
    link: "/product/Chair",
  },
];

const Wrapper = styled(Grid)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
  font-family: "Abhay-Libre Bold";
  margin-left: 43vw;
  margin-top: 30px;
  line-height: 32px;
`;

const ImageContainer = styled("div")`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
  z-index: 1;
  border-radius: 5px;
  border: 5px solid transparent;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    border: 5px solid #000;
  }
`;

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  height: "100%",
  borderRadius: "5px",
}));

const ImageText = styled("div")`
  position: absolute;
  padding: 150px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto Regular";
  z-index: 3;
`;

const TextSm = styled(Typography)`
  text-align: center;
`;

const Hr = styled(Divider)`
  height: 40px;
`;

const MidSection = () => {
  const url =
    "https://img.freepik.com/free-vector/beautiful-happy-diwali-festival-sale-banner_1017-21236.jpg?w=826&t=st=1698901117~exp=1698901717~hmac=b3cdc4a71039bc6c0a55cf30d1ed8ca04339c08f08940f255cc27c8fcc8a22ea";

  return (
    <>
      <Text>Exclusive Price</Text>
      <TextSm>
        Buy Furniture Online from our extensive collection of wooden furniture
        units to give your home an elegant touch at affordable prices.
      </TextSm>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {ImageURL.map((image, index) => (
          <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
            <Link to={image.link}>
              <ImageContainer>
                <Image src={image.url} />
                <ImageText>{image.text}</ImageText>
              </ImageContainer>
            </Link>
          </Grid>
        ))}
      </Wrapper>
      <Hr />
      <Link to="/product">
        <Image src={url} />
      </Link>
    </>
  );
};

export default MidSection;
