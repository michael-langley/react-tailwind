import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import NavLink from './NavLink';
import DropdownNavLink from './DropdownNavLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <header className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex px-4 py-2 items-center justify-between sm:p-0'>
        <div>
          <svg className='text-white fill-current h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z' />
          </svg>
        </div>

        <div className='sm:hidden'>
          <button
            type='button'
            className='block text-gray-200 hover:text-primary-300 focus:text-primary-300 active:text-primary-300 active:outline-none focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className='fill-current h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              {isOpen && (
                <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
              )}
              {!isOpen && (
                <path
                  className='heroicon-ui'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Listen to the isOpen handler on mobile .. on desktop display it */}
      <nav className={`text-sm ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <div className='px-2 pt-2 pb-4 sm:flex sm:p-0'>
          <NavLink href='#'>Example Link</NavLink>
          <NavLink href='#' className='sm:mt-0 sm:ml-2'>
            Link Ex
          </NavLink>
          <NavLink href='#' className='sm:mt-0 sm:ml-2'>
            Profile
          </NavLink>

          <Dropdown className='hidden sm:block sm:ml-2' />
        </div>

        <div className='px-4 py-5 border-t border-gray-700 sm:hidden'>
          <div className='flex items-center'>
            <img
              className='h-8 w-8 rounded-full object-cover border-2 border-gray-600 '
              src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=912&q=80'
              alt='Avatar'
            />
            <span className='ml-3 font-semibold text-white'>John Doe</span>
          </div>

          <div className='mt-3'>
            <DropdownNavLink href='#'>Account Settings</DropdownNavLink>
            <DropdownNavLink href='#' className='mt-2'>
              Support
            </DropdownNavLink>
            <DropdownNavLink href='#' className='mt-2'>
              Sign Out
            </DropdownNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
