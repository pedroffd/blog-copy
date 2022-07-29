/* import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

import { searchClient } from '@/config/searchClient'; */
import { connectSearchBox } from 'react-instantsearch-dom';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

const SearchBox = ({ refine }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      refine(debouncedSearchTerm);
    } else {
      refine('');
    }
  }, [debouncedSearchTerm, refine]);

  return (
    /*  <InstantSearch searchClient={searchClient} indexName="blog-copy">
      <SearchBox />
    </InstantSearch> */

    <form role="search">
      <div className="flex  bg-white -mt-12 flex-col mx-auto items-center relative w-5/12 bg-gray-400 rounded-[24px]">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="searchbox"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search..."
          className="border-gray-100 bg-gray-100 placeholder:text-slate-400 text-gray-800 text-sm w-full pl-10 p-4 h-16 rounded-[18px] shadow-lg shadow-gray-500/50 border-1"
        ></input>
      </div>
    </form>
  );
};

const SearchBoxComponent = connectSearchBox(SearchBox);
export default SearchBoxComponent;
