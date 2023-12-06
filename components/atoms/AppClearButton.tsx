import { XMarkIcon } from '@heroicons/react/24/outline';

type AppClearButtonProps = {
  active: boolean;
  isFocus?: boolean;
  separator?: boolean;
  onClick: () => void;
};

const AppClearButton = ({
  onClick,
  active,
  isFocus = true,
  separator = false,
}: AppClearButtonProps) => {
  return (
    <div className={`${separator && 'border-r border-gray-200'} flex items-center h-8`}>
      <div
        role="button"
        tabIndex={0}
        className={`${
          active && isFocus ? 'opacity-100' : 'opacity-0'
        } flex items-center pr-3`}
        onClick={onClick}
      >
        <XMarkIcon className="h-6 p-1 bg-gray-200 rounded-full bg-opacity-60 hover:bg-opacity-100" />
      </div>
    </div>
  );
};

export default AppClearButton;
