interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode
}

export default function JumpLink({ href, children }: Props) {
  return (
    <a href={href} target="_blank" className="text-blue-400 px-1">
      {children}
    </a>
  )
}
