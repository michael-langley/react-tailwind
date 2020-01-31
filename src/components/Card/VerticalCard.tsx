import React from 'react';
import Rating from '../Rating/Rating';
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

const VerticalCard = ({ property }: Props) => {
  return (
    <div className='max-w-xs'>
      {/* Weird CSS quirk using relative padding to display "box" in browser */}
      <div className='relative pb-1/2'>
        <img className='absolute h-full w-full object-cover rounded-lg shadow-md' src={property.imageUrl} alt={property.imageAlt} />
      </div>
      {/* Element must be positioned to be placed on top of previously posititioned element. Also z-index is not needed after adding relative position, since element comes after  */}
      <div className='relative px-4 -mt-16'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-baseline'>
            <span className='inline-block bg-primary-200 text-primary-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
              New
            </span>
            <div className='ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide'>
              {property.beds} beds &bull; {property.baths} baths
            </div>
          </div>

          <h4 className='mt-1 font-semibold text-lg leading-tight'>{property.title}</h4>
          <div className='mt-1'>
            {property.formattedPrice} <span className='text-gray-600 text-sm'> / week</span>{' '}
          </div>
          <Rating rating={property.rating} reviewCount={property.reviewCount} />
          <div className='mt-5'>
            <CardActionButton className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
