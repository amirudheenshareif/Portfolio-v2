import { Github, Share } from 'lucide-react'
import {projects} from '../data/helper.js'
import React from 'react'

export const Projects = () => {
  return (
    <>
    <h2 className='text-2xl font-bold my-4 text-[#111827] text-center'>Projects</h2>
    <div className='p-3 flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-4'>
        
        {
            projects?.map((project)=> (
        <div key={project.id} className='flex flex-col shadow-lg sm:w-[500px] '>
            <div>
                <img src={project.imgLink} alt="placeholder" className='w-full overflow-hidden rounded-lg opacity-70' />
            </div>
            <div className='p-4 bg-white flex flex-col gap-4 rounded-lg'>
                <p className='font-medium  text-[#111827]'>{project.title}</p>
                <div className='flex gap-2'>
                    <a
                    href={project?.gitHubLink}
                    className='border-1 border-purple-300 p-0.5 rounded-md'>
                        <Github className='w-5 h-5 text-purple-600'/>
                    </a>
                    <a
                    href={project?.liveLink}
                    className='flex items-center border-1 border-green-300 p-0.5 rounded-md'>
                        <Share className='w-6 h-4 text-green-800'/>
                    </a>
                </div>
                <p className='text-slate-600 text-sm'>{project.description}</p>
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
    </>
  )
}
