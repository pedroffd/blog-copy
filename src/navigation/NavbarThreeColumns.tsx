import { ReactNode } from 'react';

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
    href: '/route',
  },
  {
    label: 'Creative Studio',
    href: '/route',
  },
  {
    label: 'Blog',
    href: '/route',
  },
  {
    label: 'About Us',
    href: '/route',
  },
];

const NavbarThreeColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <div className="flex flex-row">
      {NAV_ITEMS.map((navItem) => (
        <ul key={navItem.label} className="bg-gray-100 p-6">
          <Link href={navItem.href ?? '#'}>
            <a>{navItem.label}</a>
          </Link>
        </ul>
      ))}
    </div>

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

export { NavbarThreeColumns };
