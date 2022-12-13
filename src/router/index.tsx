import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Error from './error'
import HomeLayout from '@/layouts/HomeLayout'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Photos from '@/pages/Photos'
import Hello from '@/posts/hello'
import W from '@/layouts/W'

/**
 * 导航栏路由
 */
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

/**
 * 博客页面路由
 */
const postsRoutes: RouteObject[] = [
  {
    path: '/blogs',
    element: <Hello />
  }
]

const router = createBrowserRouter([
  {
    path: '',
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <HomeLayout>
            <Outlet />
          </HomeLayout>
        ),
        children: navRoutes
      },
      ...postsRoutes
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
