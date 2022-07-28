import { BsSearch } from 'react-icons/bs';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="container mx-auto bg-gray-100">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopBar />
    <Banner />
    <div className="flex flex-row justify-center mx-auto relative bg-gray-800 p-2 rounded-[24px] border-2 border-gray-400 h-20 w-6/12 shadow-lg shadow-gray-500/50">
      <div className="md:h-full">
        <BsSearch
          style={{
            color: 'gray',
            fontSize: '24px',
            marginLeft: '8px',
            verticalAlign: 'baseline',
          }}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 ml-6 placeholder-gray-600 bg-transparent"
        ></input>
      </div>
    </div>
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
