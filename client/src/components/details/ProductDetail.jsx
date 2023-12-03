import { Typography, Box, styled } from "@mui/material";
import { Divider } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ProductDetail = ({ product }) => {

  return (
    <>
      <Typography style={{marginBottom: "15px", fontSize: "28px", lineHeight: "28px"}}>{product.title.longTitle}</Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Divider style={{ margin: "20px" }} />
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          NONE
        </Typography>
      </SmallText>
      <Divider style={{ margin: "20px" }} />
      <Typography style={{ fontSize: "18px", marginBottom: "10px" }}>
        Product Description
      </Typography>
      <Typography style={{ fontSize: "16px", marginBottom: "10px" }}>
        {product.description}
      </Typography>
    </>
  );
};

export default ProductDetail;
