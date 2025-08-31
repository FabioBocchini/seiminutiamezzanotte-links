import { AlbumCoverCard } from '@/components/LastAlbumSection/AlbumCoverCard'
import { ListenNowButton } from '@/components/LastAlbumSection/ListenNowButton'
import { Section } from '@/components/common/Section'
import { cn } from '@/utils/cn'

export const LastAlbumSection = () => {
  return (
    <Section>
      <div
        className={cn(
          'flex flex-row justify-center items-center gap-20 mt-12 mb-32',
        )}
      >
        <AlbumCoverCard />
        <ListenNowButton />
      </div>
    </Section>
  )
}
