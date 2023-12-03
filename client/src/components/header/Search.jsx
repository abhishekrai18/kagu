import React, { useState } from "react";
import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Searchcontainer = styled(Box)`
  background: white;
  width: 45%;
  border: 1px solid;
  border-color: gray;
  border-radius: 2px;
  margin-left: 70px;
  display: flex;
  font-size: unset;
`;

const SearchIconbox = styled(Box)`
  display: flex;
  color: gray;
  padding: 5px;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Searchcontainer>
      <InputSearchBase
        placeholder="Search"
        value={searchInput}
        onChange={handleSearchInputChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            // Use Link to navigate to the product page with dynamic search input
            event.preventDefault(); // Prevent the default form submission
          }
        }}
      />
      <SearchIconbox>
        <Link to={`/product/${searchInput}`} style={{ textDecoration: "none" }}>
          <SearchIcon />
        </Link>
      </SearchIconbox>
    </Searchcontainer>
  );
};

export default Search;
