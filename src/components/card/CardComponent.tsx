/* import { CardPost } from '@/types/CardPost'; */
import { UrlObject } from 'url';

import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar/Avatar';

interface CardProps {
  title: string | undefined;
  category: string;
  description: any;
  imgSrc: string;
  href: string | UrlObject;
  authorAvatar: string;
}
const CardComponent: React.FC<CardProps> = ({
  title,
  category,
  description,
  imgSrc,
  href,
  authorAvatar,
}) => {
  // const { id,image, authorName, post, date, category, postUrl, authorAvatar } = props;

  return (
    <div
      className="group relative p-3 pb-5 md:w-4/12"
      style={{ maxWidth: '544px' }}
    >
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
                width={544}
                height={400}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="pt-4 pl-6 pb-14 pr-6">
          <p className="pb-3 text-sm font-s text-blue-300 relative">
            {category}
          </p>
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
        </div>
        <div className="absolute inset-x-0 bottom-0">
          {' '}
          <Avatar
            authorAvatar={authorAvatar}
            authorName="Julius Verne"
            date="Jul 21, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
