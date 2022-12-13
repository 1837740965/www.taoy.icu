import LogoBar from '../ui/LogoBar'
import W from './W'

export default function PostLayout({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <W>
      <LogoBar title="Post with Photo 1" />
      <main className="markdown-body h-screen">{children}</main>
    </W>
  )
}
