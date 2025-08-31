import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
  icon: string | StaticImport
  href: string
  alt: string
  size?: number
}

export const SocialLink = ({ icon, href, alt, size }: Props) => {
  return (
    <a className="flex cursor-pointer" href={href}>
      <Image src={icon} alt={alt} height={size || 48} width={size || 48} />
    </a>
  )
}
