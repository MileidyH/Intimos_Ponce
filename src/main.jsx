import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import All from './pages/All'
import Lingerie from './pages/Lingerie'
import Swin from './pages/Swin'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Admin from './pages/Admin'
import "./components/UpLoadFile.css"
import UpLoadFile from './components/UpLoadFile'
import UpLoadSwin from './components/UpLoadSwin'
import UpLoadOthers from './components/UpLoadOthers'
import NewCollection from './pages/NewCollection'
import UpLoadNew from './components/UpLoadNew'



let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path :'/todo',
    element: <All />
  },
  {
    path: '/lenceria',
    element: <Lingerie />
  },
  {
    path: '/vestidos',
    element: <Swin />
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path:'/lenceriaAdmi',
    element: <UpLoadFile />
  }, 
  {
    path: 'vestidosAdmi',
    element: <UpLoadSwin />
  },
  {
    path: '/todoAdmi',
    element: <UpLoadOthers />
  },
  {
    path: '/new-collection',
    element: <NewCollection />
  },
  {
    path: '/newAdmin',
    element: <UpLoadNew />
  }

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} /> 
  </StrictMode>,
)
