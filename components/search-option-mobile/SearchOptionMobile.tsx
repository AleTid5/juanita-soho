import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchOptionWrapperMobile from '@/components/search-option-wrapper-mobile';
import DateRange from '@/components/date-range';
import Counter from '@/components/counter';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useDataContext } from 'hooks/useDataContext';
import { DATA_ACTION_TYPES } from 'context/actionTypes';

type AppSearchOptionMobileProps = {
  active: boolean;
  onClose: () => void;
};

const SearchOptionMobile = ({ active, onClose }: AppSearchOptionMobileProps) => {
  const stepName = ['When will you be there?', "Who's coming?"];
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  const [{ checkIn, checkOut, guests }, dispatch] = useDataContext();

  return (
    <div
      className={`${
        active ? 'visible opacity-100' : 'invisible opacity-0'
      } z-50 fixed flex-col justify-end inset-0 bg-gradient-to-r from-[#70019d] to-[#be0181] flex items-end duration-200`}
    >
      <div
        className={`${
          active ? 'translate-y-0' : 'translate-y-full'
        } fixed bottom-0 left-0 right-0 duration-700 w-full`}
      >
        <h2 className="w-full px-4 py-3 text-2xl font-medium text-white">
          {stepName[step - 1]}
        </h2>
        <SearchOptionWrapperMobile
          haveNavigation={step !== 1}
          handleOnBack={() => {
            setStep((prev) => prev - 1);
            if (step === 1) {
              dispatch({ type: DATA_ACTION_TYPES.SET_LOCATION, payload: '' });
              setStep(1);
              onClose();
            }
            if (step === 2) dispatch({ type: DATA_ACTION_TYPES.RESET_DATES });
            if (step === 3) dispatch({ type: DATA_ACTION_TYPES.RESET_GUESTS });
          }}
        >
          {step === 1 && <Step1 handleOnNext={() => setStep((s) => s + 1)} />}
          {step === 2 && (
            <Step2
              handleOnNext={() => {
                router.push({
                  pathname: '/search',
                  query: {
                    checkIn: checkIn?.toISOString(),
                    checkOut: checkOut?.toISOString(),
                    guests: JSON.stringify(guests),
                  },
                });
                dispatch({ type: DATA_ACTION_TYPES.RESET_DATES });
                dispatch({ type: DATA_ACTION_TYPES.RESET_GUESTS });
                dispatch({ type: DATA_ACTION_TYPES.SET_LOCATION, payload: '' });
                setStep(1);
                onClose();
              }}
            />
          )}
        </SearchOptionWrapperMobile>
      </div>
    </div>
  );
};

const Step1 = ({ handleOnNext }) => {
  const [{ checkIn, checkOut }, dispatch] = useDataContext();
  return (
    <>
      <div className="overflow-y-auto text-center ">
        <DateRange months={1} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 grid items-center grid-cols-2 p-4 text-lg bg-white border-t border-gray-200 gap-x-4">
        <span
          className="px-4 py-3 text-base text-center text-gray-500 underline duration-300 border border-gray-200 rounded-lg active:scale-95"
          onClick={() => {
            if (checkIn && checkOut) {
              dispatch({ type: DATA_ACTION_TYPES.RESET_DATES });
            } else {
              handleOnNext();
            }
          }}
        >
          {checkIn && checkOut ? 'Clear' : 'Skip'}
        </span>
        <button
          disabled={!(checkIn && checkOut)}
          className={`${
            checkIn && checkOut ? 'bg-gray-500' : 'bg-gray-200'
          } px-4 py-3 text-white rounded-lg text-base active:scale-95 duration-300`}
          onClick={handleOnNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

const Step2 = ({ handleOnNext }) => {
  const [{ guests }, dispatch] = useDataContext();
  return (
    <>
      <div>
        <div className="flex py-4 border-b border-gray-200 border-opacity-70">
          <div className="flex-grow">
            <h2 className="font-medium">Adults</h2>
            <p className="text-sm leading-4 text-gray-300">Ages 13 or above</p>
          </div>
          <Counter
            value={guests.adults}
            maxValue={16}
            onIncrease={() => dispatch({ type: DATA_ACTION_TYPES.INCREASE_ADULTS })}
            onDecrease={() => dispatch({ type: DATA_ACTION_TYPES.DECREASE_ADULTS })}
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
            onIncrease={() => dispatch({ type: DATA_ACTION_TYPES.INCREASE_CHILDREN })}
            onDecrease={() => dispatch({ type: DATA_ACTION_TYPES.DECREASE_CHILDREN })}
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
            onIncrease={() => dispatch({ type: DATA_ACTION_TYPES.INCREASE_INFANTS })}
            onDecrease={() => dispatch({ type: DATA_ACTION_TYPES.DECREASE_INFANTS })}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 grid items-center grid-cols-2 p-4 text-lg bg-white border-t border-gray-200 gap-x-4">
        {Object.values(guests).reduce((acc: number, curr: number) => acc + curr) ? (
          <span
            className="px-4 py-3 text-base text-center text-gray-500 underline duration-300 border border-gray-200 rounded-lg active:scale-95"
            onClick={() => dispatch({ type: DATA_ACTION_TYPES.RESET_GUESTS })}
          >
            Clear
          </span>
        ) : (
          <span></span>
        )}
        <button
          className="flex items-center justify-center px-4 py-3 text-base text-white duration-300 rounded-lg bg-primary active:scale-95"
          onClick={handleOnNext}
        >
          <MagnifyingGlassIcon className="h-4 mr-1" />
          Search
        </button>
      </div>
    </>
  );
};

export default SearchOptionMobile;
