import React from 'react';
import cx from 'classnames';
import Button from '../Button/Button';

const CardActionButton = ({ className }: { className?: string }) => {
  const classes = cx('bg-primary-500 text-white hover:bg-primary-300 hover:text-primary-700', className);
  return (
    <Button onClick={() => {}} className={classes}>
      Book Now
    </Button>
  );
};

export default CardActionButton;
