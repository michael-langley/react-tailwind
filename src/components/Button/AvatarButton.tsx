import React from 'react';
import cx from 'classnames';

interface Props {
  onClick: () => void;
  buttonClassName?: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  htmlAttributes?: { [key: string]: any };
}

const AvatarButton = (props: Props) => {
  const { onClick, buttonClassName, imageAlt, imageSrc, imageClassName, htmlAttributes } = props;
  const buttonClass = cx(
    'h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white',
    buttonClassName,
  );
  const imageClass = cx('h-full w-full object-cover', imageClassName);

  return (
    <button onClick={onClick} className={buttonClass} {...htmlAttributes}>
      <img className={imageClass} src={imageSrc} alt={imageAlt || 'Avatar'} />
    </button>
  );
};

export default AvatarButton;
