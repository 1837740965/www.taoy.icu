import moment from 'moment'
import { Link } from 'react-router-dom'

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
      <Link
        to={
          '/' +
          title
            .split(' ')
            .map((str) => str.toLowerCase())
            .join('-')
            .toString()
        }
      >
        <h1 className="text-lg font-semibold hover:text-blue-500 transition-all">
          {title}
        </h1>
      </Link>
      <div className="text-sm text-slate-400">
        {moment(date).format('dddd MMMM DD, YYYY')}
      </div>
    </div>
  )
}
