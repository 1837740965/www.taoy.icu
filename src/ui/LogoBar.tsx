import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'

interface Props {
  title?: string | React.ReactNode
  exact?: React.ReactNode
}

export default function LogoBar({ title, exact }: Props) {
  return (
    <>
      <div className="w-12 h-12 rounded-full overflow-hidden mb-6">
        <Link to="/">
          <img src={logo} alt="avatar" className="object-cover" />
        </Link>
      </div>
      <div className="mb-6">
        {typeof title === 'string' ? (
          <h1 className="text-2xl font-bold">{title}</h1>
        ) : (
          title
        )}
      </div>
      {exact && exact}
    </>
  )
}
