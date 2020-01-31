import React from 'react';
import cx from 'classnames';
import DropdownLink from './DropdownLink';
import AvatarButton from '../Button/AvatarButton';
import OverlayBackdrop from '../Button/OverlayBackdrop';

interface Props {
  className?: string;
}

const Dropdown = (props: Props) => {
  const { className = '' } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const classes = cx('relative', className);

  React.useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={classes}>
      {/* 
        In the above div Relative styling is needed here so that the dropdown menu below can be 
        absolute positioned against it, otherwise it would keep looking up the tree
        for the nearest element with relative positioning

        In the below button, relative styling is needed for the z-index to take effect
        z-index does not get applied to static positioned element
        */}

      <AvatarButton
        buttonClassName='block relative z-10'
        onClick={() => setIsOpen(!isOpen)}
        imageAlt='Dog Avatar'
        imageSrc='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=912&q=80'
      />

      {isOpen && <OverlayBackdrop onClick={() => setIsOpen(false)} />}
      {isOpen && (
        <div className='absolute right-0 w-48 mt-1 py-2 bg-white rounded-lg shadow-md'>
          <DropdownLink href='#'>Account Settings</DropdownLink>
          <DropdownLink href='#'>Support</DropdownLink>
          <DropdownLink href='#'>Sign Out</DropdownLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
