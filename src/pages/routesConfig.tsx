import React from 'react';

export interface RouteConfig {
  exact: boolean;
  path: string;
  component: any;
}

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: '/manage-profile',
    component: React.lazy(() => import('./manage-profile/ManageProfile'))
  },
  {
    exact: true,
    path: '/create-tour',
    component: React.lazy(() => import('./create-tour/CreateTour'))
  },
  {
    exact: true,
    path: '/manage-tour',
    component: React.lazy(() => import('./manage-tour/ManageTour'))
  }
];
