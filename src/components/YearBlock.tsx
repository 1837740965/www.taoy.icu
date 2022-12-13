interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  year: number
  children?: React.ReactNode
}

export default function YearBlock({ year, children }: Props) {
  return (
    <div className="relative [&:not(last)]:mb-16">
      <div className="-z-10 absolute left-0 top-0 text-9xl text-gray-100 font-bold">
        {year}
      </div>
      {children}
    </div>
  )
}
