import { Background } from '@/components/Layout/Background'
import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'
import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <Background>
        <Header />
        <div className={cn('pt-[50px] pb-[70px] min-h-full flex flex-col')}>
          {children}
        </div>
        <Footer />
      </Background>
    </div>
  )
}
