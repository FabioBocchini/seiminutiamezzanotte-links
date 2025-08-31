'use client'

import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'

const menuLinks = [
  { name: 'MUSIC', path: '/' },
  { name: 'LIVE', path: '/live' },
  { name: 'SHOP', path: '/shop' },
]

export const HeaderMenu = () => {
  const pathname = usePathname()

  return (
    <div className={cn('flex gap-5 pr-5 text-s')}>
      {menuLinks.map(link => (
        <a
          key={link.path}
          href={link.path}
          className={cn(
            pathname === link.path && 'underline underline-offset-4',
          )}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
