import { PropsWithChildren } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useDataContext } from 'hooks/useDataContext';
import { formatGuests, formatRangeDate } from 'utils';

type AppSearchOptionWrapperMobileProps = PropsWithChildren<any> & {
  title: string;
  handleOnBack: () => void;
  haveNavigation: boolean;
};

const AppSearchOptionWrapperMobile = ({
  title,
  children,
  handleOnBack,
  haveNavigation,
}: AppSearchOptionWrapperMobileProps) => {
  const [{ checkIn, checkOut, guests }] = useDataContext();

  return (
    <div className={`${haveNavigation && 'mb-16'} px-4 py-6 bg-white rounded-t-2xl`}>
      <div className="flex items-center mb-5 h-7">
        <button
          className="absolute p-[5px] border rounded-full border-gray-200"
          onClick={handleOnBack}
        >
          <ChevronLeftIcon className="h-6 " />
        </button>
        <div className="flex flex-col justify-center w-full text-center">
          <h3 className="font-medium">{title}</h3>
          {checkIn && checkOut && (
            <span className="text-xs text-gray-300">
              {formatRangeDate(checkIn, checkOut)}
              {formatGuests(guests) ? ` • ${formatGuests(guests)}` : ''}
            </span>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppSearchOptionWrapperMobile;
