interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode
}

export default function JumpLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm text-blue-400 font-bold px-1"
    >
      {children}
    </a>
  )
}
