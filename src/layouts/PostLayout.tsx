import LogoBar from '../ui/LogoBar'
import W from './W'

interface Props {
  title: string
  children?: React.ReactNode
}

export default function PostLayout({ children, title }: Props) {
  return (
    <W>
      <LogoBar title={title} />
      <main className="markdown-body h-screen">{children}</main>
    </W>
  )
}
