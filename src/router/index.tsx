import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '@/ui/Layout'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Photos from '@/pages/Photos'

export const navRoutes: (RouteObject & { title: string })[] = [
  {
    title: 'About',
    path: '',
    element: <About />
  },
  {
    title: 'Blog',
    path: 'blog',
    element: <Blog />
  },
  {
    title: 'Photos',
    path: 'photos',
    element: <Photos />
  }
]

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: navRoutes
  }
]

const router = createBrowserRouter(routes)

export default function Router() {
  return <RouterProvider router={router} />
}
