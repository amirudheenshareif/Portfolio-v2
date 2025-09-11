import { Inbox, Linkedin } from 'lucide-react'
import React, { forwardRef } from 'react'

export const Contact = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='bg-white p-3 flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-3 p-4'>
            <h2 className='text-2xl'>Get in Touch</h2>
            <p className='text-slate-400 text-center'>I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!</p>
        </div>
        <div className='flex flex-col items-center gap-2 p-4'>
            <a
              href="mailto:ameeraashique6@gmail.com"
              className='rounded-md w-full flex gap-2 justify-center bg-[#16A34A] text-white p-3 text-center'
              >
                <Inbox />
                Email me
              </a>

              <a
                href="https://linkedin.com/in/amirudheenshareif"
                target="_blank"
                rel="noopener noreferrer"
                className='rounded-md w-full flex gap-2 justify-center border border-[#1ce265] text-[#16A34A] bg-white p-3 text-center'
              >
                <Linkedin />
                LinkedIn
              </a>
        </div>
    </div>
  )
})
