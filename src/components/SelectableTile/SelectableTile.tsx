import React from 'react';
import { compose } from 'ramda';
import { Topography } from '../../patterns';

interface Props {
  active?: boolean;
  onClick?: (newActiveState: boolean) => void;
}

const SelectableTile = (props: Props) => {
  const { active = false, onClick = () => {} } = props;
  const [isActive, setIsActive] = React.useState<boolean>(active);

  React.useEffect(() => {
    setIsActive(active);
  }, [active]);

  const toggleIsActive = (act: boolean) => {
    setIsActive(!act);
    return !act;
  };

  return (
    <div
      className={`w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-lg shadow-sm px-6 py-4 cursor-pointer focus:outline-none focus:shadow-outline-green hover:shadow-lg ${
        isActive ? 'bg-green-100 shadow-outline-green' : ''
      }`}
      onClick={() => compose(onClick, toggleIsActive)(isActive)}
    >
      <div className='flex justify-between items-center mt-1 sm:mt-2'>
        <h1 className='uppercase text-sm sm:text-base tracking-wide text-gray-700 font-bold'>Expert</h1>
        {isActive && (
          <div className='ml-5 flex items-center'>
            <svg className='w-4 h-4' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M31.144 171.84A99.502 99.502 0 1 1 171.841 31.145c37.708 39.043 37.17 101.103-1.212 139.485-38.382 38.381-100.442 38.92-139.485 1.212z'
                fill='#97EBDC'
              />
              <path fill='#00836D' d='M66.667 89.453l22.885 22.985 42.786-42.786 13.93 14.13-56.716 56.517-36.816-36.816 13.93-14.13z' />
            </svg>
          </div>
        )}
      </div>

      <div className='font-semibold text-gray-800 mt-2 sm:mt-3'>
        <span className='text-2xl sm:text-5xl mr-1 sm:mr-2'>12</span>
        <span className='text-base sm:text-2xl'>GB</span>
      </div>

      <div className='mt-1'>
        <span className='sm:text-xl text-gray-700'>$</span>
        <span className='sm:text-xl font-semibold text-gray-700'>300</span>
        <span className='text-xs sm:text-base text-gray-700 mx-1'>/</span>
        <span className='sm:text-lg text-gray-700'>mo</span>
      </div>
    </div>
  );
};

export default SelectableTile;
