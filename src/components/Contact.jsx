import { Inbox, Linkedin } from 'lucide-react'
import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-white p-3 flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-3 p-4'>
            <h2 className='text-2xl'>Get in Touch</h2>
            <p className='text-slate-400 text-center'>I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!</p>
        </div>
        <div className='flex flex-col items-center gap-2 p-4'>
            <button className='rounded-md w-full flex gap-2 justify-center bg-[#16A34A] text-[#ffffff]  p-3'>
                <Inbox/>
                Email me
            </button>
            <button className='rounded-md w-full flex gap-2 justify-center border border-[#1ce265] text-[#16A34A] bg-[#ffffff] p-3'>
                <Linkedin/>
                LinkedIn
            </button>
        </div>
    </div>
  )
}
