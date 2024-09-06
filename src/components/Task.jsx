import React, { useState } from 'react'
import NewTask from './NewTask'


const Task = ({ task, onAddTask, onDeleteTask }) => {

    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 mb-7'>
                Task
            </h2>
            <NewTask onAddTask={onAddTask} />
            {task.length > 0 && (
                <p className='text-stone-800 mb-4'>
                    This project does not have any task yet.
                </p>
            )}
            {task.length > 0 && (
            <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                {task.map((task) => (
                    <li key={task.id} className='flex justify-between my-4'>
                            <span>{task.text}</span>
                            <button className='text-stone-700 hover:text-red-500' onClick={() => onDeleteTask(task.id)}>
                                Clear
                            </button>
                    </li>
                ))}
            </ul>
            )}

        </section>
    )
}

export default Task