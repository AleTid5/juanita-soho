import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

type AppCounterProps = {
  value: number;
  maxValue: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const Counter = ({ value, maxValue, onIncrease, onDecrease }: AppCounterProps) => (
  <div className="flex items-center">
    <span
      role="button"
      tabIndex={0}
      className={`${
        !value && 'cursor-not-allowed opacity-40'
      } btnDecrease p-[7px] border border-gray-300 rounded-full border-opacity-70 inline-block outline-none active:scale-90 duration-300`}
      onClick={onDecrease}
    >
      <MinusIcon className="h-4 text-gray-300" />
    </span>
    <span className="inline-block text-center w-9">{value}</span>
    <span
      role="button"
      tabIndex={0}
      className={`${
        value === maxValue && 'cursor-not-allowed opacity-40'
      } btnIncrease p-[7px] border border-gray-300 rounded-full border-opacity-70 inline-block outline-none active:scale-90 duration-300`}
      onClick={onIncrease}
    >
      <PlusIcon className="h-4 text-gray-300" />
    </span>
  </div>
);

export default Counter;
