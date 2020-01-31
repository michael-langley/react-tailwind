import React from 'react';
import { action } from '@storybook/addon-actions';
import Toggle from '../components/Toggle/Toggle';

export default {
  title: 'Toggle',
};

export const toggle = () => (
  <div className='bg-gray-500 p-12'>
    <Toggle />
  </div>
);
