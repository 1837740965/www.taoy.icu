import InlineBlog from '@/components/InlineBlog'
import YearBlock from '@/components/YearBlock'
export default function Blog() {
  const blogs = Array.from(
    { length: 6 },
    (_, index) => `Post with Photo ${index + 1}`
  )
  return (
    <div>
      <YearBlock year={2022}>
        {blogs.map((blog) => (
          <InlineBlog title={blog} date={new Date()} key={blog} />
        ))}
      </YearBlock>
      <YearBlock year={2021}>
        {blogs.map((blog) => (
          <InlineBlog title={blog} date={new Date()} key={blog} />
        ))}
      </YearBlock>
    </div>
  )
}
