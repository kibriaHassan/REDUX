import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../RootLayout/Root';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';


export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop},
      { path: 'cart', Component: Cart}
    ],
  },
]);