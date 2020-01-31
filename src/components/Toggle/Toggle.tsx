import React from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = React.useState<boolean>(false);
  return (
    <label className='cursor-pointer'>
      <div className='relative'>
        <input type='checkbox' className='hidden' onClick={() => setIsOn(!isOn)} />
        <div
          style={{ transition: 'all 0.3s ease-in-out' }}
          className={`w-12 h-6 rounded-full shadow-inner ${isOn ? 'bg-secondary-500' : 'bg-gray-400'}`}
        ></div>
        <div className='toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0'></div>
      </div>
    </label>
  );
};

export default Toggle;
