import React from 'react';
import { action } from '@storybook/addon-actions';
import VerticalCard from '../components/Card/VerticalCard';

export default {
  title: 'VerticalCard',
};

const property = {
  imageUrl: 'https://images.unsplash.com/photo-1566629634983-7b8ba0904920?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
  imageAlt: 'Cool building',
  beds: 3,
  baths: 2,
  title: 'Private room in apartment building',
  priceInCents: 190000,
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
};

export const baseVerticalCard = () => (
  <div className='bg-gray-100'>
    <VerticalCard property={property}></VerticalCard>
  </div>
);
