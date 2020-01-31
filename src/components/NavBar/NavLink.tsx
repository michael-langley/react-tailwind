import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  htmlAttributes?: { [key: string]: any };
}

const NavLink = (props: Props) => {
  const { children, className, href, htmlAttributes } = props;
  const classes = cx('block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800', className);
  return (
    <a href={href} className={classes} {...htmlAttributes}>
      {children}
    </a>
  );
};

export default NavLink;
