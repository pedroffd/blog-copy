import cardData from '@/data/cardData';

import CardComponent from './CardComponent';

const CardList = () => {
  return (
    <div
      className="-m-4 flex flex-wrap justify-center max-w-screen-lg mx-auto px-2 py-10"
      id="cardLiss"
    >
      {cardData.map((cd) => (
        <CardComponent
          key={cd.title}
          title={cd.title}
          category="NFT"
          content={cd.content}
          imgSrc={cd.imgSrc}
          postUrl={cd.postUrl}
          authorAvatar={cd.authorAvatar}
        />
      ))}
    </div>
  );
};

export default CardList;
