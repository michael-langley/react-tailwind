import React from 'react';
import { action } from '@storybook/addon-actions';
import NavBar from '../components/NavBar/NavBar';

export default {
  title: 'NavBar',
};

export const navBar = () => (
  <div className='bg-gray-100 p-12'>
    <NavBar />
  </div>
);
