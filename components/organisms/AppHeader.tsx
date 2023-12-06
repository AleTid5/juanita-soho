import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo, { EAppLogo } from '@/components/atoms/AppLogo';
import AppSearchBar from '@/components/molecules/AppSearchBar';
import AppHeaderOption from '@/components/atoms/AppHeaderOption';
import AppSearchBarMobile from '@/components/molecules/AppSearchBarMobile';
import { Bars4Icon, GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import type { IExploreNearby } from 'types';
import { formatGuests, formatRangeDate } from 'utils';
import { Activities } from '../../constants/activities';

type AppHeaderProps = {
  exploreNearby?: IExploreNearby[];
  searchPage?: boolean;
  query?: any;
};

const AppHeader = ({ exploreNearby, searchPage, query }: AppHeaderProps) => {
  const [isSnapTop, setIsSnapTop] = useState<boolean>(!searchPage);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(!searchPage);
  const [activeMenu, setActiveMenu] = useState<Activities | null>(
    Activities.PLACES_TO_STAY
  );

  const handleOnScroll = () => {
    const position = window.scrollY;
    if (position >= 50) {
      setIsSnapTop(false);
      setIsActiveSearch(false);
    } else {
      setIsSnapTop(true);
      setIsActiveSearch(true);
    }
  };

  const headerBehavior = () => {
    let style = [];
    if (!isSnapTop) style.push('bg-white shadow-lg');
    if (!isActiveSearch) style.push('h-[86px] pb-5');
    if (isActiveSearch) style.push('pb-8');
    return style.join(' ');
  };

  useEffect(() => {
    if (!searchPage) {
      window.addEventListener('scroll', handleOnScroll);
    }
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
              <AppLogo
                className="hidden xl:block"
                isSnap={isSnapTop}
                type={EAppLogo.TEXT}
              />
              <AppLogo
                className="block xl:hidden"
                isSnap={isSnapTop}
                type={EAppLogo.LOGO}
              />
            </Link>
          </div>
          <button
            className={`${
              isActiveSearch && 'scale-[1.33] translate-y-[75px] opacity-0 z-[-50]'
            } ${
              searchPage ? 'pl-3' : 'pl-6'
            } relative flex items-center h-12 pr-2 mx-auto text-left transform bg-white border border-gray-200 rounded-full shadow-md cursor-pointer min-w-[320px] hover:shadow-lg md:absolute left-24 lg:left-auto lg:right-1/2 lg:translate-x-1/2 duration-200`}
            onClick={() => setIsActiveSearch(true)}
          >
            {searchPage ? (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                <span className="px-4 py-1 border-r border-gay-200">
                  {query.location || (
                    <span className="font-normal text-gray-300">Location</span>
                  )}
                </span>
                <span className="px-4 py-1 border-r border-gay-200">
                  {formatRangeDate(query.checkIn, query.checkOut) || (
                    <span className="font-normal text-gray-300">Add dates</span>
                  )}
                </span>
                <span className="px-4 py-1">
                  {formatGuests(query.guests, { noInfants: true }) || (
                    <span className="font-normal text-gray-300">Add guests</span>
                  )}
                </span>
              </span>
            ) : (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                Start your search
              </span>
            )}
            <MagnifyingGlassIcon className="h-8 p-2 ml-3 text-white rounded-full bg-primary" />
          </button>
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
              Become a host
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
            <button className="flex items-center pl-3 pr-1 bg-white border border-gray-200 rounded-full h-11 hover:shadow-md">
              <Bars4Icon className="h-5 mr-2 text-gray-300" />
              <UserCircleIcon className="h-10 text-gray-300" />
            </button>
          </div>
        </div>
        <AppSearchBar
          isActiveHeader={isActiveSearch}
          searchPage={searchPage}
          closeSearch={() => setIsActiveSearch(false)}
        />
        <AppSearchBarMobile exploreNearby={exploreNearby || []} searchPage={searchPage} />
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

export default AppHeader;
