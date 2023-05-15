import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
import data from "../datafile.json";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selected, setSelected] = useState(-1); // to keep track of selected item in search result
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (newFilterData) => {
    setSearch(newFilterData);
    alert("You searched for " + newFilterData);
  };

  const handleClose = () => {
    setSearch("");
    setSearchResult([]);
  };

  const handleKeyDown = (e) => {
    if (selected < searchResult.length) {
      if (e.key === "ArrowDown" && selected < 10) {
        setSelected((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && selected > 0) {
        setSelected((prev) => prev - 1);
      } else if (e.key === "Enter" && selected >= 0) {
        onSearch(searchResult[selected].random);
        setSearchResult([]);
      } else {
        setSelected(0);
      }
    }
  };
  useEffect(() => {
    // using use effect to  get data from local mock data
    if (search !== "") {
      const newFilterData = data.filter((element) => {
        return element.random.toLowerCase().includes(search.toLowerCase());
      });
      setSearchResult(newFilterData);
    } else {
      setSearchResult([]);
    }
  }, [search]);
  return (
    <section className="search_section">
      <div className="search_input_div">
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
          value={search}
          onKeyDown={handleKeyDown}
        />
        <div className="search_icon">
          {
            // if search is empty then close icon will not be shown
            search === "" ? <SearchIcon /> : <CloseIcon onClick={handleClose} />
          }
        </div>
      </div>
      <div className="search_result">
        {searchResult.slice(0, 10).map((data, index) => {
          return (
            <p
              key={index}
              target="_blank"
              className={
                selected === index
                  ? "search_suggestion_line active"
                  : "search_suggestion_line"
              }
              onClick={() => onSearch(data.random)}
            >
              {data.random}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default SearchBar;
