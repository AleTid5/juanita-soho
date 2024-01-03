import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ExploreNearbyType } from 'types';

type SearchBarMobileProps = {
  exploreNearby: ExploreNearbyType[];
  searchPage?: boolean;
};

const SearchBarMobile = ({ searchPage }: SearchBarMobileProps) => {
  const bookNow = () => window.open('https://airbnb.com/h/juanita-soho', '_blank');

  return (
    <div className="container block w-full md:hidden">
      <div className="relative flex items-center justify-center h-12 bg-gray-100 rounded-full">
        {searchPage && (
          <Link
            href="/"
            className="absolute p-2 duration-300 bg-white rounded-full shadow-md left-1 active:scale-90"
          >
            <ChevronLeftIcon className="h-5" />
          </Link>
        )}
        <button
          className="flex items-center justify-center w-full h-full mx-11"
          onClick={bookNow}
        >
          <CalendarIcon className="h-5 mr-1 text-primary" />
          <span className="text-sm font-medium tracking-wide">Book now</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBarMobile;
