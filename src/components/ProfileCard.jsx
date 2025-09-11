import React from 'react'
import profileImg from '../assets/images/profile-pic.webp'
import {Github, Linkedin, Download} from 'lucide-react'



export const ProfileCard = () => {


  return (
    <div className='m-3 sm:m-6 p-3 sm:p-6 rounded-xl border-b-4 border-green-700 shadow-md flex flex-col gap-6 justify-center items-center bg-white'>
        <div className='w-[250px] h-[250px] flex justify-between items-center'>
            <img className='rounded-md' src={profileImg} alt="" />
        </div>
        <h2 className='text-2xl font-bold text-[#111827]'>Full Stack Developer</h2>
        <p className='text-center text-base'>Driven by curiosity and a constant urge to learn, with a focus on turning ideas into working products that create value.</p>
         <div className='flex flex-col gap-2'>
          <a href='https://github.com/amirudheenshareif' className='flex items-center gap-3 w-[200px] py-2 px-14 border cursor-pointer rounded-md border-[#16A34A] text-[#16A34A] bg-[#ffffff] shadow-md'>
                <Github className='h-5 w-5'/>
                <span className='text-sm' >GitHub</span>
            </a>
             <a href="https://www.linkedin.com/in/amirudheenshareif/" className='flex items-center gap-3 w-[200px] py-2 px-14 border rounded-md border-[#16A34A] text-[#16A34A] bg-[#ffffff] shadow-md cursor-pointer'>
                <Linkedin className='h-5 w-5'/>
                <span className='text-sm'>LinkedIn</span>
            </a>
             <a href="/Amirudheen_Shareif__CV.pdf"
                download="Amirudheen_Shareif_CV.pdf"
                className='flex items-center justify-center gap-3 w-[200px] py-2 border-1 rounded-md bg-[#16A34A] text-[#ffffff] shadow-md cursor-pointer'>
                <Download className='h-5 w-5'/>
                <p className='text-sm'>Download Resume</p>
            </a>
         </div>
    </div>
  )
}
