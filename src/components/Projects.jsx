import { Github, Share } from 'lucide-react'
import {projects} from '../data/helper.js'
import React from 'react'

export const Projects = () => {
  return (
    <div className='p-3 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-[#111827] text-center'>Projects</h2>
        {
            projects?.map((project)=> (
        <div key={project.id} className='flex flex-col shadow-md '>
            <div>
                <img src="https://placehold.co/200x200" alt="placeholder" className='w-full overflow-hidden rounded-lg' />
            </div>
            <div className='p-4 bg-white flex flex-col gap-4 rounded-lg'>
                <p className='font-medium  text-[#111827]'>{project.title}</p>
                <div className='flex gap-2'>
                    <div className='border-1 border-purple-300 p-0.5 rounded-md'>
                        <Github className='w-5 h-5 text-purple-600'/>
                    </div>
                    <div className='flex items-center border-1 border-green-300 p-0.5 rounded-md'>
                        <Share className='w-6 h-4 text-green-800'/>
                    </div>
                </div>
                <p className='text-slate-600 text-sm'>Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration</p>
                <div className='flex gap-2 flex-wrap'>
                     {project?.techs.map((tech,index)=> (
                    <div  key={index} className='bg-[#D1FAE5] p-1 shadow-md rounded-lg'>
                        <p className='text-[#065F46] text-sm'>{tech}</p>
                        </div> 
                   ))}
                    
                 </div>

            </div>
        </div>
            ))
        }
    </div>
  )
}
