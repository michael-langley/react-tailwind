import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from '../components/Dropdown/Dropdown';

export default {
  title: 'Dropdown',
};

export const dropDown = () => (
  <div className='bg-gray-300 p-12'>
    <Dropdown />
  </div>
);
