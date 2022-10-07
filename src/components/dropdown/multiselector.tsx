import { ChakraProvider } from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';

import { colourOptions } from '../../data/mapData';

const MultiSelect = () => (
  <ChakraProvider>
    <CreatableSelect
      isMulti
      name="colors"
      options={colourOptions}
      placeholder="Category..."
      closeMenuOnSelect={true}
    />
  </ChakraProvider>
);

export default MultiSelect;
