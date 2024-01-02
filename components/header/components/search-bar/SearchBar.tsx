import React, { FocusEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import SearchOptionButton from '@/components/search-option-button';
import DateRange from '@/components/date-range';
import Counter from '@/components/counter';
import SearchOptionWrapper from '@/components/search-option-wrapper';
import { useDataContext } from 'hooks/useDataContext';
import { DATA_ACTION_TYPES } from 'context/actionTypes';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { formatCheckDate, formatGuests } from 'utils';

enum SearchMenu {
  LOCATION = 'location',
  CHECK_IN = 'checkIn',
  CHECK_OUT = 'checkOut',
  GUESTS = 'guests',
}

type SearchBarProps = {
  isActiveHeader: boolean;
  searchPage?: boolean;
  closeSearch?: () => void;
};

const AppSearchBar = ({ isActiveHeader, closeSearch, searchPage }: SearchBarProps) => {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState<SearchMenu | null>(null);
  // data
  const [{ location, checkIn, checkOut, guests }, dispatch] = useDataContext();
  // handler
  const handleOnBlur = (event?: FocusEvent<HTMLElement>) => {
    const { relatedTarget } = event || {};
    if (!relatedTarget) {
      setSearchMenu(null);
      return;
    }
    const relatedTargetClassList = Array.from((relatedTarget as Element)?.classList);
    const result = relatedTargetClassList.some((className) => {
      const prefix = ['rdr', 'btn'];
      if (prefix.includes(className.slice(0, 3))) return true;
    });
    if (!result) setSearchMenu(null);
  };

  const resetDate = () => {
    dispatch({
      type: DATA_ACTION_TYPES.RESET_DATES,
    });
    handleOnBlur();
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location) {
      setSearchMenu(SearchMenu.LOCATION);
      return;
    }
    if (searchPage) closeSearch();
    setSearchMenu(null);

    router.push({
      pathname: '/search',
      query: {
        location,
        checkIn: checkIn?.toISOString(),
        checkOut: checkOut?.toISOString(),
        guests: JSON.stringify(guests),
      },
    });
  };

  const dateRangeStyle =
    'left-4 right-4 searchbar:left-auto searchbar:right-1/2 searchbar:translate-x-1/2 searchbar:w-[850px]';

  return (
    <>
      <div className={`${isActiveHeader ? 'visible' : 'invisible'} px-4`}>
        <div
          className={`${
            !isActiveHeader && 'translate-y-[-75px] transform scale-50 opacity-0 z-[100]'
          } max-w-[850px] mx-auto mt-2 rounded-full bg-white border border-gray-200 duration-300 hidden md:flex`}
        >
          <form
            action="/search"
            className="grid-cols-[auto,auto,0.8fr] grid flex-grow"
            onSubmit={handleOnSubmit}
          >
            <SearchOptionButton
              separator
              title="Check in"
              placeholder="Add dates"
              active={searchMenu === SearchMenu.CHECK_IN}
              value={formatCheckDate(checkIn)}
              onFocus={() => setSearchMenu(SearchMenu.CHECK_IN)}
              onBlur={handleOnBlur}
              onClear={resetDate}
            >
              <SearchOptionWrapper className={dateRangeStyle}>
                {searchMenu === SearchMenu.CHECK_IN && <DateRange />}
              </SearchOptionWrapper>
            </SearchOptionButton>
            <SearchOptionButton
              separator
              title="Check out"
              placeholder="Add dates"
              active={searchMenu === SearchMenu.CHECK_OUT}
              value={formatCheckDate(checkOut)}
              onFocus={() => setSearchMenu(SearchMenu.CHECK_OUT)}
              onBlur={handleOnBlur}
              onClear={resetDate}
            >
              <SearchOptionWrapper className={dateRangeStyle}>
                {searchMenu === SearchMenu.CHECK_OUT && <DateRange />}
              </SearchOptionWrapper>
            </SearchOptionButton>
            <SearchOptionButton
              relative
              withSearch
              title="Guests"
              placeholder="Add guests"
              active={searchMenu === SearchMenu.GUESTS}
              value={formatGuests(guests)}
              onFocus={() => setSearchMenu(SearchMenu.GUESTS)}
              onBlur={handleOnBlur}
              onClear={() => {
                dispatch({ type: DATA_ACTION_TYPES.RESET_GUESTS });
                handleOnBlur();
              }}
              isSearch={!!searchMenu}
              onSearch={() => setSearchMenu(SearchMenu.LOCATION)}
            >
              <SearchOptionWrapper className="right-0 w-96">
                <div>
                  <div className="flex py-4 border-b border-gray-200 border-opacity-70">
                    <div className="flex-grow">
                      <h2 className="font-medium">Adults</h2>
                      <p className="text-sm leading-4 text-gray-300">Ages 13 or above</p>
                    </div>
                    <Counter
                      value={guests.adults}
                      maxValue={16}
                      onIncrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.INCREASE_ADULTS })
                      }
                      onDecrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.DECREASE_ADULTS })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex py-4 border-b border-gray-200 border-opacity-70">
                    <div className="flex-grow">
                      <h2 className="font-medium">Children</h2>
                      <p className="text-sm leading-4 text-gray-300">Ages 2-12</p>
                    </div>
                    <Counter
                      value={guests.children}
                      maxValue={5}
                      onIncrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.INCREASE_CHILDREN })
                      }
                      onDecrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.DECREASE_CHILDREN })
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex py-4">
                    <div className="flex-grow">
                      <h2 className="font-medium">Infants</h2>
                      <p className="text-sm leading-4 text-gray-300">Under 2</p>
                    </div>
                    <Counter
                      value={guests.infants}
                      maxValue={5}
                      onIncrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.INCREASE_INFANTS })
                      }
                      onDecrease={() =>
                        dispatch({ type: DATA_ACTION_TYPES.DECREASE_INFANTS })
                      }
                    />
                  </div>
                </div>
              </SearchOptionWrapper>
            </SearchOptionButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppSearchBar;
