import React from 'react'
import Button from './Button'


const ProjectsSidebar = ({ onStartProject, project, onSelectedProject, selectedProjectId}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md: text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={onStartProject}>
          + Add Project
        </Button>
      </div>
      <ul>
        {project.map((project) => {
          let cssClasses='w-full px-2 py-1 rounded-sm my-1 text-left text-stone-400 hover:bg-stone-800 hover:text-stone-200'
          if(project.id === selectedProjectId){
            cssClasses+=' bg-stone-800 text-stone-200'
          }else{
            cssClasses+=' text-stone-400'
          }
          return (
            <li key={project.id}>
              <div>
                <button
                  className={cssClasses}
                  onClick={() => onSelectedProject(project.id)}
                >
                  {project.title}
                </button>
              </div>
            </li>
          );
        }
        )}
      </ul>
    </aside>
  )
}

export default ProjectsSidebar