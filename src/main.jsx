import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/home'
import Shop from './components/shop/shop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/app/app'
import About from './components/about/about'
import ProductPage from './components/shop/productPage/productPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop/:productId',
        element: <ProductPage />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
