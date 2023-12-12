import React from "react";
import styled from "styled-components";
import InputMain from "../../atoms/Input/InputField";
import { Button } from "../../atoms/Button";
import SearchIcon from "../../atoms/icons/SearchIcon";

const SearchBar = () => {
  return (
    <SearchBarForm>
      {/* <InputMain width="10rem" label="نام یا کد کالا را وارد کنید" /> */}
      <input placeholder="نام یا کد کالا را وارد کنید" />
      <Button type="submit" color="blue">
        <SearchIcon />
      </Button>
    </SearchBarForm>
  );
};

export default SearchBar;

const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  input {
    width: 20rem;
    margin: 0;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    border: 1px solid #89959f;
    border-left: none;
    height: 100%;
    padding: 1rem;

    :active {
      outline: none;
    }
  }
  button {
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
