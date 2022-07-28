import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

import { searchClient } from '@/config/searchClient';

const SearchBoxComponent = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="blog-copy">
      <SearchBox />
    </InstantSearch>
  );
};

export default SearchBoxComponent;
