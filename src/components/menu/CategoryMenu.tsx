// import { useState } from 'react';

import Link from 'next/link';

// eslint-disable-next-line import/no-named-as-default
import { Section } from '@/layout/Section';

interface NavItem {
  label: string;
  href?: string;
}

const MENU_ITEMS: Array<NavItem> = [
  {
    label: 'All',
    href: '/route',
  },
  {
    label: 'Fantasy',
    href: '/route',
  },
  {
    label: 'NFT',
    href: 'https://opensea.io/',
  },
  {
    label: 'Abstra',
    href: '/route',
  },
  {
    label: 'Anime',
    href: 'https://mangalivre.net/',
  },
  {
    label: 'Games',
    href: '/route',
  },
  {
    label: 'Technology',
    href: '/route',
  },
];

const TestComponent = () => {
  // const [selected, setSelected] = useState<boolean>(false);
  return (
    <Section yPadding="py-6">
      <nav
        className="z-0 relative"
        x-data="{open:false,menu:false, lokasi:false}"
      >
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative lg:justify-center flex items-center h-16 ">
              <div className="flex items-center px-2 lg:px-0">
                <div className="hidden lg:block lg:ml-2">
                  <div className="flex items-center justify-center">
                    {MENU_ITEMS.map((menuItem) => (
                      <ul key={menuItem.href}>
                        <Link href={menuItem.href ?? '#'}>
                          <a
                            href="#"
                            className="ml-2 px-4 py-2 rounded-full text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-mainBlue-100 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                          >
                            {menuItem.label}
                          </a>
                        </Link>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden md:hidden">
                {/*  
                will be used as context filtered menu in the future
                 <button
                  className="inline-flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                  onClick={() => setSelected(!selected)}
                >
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2DAAFC"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2DAAFC"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
          {/*  <div x-show="menu" className="block lg:hidden md:hidden">
            {selected && (
              <div className="px-2 pt-2 pb-3">
                {MENU_ITEMS.map((menuItem) => (
                  <ul key={menuItem.href}>
                    <Link href={menuItem.href ?? '#'}>
                      <a className="mt-1 px-3 py-2 rounded-full text-gray-800 font-semibold font-medium hover:bg-mainBlue-100 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                        {menuItem.label}
                      </a>
                    </Link>
                  </ul>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </nav>
    </Section>
  );
};

export default TestComponent;
