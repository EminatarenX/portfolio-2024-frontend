import Info from '@/modules/profile/components/info.component'
import Image from 'next/image'
import React, { useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useProfileStore } from '@/stores/profile.store';

export default function Aside() {
    const getProfile = useProfileStore( state => state.getProfile)
    const profile = useProfileStore( state => state.profile)
    useEffect(() => {
      getProfile()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <aside className="flex flex-col w-1/4 px-10 py-10 bg-neutral-900 my-14 rounded-2xl border border-neutral-800 justify-between">
    <div className="flex flex-col gap-5 items-center">
        <div className="bg-gradient-to-br from-neutral-800 to-[#212121] p-4 rounded-[2rem]  ">
            <Image src="/profile.jpeg" alt="Logo" width={500} height={500} className='rounded-full w-full max-h-[120px]'/>
        </div>
        <h1 className="text-white font-semibold text-2xl text-center">{profile?.name || ''}</h1>
        <span className="bg-neutral-800 px-4 py-2 rounded-lg">
            <h2 className="text-white text-xs">{profile?.specialty}</h2>
        </span>
    </div>
    <div className='w-full border-t border-neutral-600'></div>
    <div className="flex flex-col items-center gap-5 ">
        <Info name="correo" type='email' content={profile?.email || ''}/> 
        <Info name="teléfono" type='phone' content={profile?.phone || ''}/>
        <Info name="b-day" type='birthday' content={profile?.birthDay || ''}/>
        <Info name="ubicación" type='location' content={profile?.location || ''} />
    </div>
    <div className='flex justify-center gap-5'>
        <GitHubIcon  sx={{color: 'white'}}/>
        <LinkedInIcon  sx={{color: 'white'}}/>
        <YouTubeIcon sx={{color: 'white'}}/>
    </div>
  </aside>
  )
}
