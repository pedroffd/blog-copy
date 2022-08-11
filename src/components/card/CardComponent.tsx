/* import { CardPost } from '@/types/CardPost'; */
import { UrlObject } from 'url';

import Image from 'next/image';
import Link from 'next/link';

import { Avatar } from '@/components/avatar/Avatar';

interface CardProps {
  title: string | undefined;
  description: any;
  imgSrc: string;
  href: string | UrlObject;
  authorAvatar: string;
}
const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  href,
  authorAvatar,
}) => {
  // const { id,image, authorName, post, date, category, postUrl, authorAvatar } = props;

  return (
    <div className="group relative p-3 md:w-4/12" style={{ maxWidth: '544px' }}>
      <div className="animate-tilt absolute rounded-lg bg-gradient-to-r from-purple-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div
        className={`${
          imgSrc && 'h-full'
        }  relative overflow-hidden  border-1 border-gray-200 border-opacity-60 bg-white`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className=" rounded-[18px] object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
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
        <div className="pt-6 pl-6 pb-3 pr-6">
          <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight bg-red-500">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-4 max-w-none text-gray-600 bg-blue-300">
            {description.substring(description, 111)}...
          </p>
        </div>
        <Avatar
          authorAvatar={authorAvatar}
          authorName="Julius Verne"
          date="Jul 21, 2021"
        />
      </div>
    </div>
  );
};

export default CardComponent;
