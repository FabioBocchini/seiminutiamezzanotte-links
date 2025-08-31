import { cn } from '@/utils/cn'

export const ListenNowButton = () => {
  return (
    <a
      href="https://linktr.ee/sei_minuti_a_mezzanotte"
      className={cn(
        'border text-smam-white border-smam-white text-5xl p-5',
        'hover:bg-smam-red transition-all',
      )}
    >
      ASCOLTA ORA
    </a>
  )
}
