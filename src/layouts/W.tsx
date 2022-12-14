import Navbar from '@/ui/Navbar'
import clsx from 'clsx'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode
}

export default function W({ children, className, ...rest }: Props) {
  return (
    <section className={clsx('p-10 md:p-20', className)} {...rest}>
      <div className="flex flex-col max-w-[600px] min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-40prem)] mx-auto">
        {children}
      </div>
    </section>
  )
}
