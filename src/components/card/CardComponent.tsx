/* import { CardPost } from '@/types/CardPost'; */
import { UrlObject } from 'url';

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string | undefined;
  description: any;
  imgSrc: string;
  href: string | UrlObject;
}
const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  href,
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
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
