import React from 'react'
import { Download,InboxIcon } from 'lucide-react'



export const Header = () => {

  return (
    <div className='bg-white p-6 flex flex-col gap-4 justify-between items-center shadow-md'>
        <h1 className='text-2xl font-bold'>Amirudheen Shareif</h1>
        <div className='flex gap-2 justify-between items-center'>
            <div className='flex items-center gap-3 px-4 py-2 border-1 rounded-md bg-[#16A34A] text-[#ffffff] shadow-md cursor-pointer'>
                <Download className='h-5 w-5' />
                <p className='text-sm'>Resume</p>
            </div>
            <div className='flex items-center gap-3 px-4 py-2 border-1 rounded-md border-[#16A34A] text-[#16A34A] bg-[#ffffff] shadow-md cursor-pointer'>
                <InboxIcon className='h-5 w-5'/>
                <p className='text-sm'>Contact</p>
            </div>
        </div>
    </div>
  )
}
