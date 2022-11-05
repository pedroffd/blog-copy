// eslint-disable-next-line import/no-named-as-default
import CardList from '@/components/card/CardList';
import { HighlightedPost } from '@/components/highlight/HighlightedPost';
import CategoryMenu from '@/components/menu/CategoryMenu';
import SearchBoxComponent from '@/components/search/SearchBox';

import { Banner } from './Banner';
import { Footer } from './Footer';
import { TopBar } from './TopBar';

/* import { VerticalFeatures } from './VerticalFeatures'; */

const Base = (data: any) => (
  <div className="container mx-auto bg-gray-100" id="baseTemplate">
    <TopBar />
    <Banner />
    <SearchBoxComponent />
    <CategoryMenu />
    {data.props && <HighlightedPost props={data.props} />}
    <CardList />
    {/* <VerticalFeatures /> */}
    <Footer />
  </div>
);

export { Base };
