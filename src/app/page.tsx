import React from 'react'
import clsx from 'clsx'
import SocialItem from '@/app/components/social-item'
import instagramIcon from '../../public/socialIcons/instagram.svg'
import youtubeIcon from '../../public/socialIcons/youtube.svg'
import spotifyIcon from '../../public/socialIcons/spotify.svg'
import appleMusicIcon from '../../public/socialIcons/apple_music.svg'
import emailIcon from '../../public/socialIcons/email.svg'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col px-0 overflow-y-hidden ">
      <div
        className={clsx(
          'bg-better-white pl-2 sm:pl-10 flex flex-col justify-center pt-28',
          'font-extrabold text-5xl sm:text-8xl lg:text-9xl'
        )}
      >
        SEI
        <br />
        MINUTI
        <br />
        A
        <br />
      </div>
      <div className="bg-better-black text-better-white">
        <div className="pl-2 sm:pl-10 font-extrabold text-5xl sm:text-8xl lg:text-9xl">MEZZANOTTE</div>
        <div className={clsx('flex flex-row flex-wrap items-center justify-center w-full lg:gap-20 py-28 md:py-28')}>
          <SocialItem icon={instagramIcon} alt="instagram" href="https://www.instagram.com/seiminutiamezzanotte/" />
          <SocialItem
            icon={youtubeIcon}
            alt="youtube"
            size={52}
            href="https://www.youtube.com/@seiminutiamezzanotte3062"
          />
          <SocialItem icon={spotifyIcon} alt="spotify" href="https://open.spotify.com/artist/5vUtnUpkbA4o7L2Kx5PRio" />
          <SocialItem
            icon={appleMusicIcon}
            alt="apple music"
            size={40}
            href="https://music.apple.com/it/artist/sei-minuti-a-mezzanotte/1647865478"
          />
          <SocialItem icon={emailIcon} alt="email" href="mailto:seiminuti.official@gmail.com" />
        </div>
      </div>
      <div className="flex flex-col min-w-full px-10 py-5 bg-better-black text-better-white">
        <div className="flex justify-center text-xs font-thin">@ 2023 FABIO BOCCHINI</div>
      </div>
    </div>
  )
}

export default Home
