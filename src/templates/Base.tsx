import CategoryMenu from '@/components/menu/CategoryMenu';
import SearchBoxComponent from '@/components/search/SearchBox';
import { Meta } from '@/layout/Meta';

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
    <SearchBoxComponent />
    <CategoryMenu />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
