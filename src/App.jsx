import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [stateProject,setSateProject] = useState({
    selectedProjectId: undefined,
    project: [],
    task:[]
  });
  function handleAddTask(text){
    setSateProject((prevState) =>{
      const TaskId =  Math.random()
      const newTask={
        text: text,
        projectId: prevState.selectedProjectId,
        id:TaskId
      };
      return{
        ...prevState,
        task:[...prevState.task,newTask]
      };
    });
  }
  function handleDeleteTask(id){
    setSateProject((prevState) =>{
      return{
        ...prevState,
        task:prevState.task.filter(
          (task) => task.id!== id),
      };
    });
  }


  function handleSelectedProject(id){
    setSateProject((prevState) =>{
      return{
        ...prevState,
        selectedProjectId:id,
      };
    });
  }

  function handleStartProjectAdd(){
    setSateProject((prevState) =>{
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }
  function handleCancelAddProject(){
    setSateProject((prevState) =>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      };
    });
  }
  function handleDeleteProject(){
    setSateProject((prevState) =>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        project:prevState.project.filter(
          (project) => project.id!== prevState.selectedProjectId
        ),
      };
    });
  }
  
  function handleProjectAdd(projectData){
    setSateProject((prevState) =>{
      const projectId =  Math.random()
      const newProject ={
        ...projectData,
        id:projectId
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        project:[...prevState.project,newProject],
      };
    });
  }
  const selectedProject = stateProject.project.find(
    (project) => project.id === stateProject.selectedProjectId
  );
  // console.log(stateProject);
  let content =  (
  <SelectedProject  
  project={selectedProject}
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  task ={stateProject.task}
  />
  );

  if(stateProject.selectedProjectId === null) {
    content = <NewProject onAdd={handleProjectAdd} onCancel={handleCancelAddProject}/>
  }else if(stateProject.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartProject={handleProjectAdd} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar 
    onStartProject={handleStartProjectAdd} 
    project={stateProject.project}
    onSelectedProject={handleSelectedProject}
    selectedProjectId={stateProject.selectedProjectId}
    />
    {content}
    </main>
  );
}

export default App;
