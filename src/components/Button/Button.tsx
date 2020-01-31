import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, onClick, className }: Props): JSX.Element => {
  const classes: string = cx(
    'py-2 px-4 uppercase tracking-wide rounded-lg bg-gray-200 cursor-pointer shadow-md focus:outline-none focus:shadow-outline',
    className,
  );

  return (
    <button className={classes} onClick={onClick} type='button'>
      {children}
    </button>
  );
};

export default Button;
