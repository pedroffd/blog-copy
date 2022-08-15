// const newUsers = users.filter(user => user !== 2);

/* import { CardPost } from '@/types/CardPost'; */

import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar/Avatar';
import cardData from '@/data/cardData';

const HighlightedPost = () => {
  const highlight = cardData.filter((cd) => cd.isHighlighted);
  const { title, description, imgSrc, href, authorAvatar } = highlight[0];
  return (
    <div className="flex flex-row max-w-screen-lg mx-auto px-6">
      <div>
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-[18px] object-cover object-center"
                width={1080}
                height={950}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="rounded-[18px] object-cover object-center"
              width={1080}
              height={950}
            />
          ))}
      </div>
      <div className="pt-4 pl-9 pr-6">
        <p className="pb-3 text-md  text-blue-300">Technology</p>
        <h2 className="mb-3 text-4xl font-semibold leading-10 tracking-normal">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-4 max-w-none text-gray-600 pt-8">
          {description.substring(description, 172)}...
        </p>
        <div className="pt-2 bottom-0">
          <Avatar
            authorAvatar={authorAvatar}
            authorName="Julius Verne"
            date="Jul 21, 2021"
            lPadding="0"
            size={45}
          />
        </div>
      </div>
    </div>
  );
};

export { HighlightedPost };
