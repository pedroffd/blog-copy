// eslint-disable-next-line import/no-named-as-default
import CardList from '@/components/card/CardList';
import { HighlightedPost } from '@/components/highlight/HighlightedPost';
import CategoryMenu from '@/components/menu/CategoryMenu';
import SearchBoxComponent from '@/components/search/SearchBox';
import { Meta } from '@/layout/Meta';

import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
/* import { VerticalFeatures } from './VerticalFeatures'; */

const Base = () => (
  <div className="container mx-auto bg-gray-100" id="baseTemplate">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <TopBar />
    <Banner />
    <SearchBoxComponent />
    <CategoryMenu />
    <HighlightedPost />
    <CardList />
    {/* <VerticalFeatures /> */}
    <Footer />
  </div>
);

export { Base };
/* function session(_session: any) {
  throw new Error('Function not implemented.');
}
 */
