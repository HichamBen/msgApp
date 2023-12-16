import { useState } from "react";
import { SearchIcon } from "../icons";

type SearchInputProps = {
  placeholder: string;
};

function SearchInput({ placeholder }: SearchInputProps) {
  const [query, setQuery] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSearchInput = (value: string) => {
    // the Search was contain alphabit characters and number and dashes
    const search = value.trim();
    console.log(search);
    if (!search.match(/^[a-z0-9_ ]*$/i)) {
      setError(
        "The search box admits only alphabetic characters, number and underscores!"
      );
    } else {
      setError(undefined);
      setQuery(query);
    }
  };

  return (
    <div aria-label={placeholder} role="search" className="w-full relative px-4">
      <input
        role="searchbox"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => handleSearchInput(e.target.value)}
        className="inline-block m-auto h-10 pl-4 pr-10 w-full border border-mainBg rounded-lg outline-none outline-offset-0 focus:outline-blueBar text-primaryText bg-mainBg"
      />
      <SearchIcon
        onclick={() => console.log("search")}
        role="button"
        width="28"
        height="28"
        style="absolute top-1.5 right-5 cursor-pointer fill-primaryText hover:fill-blueBar transition-colors duration-300 ease-out"
      />
      {error && (
        <span
          role="note"
          className="text-xs line-clamp-2 bg-red-50 rounded-md mt-1 p-1 text-red-500"
        >
          Note: {error}
        </span>
      )}
    </div>
  );
}

export default SearchInput;
