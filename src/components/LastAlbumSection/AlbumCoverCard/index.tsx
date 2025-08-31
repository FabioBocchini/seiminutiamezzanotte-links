import { cn } from '@/utils/cn'
import Image from 'next/image'

export const AlbumCoverCard = () => {
  return (
    <div className={cn('')}>
      <Image
        alt="album cover front"
        src="/assets/clarissa-cover-front.jpg"
        width={480}
        height={480}
      />
    </div>
  )
}
