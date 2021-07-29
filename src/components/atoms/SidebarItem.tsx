import { css } from '@emotion/react'
import { SectionItem } from 'hooks/api/useGetSections'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import Text from './Text'

export type SidebarItemProps = {
  sectionItem: SectionItem
  onClick?: (sectionItem: SectionItem) => void
}

function SidebarItem({ sectionItem, onClick }: SidebarItemProps) {
  const { order, title, urlSlug } = sectionItem
  const router = useRouter()
  const courseName = router.query.courseName

  return (
    <li
      css={linkStyle(router.query.sectionName === urlSlug)}
      onClick={() => onClick?.(sectionItem)}
    >
      <Link href={`/course/${courseName}/${urlSlug}`}>
        <Text
          css={animationStyle}
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
        >
          {order}. {title}
        </Text>
      </Link>
    </li>
  )
}

const linkStyle = (active: boolean) => css`
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  color: #9696a4;
  font-weight: bold;
  ${active &&
  css`
    color: #3ac8e8;
  `}
`

const animationStyle = css`
  &:hover {
    transform: scale(1.05);
  }
`

export default SidebarItem
