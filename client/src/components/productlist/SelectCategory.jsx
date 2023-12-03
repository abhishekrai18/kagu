import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const SelectCategory = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem>
            <Link to={`/product/Sofa`}>Sofa</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Bed`}>Bed</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Chair`}>Chair</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Table`}>Table</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Wardrobe`}>Wardrobe</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Bookshelf`}>Bookshelf</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product/Lighting`}>Lighting</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/product`}>More</Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;
