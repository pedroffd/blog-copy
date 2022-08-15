import cardData from '@/data/cardData';

import CardComponent from './CardComponent';

const CardList = () => {
  return (
    <div className="-m-4 flex flex-wrap justify-center max-w-screen-lg mx-auto px-2 py-10">
      {cardData.map((cd) => (
        <CardComponent
          key={cd.title}
          title={cd.title}
          category="NFT"
          description={cd.description}
          imgSrc={cd.imgSrc}
          href={cd.href}
          authorAvatar={cd.authorAvatar}
        />
      ))}
    </div>
  );
};

export default CardList;
