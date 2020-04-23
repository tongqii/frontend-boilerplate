import { lazy } from 'react';

export default [
  {
    path: '/about',
    component: lazy(() => import('pages/About')),
  },
  {
    path: '/',
    component: lazy(() => import('pages/Home')),
  },
];
