import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [stateProject,setSateProject] = useState({
    selectedProjectId: undefined,
    project: [] 
  });
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
  console.log(stateProject);
  let content;

  if(stateProject.selectedProjectId === null) {
    content = <NewProject onAdd={handleProjectAdd} onCancel={handleCancelAddProject}/>
  }else if(stateProject.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartProject={handleProjectAdd} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar onStartProject={handleStartProjectAdd} project={stateProject.project}/>
    {content}
    </main>
  );
}

export default App;
