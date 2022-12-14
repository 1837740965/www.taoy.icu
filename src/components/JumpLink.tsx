import clsx from 'clsx'

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode
}

export default function JumpLink({
  href,
  children,
  className,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx('text-blue-400 px-1', className)}
      {...rest}
    >
      {children}
    </a>
  )
}
