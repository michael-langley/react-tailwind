import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input/Input';

export default {
  title: 'Input',
};

export const input = () => (
  <div className='bg-gray-500 p-12'>
    <Input />
  </div>
);
