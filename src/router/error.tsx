import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl italic mb-10">本站还在完善中...</h1>
      <div
        className="text-sm text-blue-400 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="align-middle" />
        返回上一页
      </div>
    </div>
  )
}
