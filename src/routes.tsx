import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Account } from './pages/Account'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Products } from './pages/Products'
import { Success } from './pages/Success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Products /> },
      { path: '/sacola', element: <Cart /> },
      { path: '/conta', element: <Account /> },
      { path: '/success', element: <Success /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
