import { cn } from '@/utils/cn'
import { Section } from '../common/Section'

export const ListenNowSection = () => {
  return (
    <Section>
      <div className={cn('flex justify-center items-center')}>
        <iframe
          className={cn('flex-1 max-w-[80%] h-[80vh]')}
          title="spotify"
          src="https://open.spotify.com/embed/artist/5vUtnUpkbA4o7L2Kx5PRio?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </Section>
  )
}
