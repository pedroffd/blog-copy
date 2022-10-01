import { ReactNode } from 'react';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Services',
    href: 'https://next-auth.js.org/configuration/callbacks#sign-in-callback',
  },
  {
    label: 'Creative Studio',
    href: 'https://www.youtube.com/watch?v=OE4IupjQjzE&t=1176',
  },
  {
    label: 'Blog',
    href: 'https://nextjs.org/docs/api-reference/next.config.js/basepath',
  },
  {
    label: 'About Us',
    href: 'https://bobbyhadz.com/blog/typescript-binding-element-implicitly-has-an-any-type#:~:text=The%20error%20%22Binding%20element%20implicitly,functions%20and%20in%20class%20methods.',
  },
];

const LOGGED_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'New post',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/create`,
  },
];

const NavbarThreeColumns = (props: INavbarProps) => {
  const { data: session } = useSession();
  return (
    <div
      className="flex flex-wrap justify-between items-center"
      id="NavbarThreeColumns"
    >
      {/* left items */}
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      {/* middle items */}
      {!session && (
        <div className="flex flex-row">
          {NAV_ITEMS.map((navItem) => (
            <ul key={navItem.label} className="bg-gray-100 p-6">
              <Link href={navItem.href ?? '#'}>
                <a>{navItem.label}</a>
              </Link>
            </ul>
          ))}
        </div>
      )}
      {session && (
        <div className="flex flex-row">
          {LOGGED_NAV_ITEMS.map((navItem) => (
            <ul key={navItem.label} className="bg-gray-100 p-6">
              <Link href={navItem.href ?? '#'}>
                <a>{navItem.label}</a>
              </Link>
            </ul>
          ))}
        </div>
      )}
      {/* right items */}
      <nav>
        <ul className="navbar flex items-center font-medium text-xl text-gray-800">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(first-child)) {
            @apply mt-0;
          }
          .navbar :global(li:not(last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarThreeColumns };
