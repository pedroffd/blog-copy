import { AppConfig } from '../utils/AppConfig';
import Image from 'next/image';
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image
        alt="logo.svg"
        src="https://cdn.worldvectorlogo.com/logos/parse.svg"
        quality={100}
        objectFit="cover"
        width={size}
        height={size}
      />
      <div className="pl-5">{AppConfig.site_name}</div>
    </span>
  );
};

export { Logo };
