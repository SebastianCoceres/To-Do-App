import React from "react";
import "./TodoSearch.css";
import icon from "../../assets/icons/search-white.png";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="searchBox">
      <button className="searchBox__icon" type="button">
        <img src={icon} alt="" />
      </button>
      <input
        className="searchBox__input"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchChange}
      />
    </div>
  );
}

export { TodoSearch };
