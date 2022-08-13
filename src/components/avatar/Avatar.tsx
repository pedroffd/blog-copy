/* import Link from 'next/link'; */
import Image from 'next/image';

interface IAvatarProps {
  authorAvatar: string;
  authorName: string;
  date?: string;
  lPadding?: string;
}

const Avatar = (props: IAvatarProps) => (
  <div
    className={`flex items-center pt-2 pb-1 pr-4 avatar-group ${
      props.lPadding ? props.lPadding : ' pl-6'
    }`}
  >
    <div className="avatar">
      {' '}
      <Image
        className="rounded-full"
        width={35}
        height={35}
        src={props.authorAvatar}
        alt="Rounded avatar"
      />
    </div>
    <div className="text-xs font-s antialiased grid p-2">
      {/*  <Link
        href={props.authorAvatar}
        className="leading-6 text-primary-500 hover:text-primary-400"
        aria-label={`Link to ${props.authorAvatar}`}
      > */}
      <span className="font-bold">{props.authorName}</span>
      {/*   </Link> */}
      <span className="text-gray-600 text-xs">{props.date}</span>
    </div>
  </div>
);

export { Avatar };
