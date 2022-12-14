import { NavLink, useLocation } from 'react-router-dom'
import { navRoutes } from '@/router'
import W from './W'
import Concat from '../ui/Concat'
import LogoBar from '../ui/LogoBar'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode
}

export default function HomeLayout({ children, className, ...rest }: Props) {
  const location = useLocation()

  const [title, setTitle] = useState<string | React.ReactNode>()

  useEffect(() => {
    const route = navRoutes.find(
      (route) =>
        `${route.path?.startsWith('/') ? route.path : '/' + route.path}` ===
        location.pathname
    )
    route && setTitle(route?.title)
  }, [location])

  return (
    <W>
      <header>
        <LogoBar
          title={title}
          exact={
            <nav>
              <ul className="flex">
                {navRoutes.map((navRoute) => (
                  <li className="[&:not(last)]:pr-4" key={navRoute.path}>
                    <NavLink
                      to={navRoute.path || ''}
                      className={({ isActive }) =>
                        isActive ? 'text-black' : 'text-gray-400'
                      }
                    >
                      {navRoute.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          }
        />
        <div className="h-[1px] bg-gray-200 my-10"></div>
      </header>
      <main className="flex-auto">{children}</main>
      <footer className="py-10">
        <div className="text-center">
          <div className="mb-4 text-sm text-gray-600">
            Copyright © 2022 My Website, Inc. Built with React Tailwind.
          </div>
          <div className="mb-4">
            <Concat />
          </div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            className="text-sm text-gray-600 hover:text-blue-500 transition-all"
          >
            鄂ICP备2020022052号
          </a>
        </div>
      </footer>
    </W>
  )
}
