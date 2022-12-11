import moment from 'moment'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string
  date: string | Date
}

export default function InlineBlog({ title, date }: Props) {
  return (
    <div className="[&:not(last)]:mb-10">
      <a href="#">
        <h1 className="text-lg font-semibold hover:text-blue-500 transition-all">
          {title}
        </h1>
      </a>
      <div className="text-sm text-slate-400">
        {moment(date).format('dddd MMMM DD, YYYY')}
      </div>
    </div>
  )
}
