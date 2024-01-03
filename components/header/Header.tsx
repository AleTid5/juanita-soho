import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import MainLogoText from 'assets/icons/MainLogoText';
import type { ExploreNearbyType } from 'types';
import SearchBarMobile from './components/search-bar-mobile';

type AppHeaderProps = {
  exploreNearby?: ExploreNearbyType[];
  searchPage?: boolean;
  query?: any;
};

const Header = ({ exploreNearby, searchPage, query }: AppHeaderProps) => {
  const [isSnapTop, setIsSnapTop] = useState<boolean>(!searchPage);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(!searchPage);

  const handleOnScroll = () => {
    const position = window.scrollY;
    setIsSnapTop(position < 50);
    setIsActiveSearch(position < 50);
  };

  const headerBehavior = () => {
    let style = [];
    if (!isSnapTop) style.push('bg-white shadow-lg');
    if (!isActiveSearch) style.push('h-[86px] pb-5');
    if (isActiveSearch) style.push('pb-8');
    return style.join(' ');
  };

  useEffect(() => {
    if (!searchPage) window.addEventListener('scroll', handleOnScroll);

    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [searchPage]);

  return (
    <>
      <header
        className={`${headerBehavior()} z-50 fixed top-0 w-full pt-5 duration-300 md:transition-none`}
      >
        <div
          className={`${
            searchPage ? 'px-7' : 'container'
          } hidden md:grid md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr] items-start`}
        >
          <div className="flex items-center h-12">
            <Link href="/">
              <MainLogoText className="block" primaryColor={!isSnapTop} />
            </Link>
          </div>
          <div className="order-last col-span-2 xl:order-none xl:col-span-1" />
          <div className="flex items-center justify-end">
            <Link
              href="/"
              className={`${
                isSnapTop
                  ? 'text-white hover:bg-white hover:bg-opacity-10'
                  : 'text-gray-500 hover:bg-gray-100 '
              } flex items-center h-10 px-4 rounded-full font-medium tracking-wide text-sm`}
            >
              Book now
            </Link>
            <Link
              href="/"
              className={`${
                isSnapTop
                  ? 'text-white hover:bg-white hover:bg-opacity-10'
                  : 'text-gray-500 hover:bg-gray-100 '
              } flex items-center h-10 px-3 mr-1 rounded-full `}
            >
              <GlobeAltIcon className="h-5" />
            </Link>
          </div>
        </div>
        <SearchBarMobile exploreNearby={exploreNearby || []} searchPage={searchPage} />
      </header>
      {isActiveSearch && !isSnapTop && (
        <div
          className="fixed inset-0 z-40 bg-transparent-black"
          onClick={() => setIsActiveSearch(false)}
        />
      )}
    </>
  );
};

export default Header;
