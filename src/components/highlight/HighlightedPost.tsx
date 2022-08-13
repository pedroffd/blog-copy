// const newUsers = users.filter(user => user !== 2);

/* import { CardPost } from '@/types/CardPost'; */

import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar/Avatar';
import cardData from '@/data/cardData';

const HighlightedPost = () => {
  const highlight = cardData.filter((cd) => cd.isHighlighted);
  const { title, category, description, imgSrc, href, authorAvatar } =
    highlight[0];
  return (
    <div className="flex flex-row max-w-screen-lg mx-auto px-6">
      <div
        className={`${
          imgSrc && 'h-full'
        } relative overflow-hidden border-1 border-gray-200 border-opacity-60 bg-gray-100`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-[18px] object-cover object-center md:h-36 lg:h-48"
                width={500}
                height={420}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="rounded-[18px] object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
      </div>
      <div className="pt-4 pl-6 pb-14 pr-6">
        <p className="pb-3 text-md font-s text-blue-300">{category}</p>
        <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-4 max-w-none text-gray-600">
          {description.substring(description, 111)}...
        </p>

        <Avatar
          authorAvatar={authorAvatar}
          authorName="Julius Verne"
          date="Jul 21, 2021"
        />
      </div>
    </div>
  );
};

export { HighlightedPost };
