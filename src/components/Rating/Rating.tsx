import React from 'react';
import cx from 'classnames';

interface Props {
  rating: number;
  reviewCount: number;
  starFilledColorClassName?: string;
  starUnfilledColorClassName?: string;
  starSvgClassName?: string;
  reviewCountClassName?: string;
  containerClassName?: string;
}

const Rating = (props: Props) => {
  const {
    rating,
    reviewCount,
    containerClassName,
    starSvgClassName,
    starFilledColorClassName,
    starUnfilledColorClassName,
    reviewCountClassName,
  } = props;

  const containerClass = cx('flex items-center', containerClassName);
  const starSvgClass = cx('h-3 w-3 fill-current', starSvgClassName);
  const reviewCountClass = cx('ml-1 text-gray-600 text-xs uppercase font-semibold tracking-wide', reviewCountClassName);

  return (
    <div className={containerClass}>
      {[...Array(5)].map((_: number, i: number) => {
        return (
          <svg
            key={i}
            className={`${starSvgClass} ${
              i < rating ? starFilledColorClassName || 'text-primary-400' : starUnfilledColorClassName || 'text-gray-400'
            }`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
          </svg>
        );
      })}
      <span className={reviewCountClass}>({reviewCount})</span>
    </div>
  );
};

export default Rating;
