import { Copyright } from '@/components/Layout/Footer/Copyright'
import { SocialLink } from '@/components/Layout/Footer/SocialLink'
import { cn } from '@/utils/cn'
import appleMusicIcon from '../../../../public/icons/appleMusic.svg'
import emailIcon from '../../../../public/icons/email.svg'
import facebookIcon from '../../../../public/icons/facebook.svg'
import instagramIcon from '../../../../public/icons/instagram.svg'
import spotifyIcon from '../../../../public/icons/spotify.svg'
import tiktokIcon from '../../../../public/icons/tiktok.svg'
import youtubeIcon from '../../../../public/icons/youtube.svg'

const links = [
  {
    icon: appleMusicIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'appleMusic',
  },
  {
    icon: emailIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'email',
  },
  {
    icon: facebookIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'facebook',
  },
  {
    icon: instagramIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'instagram',
  },
  {
    icon: spotifyIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'spotify',
  },
  {
    icon: tiktokIcon,
    href: 'https://www.tiktok.com/@sei.minuti.a.mezz?_t=8qhrMSFXO9g&_r=1',
    alt: 'tiktok',
  },
  {
    icon: youtubeIcon,
    href: 'https://www.facebook.com/share/p/NTpTMNL1aivHJWHg/',
    alt: 'youtube',
  },
]

export const Footer = () => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 bg-smam-gray text-smam-white h-[50px] shadow-t shadow-black',
        'flex flex-row justify-around items-center',
      )}
    >
      <Copyright />
      <div className={cn('flex flex-row')}>
        {links.map(link => (
          <div
            key={link.href}
            className={cn(
              'p-1 w-[40px] h-[40px] flex justify-center items-center',
            )}
          >
            <SocialLink {...link} />
          </div>
        ))}
      </div>
    </div>
  )
}
