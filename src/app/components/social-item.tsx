import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type TProps = {
  icon: string | StaticImport
  href: string
  alt: string
  size?: number
}

const SocialItem: React.FC<TProps> = ({ icon, href, alt, size }) => {
  return (
    <a className="flex p-3 md:p-5 m-5 cursor-pointer" href={href}>
      <Image src={icon} alt={alt} height={size || 48} width={size || 48}/>
    </a>
  )
}

export default SocialItem
