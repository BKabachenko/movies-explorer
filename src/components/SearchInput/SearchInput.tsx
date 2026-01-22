import { type KeyboardEvent, useState } from 'react';

import searchIcon from '../../assets/icons/search.svg?react';
import Icon from '../Icon/Icon';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
  initialValue?: string;
}

const SearchInput = ({ onSearch, initialValue = '' }: SearchInputProps) => {
  const [inputText, setInputText] = useState(initialValue);

  const handleSearch = () => {
    const trimmed = inputText.trim();
    onSearch(trimmed);

    if (trimmed.length > 0) {
      setInputText(trimmed);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex w-full flex-row content-center items-center justify-center gap-4'>
      <input
        className='peer focus-visible:shadow-inset w-full rounded-lg border-2 border-indigo-300 bg-gray-100 p-1 px-3 transition-all focus-visible:border-indigo-600 focus-visible:bg-white focus-visible:inset-shadow-sm focus-visible:inset-shadow-indigo-200 focus-visible:outline-none'
        type='text'
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputText}
        placeholder='Type title of movie'
      />
      <button
        className='flex cursor-pointer flex-row items-center gap-1 rounded-lg border border-indigo-200 p-1 px-3 peer-focus-visible:bg-indigo-400 transition peer-focus-visible:text-white'
        type='button'
        onClick={handleSearch}
      >
        <Icon src={searchIcon} className=''/>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
