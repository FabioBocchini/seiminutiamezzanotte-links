import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

export const Section = ({ children }: PropsWithChildren) => {
  return <section className={cn('p-5 h-full flex-1')}>{children}</section>
}
