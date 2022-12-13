import Logo from './Logo'
import { navRoutes } from '@/router'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center h-20">
      <Logo />
      <ul className="flex-auto flex justify-end">
        {navRoutes.map((route) => (
          <li key={route.path} className="[&:not(first)]:pl-10">
            <Link
              to={route.path as string}
              className="text-gray-600 hover:text-black"
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
