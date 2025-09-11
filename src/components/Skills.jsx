import React from 'react'
import { skills } from '../data/helper.js'

export const Skills = () => {
  return (
    <div className='p-3 flex flex-col gap-4 rounded-md'>
        <h2 className='text-2xl font-bold text-[111827] text-center'>Skills</h2>
        {skills.map((skill)=> (
            <div className='bg-white px-4 py-6 flex flex-col gap-4' key={skill.id}>
                <h3 className='text-lg font-semibold text-[#1f2937]'>{skill?.category}</h3>
                <div className='flex gap-4 flex-wrap'>
                   {skill?.techs.map((tech,index)=> (
                    <div key={index} className='bg-[#D1FAE5] p-1 rounded-lg'>
                        <p className='text-[#065F46] text-sm'>{tech}</p>
                        </div>
                   ))}
                </div>

            </div>
        ))}

    </div>
  )
}
