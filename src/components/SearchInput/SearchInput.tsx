import { useState, type KeyboardEvent } from "react";
import s from "./SearchInput.module.scss";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
  initialValue?: string;
}

const SearchInput = ({ onSearch, initialValue = ""}: SearchInputProps) => {
  const [inputText, setInputText] = useState(initialValue);

  const handleSearch = () => {
    const trimmed = inputText.trim();
    onSearch(trimmed);

    if (trimmed.length > 0) {
      setInputText(trimmed);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
      <div className={s.inputBlock}>
        <input
          className={s.input}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputText}
          placeholder="Type title of movie"
        />
        <button className={s.button} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
  );
};

export default SearchInput;
