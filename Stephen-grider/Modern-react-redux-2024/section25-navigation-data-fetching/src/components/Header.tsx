import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div>
      <Link to="/packages/react">NPM registery</Link>;
    </div>
  );
};

export default Header;
