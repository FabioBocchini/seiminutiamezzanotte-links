import { HeaderMenu } from '@/components/Layout/Header/HeaderMenu'
import { cn } from '@/utils/cn'

export const Header = () => {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 bg-smam-gray text-smam-white h-[50px] shadow-b shadow-smam-dark-gray',
      )}
    >
      <div
        className={cn('flex flex-row h-full items-center justify-between px-3')}
      >
        <a
          className={cn('flex flex-row items-center h-full text-2xl')}
          href="/public"
        >
          <b>SM</b>A<b>M</b>
        </a>
        <HeaderMenu />
      </div>
    </div>
  )
}
