import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faQq } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import JumpLink from '@/components/JumpLink'

type LinkIconProps = {
  href: string
  icon: React.ReactNode
}

const LinkIcons: LinkIconProps[] = [
  {
    href: 'tencent://message/?uin=1837740965&Site=&Menu=yes',
    icon: <FontAwesomeIcon icon={faQq} />
  },
  {
    href: 'https://github.com/1837740965',
    icon: <FontAwesomeIcon icon={faGithub} />
  },
  {
    href: 'mailto:olaysunju@163.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />
  }
]

export default function Concat() {
  return (
    <ul className="inline-flex">
      {LinkIcons.map((linkIcon) => (
        <li className="px-2" key={linkIcon.href}>
          <JumpLink href={linkIcon.href} className="text-gray-600">
            {linkIcon.icon}
          </JumpLink>
        </li>
      ))}
    </ul>
  )
}
