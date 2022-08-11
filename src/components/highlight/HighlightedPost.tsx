// const newUsers = users.filter(user => user !== 2);

import cardData from '@/data/cardData';

import CardComponent from '../card/CardComponent';

const HighlightedPost = () => {
  const highlight = cardData.filter((cd) => cd.isHighlighted);
  return (
    <CardComponent
      key={highlight[0].title}
      title={highlight[0].title}
      category="NFT"
      description={highlight[0].description}
      imgSrc={highlight[0].imgSrc}
      href={highlight[0].href}
      authorAvatar={highlight[0].authorAvatar}
    />
  );
};

export { HighlightedPost };
