import React from 'react';
import AuthProvider from './AuthProvider';
import { Outlet } from 'react-router';
import BaseLayout from '../layouts/BaseLayout';

const Provider = () => {
  return (
    <AuthProvider>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </AuthProvider>
  );
};

export default Provider;
