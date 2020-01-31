import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectableTile from '../components/SelectableTile/SelectableTile';

export default {
  title: 'SelectableTile',
};

export const selectableTile = () => (
  <div className='bg-gray-500 p-12'>
    <SelectableTile onClick={(ns: boolean) => console.log({ ns })} />
  </div>
);
