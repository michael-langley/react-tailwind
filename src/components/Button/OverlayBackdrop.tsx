import React from 'react';
import cx from 'classnames';

interface Props {
  onClick: () => void;
  className?: string;
  htmlAttributes?: { [key: string]: any };
}

const OverlayBackdrop = (props: Props) => {
  const { onClick, className, htmlAttributes } = props;
  const classes = cx('fixed inset-0 h-full w-full bg-black opacity-25 cursor-default', className);

  return <button onClick={onClick} className={classes} tabIndex={-1} {...htmlAttributes} />;
};

export default OverlayBackdrop;
