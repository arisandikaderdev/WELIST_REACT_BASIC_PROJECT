import Button from "./Button";
import search from "../assets/search.svg";
import { useEffect } from "react";
import { ACTIONTYPE, useDispatcList } from "./ListProvider";
function SearchBar() {
  const dispatch = useDispatcList();
  return (
    <div className="flex items-center gap-4">
      <input
        type="Search"
        className="w-60 rounded-md bg-white px-4 py-1"
        onChange={(e) =>
          dispatch({
            type: ACTIONTYPE.SEARCH,
            text: e.target.value,
          })
        }
      />
      <Button classname="bg-accent">
        <img src={search} alt="search" />
      </Button>
    </div>
  );
}

export default SearchBar;
