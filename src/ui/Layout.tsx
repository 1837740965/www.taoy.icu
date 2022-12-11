import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { navRoutes } from '@/router'
import Logo from './Logo'
import logo from '@/assets/logo.png'
import Concat from './Concat'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode
}

const titleMeta: Record<string, string | React.ReactNode> = {
  '/': <Logo />
}

export default function Layout({ children, className, ...rest }: Props) {
  const location = useLocation()

  const [title, setTitle] = useState<string | React.ReactNode>()

  useEffect(() => {
    if (titleMeta.hasOwnProperty(location.pathname)) {
      setTitle(titleMeta[location.pathname])
    } else {
      const route = navRoutes.find(
        (route) => `/${route.path}` === location.pathname
      )
      route && setTitle(route?.title)
    }
  }, [location])

  return (
    <section className={clsx('p-10 md:p-20', className)} {...rest}>
      <div className="flex flex-col max-w-[600px] min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-160px)] mx-auto">
        <header>
          <div className="w-12 h-12 rounded-full overflow-hidden mb-6">
            <img src={logo} alt="avatar" className="object-cover" />
          </div>
          <div className="mb-6">
            {typeof title === 'string' ? (
              <h1 className="text-2xl font-bold">{title}</h1>
            ) : (
              title
            )}
          </div>
          <nav>
            <ul className="flex">
              {navRoutes.map((navRoute) => (
                <li
                  className="[&:not(last)]:pr-4 font-semibold"
                  key={navRoute.path}
                >
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
      </div>
    </section>
  )
}
