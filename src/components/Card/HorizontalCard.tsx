import React from 'react';
import Rating from '../Rating/Rating';
import VerticalCard from './VerticalCard';
import CardActionButton from './CardActionButton';

interface Props {
  property: {
    imageUrl: string;
    imageAlt: string;
    beds: number;
    baths: number;
    title: string;
    priceInCents: number;
    formattedPrice: string;
    reviewCount: number;
    rating: number;
  };
}

const HorizontalCard = (props: Props) => {
  const { property } = props;
  return (
    <>
      <div className='sm:hidden'>
        <VerticalCard {...props} />
      </div>

      <div className='hidden sm:block'>
        <div className='flex rounded-lg bg-white shadow-md overflow-hidden max-w-lg'>
          {/* Lefthand side image */}
          <div className='relative w-1/4'>
            <img className='absolute h-full w-full object-cover shadow-md' src={property.imageUrl} alt={property.imageAlt} />
          </div>
          <div className='flex-col w-3/4'>
            <div className='relative px-4 mt-4'>
              <div className='bg-white'>
                <h4 className='font-semibold text-lg leading-tight'>{property.title}</h4>
                <div className='flex items-center'>
                  <Rating rating={property.rating} reviewCount={property.reviewCount} />
                  <div className='ml-4 text-gray-600 text-xs uppercase font-semibold tracking-wide'>
                    {property.beds} beds &bull; {property.baths} baths
                  </div>
                </div>
                <div className='mt-2'>
                  <span className=''>{property.formattedPrice} </span>
                  <span className='text-gray-600 text-sm'> / week</span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-end mt-5 py-2 pr-5'>
              <CardActionButton className='w-5/12 !p-2' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
