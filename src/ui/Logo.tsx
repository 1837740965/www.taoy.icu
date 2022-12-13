import clsx from 'clsx'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function Logo({ className, ...rest }: Props) {
  return (
    <div {...rest} className={clsx('inline-block', className)}>
      <h1 className="flex justify-between text-xl font-bold">
        <span>砂</span>
        <span>絮</span>
        <span>糖</span>
      </h1>
      <div className="text-xs font-bold">SHAXUTANG</div>
    </div>
  )
}
