import React from 'react';

const Input = () => {
  return (
    <div className="relative">
        {/* Fill the height of the div containing the input and icon and then flex and center the SVG */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-6 w-6 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>

        </div>
      <input className='form-input form-input-dark pl-10 placeholder-gray-400' placeholder='Input' onChange={() => {}} />
    </div>
  );
};

export default Input;