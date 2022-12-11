import InlineBlog from '@/components/InlineBlog'

export default function Blog() {
  const blogs = Array.from(
    { length: 6 },
    (_, index) => `Post with Photo ${index + 1}`
  )
  return (
    <div>
      {blogs.map((blog) => (
        <InlineBlog title={blog} date={new Date()} key={blog} />
      ))}
    </div>
  )
}
