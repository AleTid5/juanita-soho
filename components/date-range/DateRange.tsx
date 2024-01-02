import { DateRange as Range } from 'react-date-range';
import { DATA_ACTION_TYPES } from 'context/actionTypes';
import { useDataContext } from 'hooks/useDataContext';

type AppDateRangeProps = {
  months?: number;
};

const DateRange = ({ months }: AppDateRangeProps) => {
  const [{ checkIn, checkOut }, dispatch] = useDataContext();

  const selectionRange = {
    startDate: checkIn,
    endDate: checkOut,
    key: 'selection',
  };

  const handleDatePicker = (range) => {
    const { startDate, endDate } = range.selection;
    dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_IN, payload: startDate });
    dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_OUT, payload: endDate });
  };

  return (
    <div className="md:py-4 rounded-3xl">
      <Range
        ranges={[selectionRange]}
        onChange={handleDatePicker}
        months={months || 2}
        direction="horizontal"
        showMonthAndYearPickers={false}
        rangeColors={['#F7F7F7']}
        minDate={new Date()}
        showDateDisplay={false}
        monthDisplayFormat="MMMM YYY"
      />
    </div>
  );
};

export default DateRange;
