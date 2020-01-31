import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  htmlAttributes?: { [key: string]: any };
}

const DropdownLink = (props: Props) => {
  const { children, className, href, htmlAttributes } = props;
  const classes = cx('block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white', className);
  return (
    <a href={href} className={classes} {...htmlAttributes}>
      {children}
    </a>
  );
};

export default DropdownLink;
