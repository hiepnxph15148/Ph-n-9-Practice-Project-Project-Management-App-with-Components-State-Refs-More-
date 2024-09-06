import React from 'react'
import noProjectImages from '../assets/no-projects.png'
import Button from './Button'
const NoProjectSelected = ({ onStartProject }) => {
    return (
        <div className='mt-24 w-2/3 text-center'>
            <img src={noProjectImages} alt="An empty task list" className='w-16 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className=' text-slate-400 mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartProject}>Create new project</Button>
            </p>
        </div>
    )
}

export default NoProjectSelected