import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  htmlAttributes?: { [key: string]: any };
}

const DropdownNavLink = (props: Props) => {
  const { children, className, href, htmlAttributes } = props;
  const classes = cx('block text-gray-300 hover:text-white', className);

  return (
    <a href={href} className={classes} {...htmlAttributes}>
      {children}
    </a>
  );
};

export default DropdownNavLink;
