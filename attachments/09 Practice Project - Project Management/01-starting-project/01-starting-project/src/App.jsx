import NoProjectsSelected from "./components/NoProjectsSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import SelectedSection from "./components/SelectedSection.jsx";
import TabProjects from "./components/TabProjects.jsx";


function App() {
    const [isSelected, setIsSelected] = useState(false);
    const [isAddingProject, setIsAddingProject] = useState(false);

    const [projects, setProjects] = useState({});
    const [selectedKey, setNewSelectedKey] = useState(null);

    function openProject(titleKey) {
        setIsSelected(true);
    }

    function deleteProject() {
        setIsSelected(false);
        setIsAddingProject(false);
        setNewSelectedKey(null);
    }

    function updateTitleKey(titleKey) {
        setNewSelectedKey(titleKey);
    }

    function addProject() {
        setIsAddingProject(true)
    }


    function updateProject(updatedData) {
        setProjects(updatedData);
    }

    function isSelectedProject(values) {

        values.title === "" ? setIsAddingProject(true) : setIsAddingProject(false)
        setIsSelected(false)

        if (!values) return
        setProjects(project => ({
            ...project,
            [values.title]: {
                "title": values.title,
                "description": values.description,
                "date": values.date,
            }
        }))
    }

    const viewKey = `${isSelected}-${isAddingProject}`;

    const views = {

        "true-true":  <NewProject onNoSelect={isSelectedProject} onCancel={deleteProject}/>,
        "true-false": <SelectedSection onNoSelect={deleteProject} keyProjects={selectedKey} projects={projects} updateProject={updateProject}/>,
        "false-true": <NewProject onNoSelect={isSelectedProject} onCancel={deleteProject}/>,
        "false-false": <NoProjectsSelected onAddProject={addProject}/>,
    };

    return (
        <div className="flex flex-row justify-center text-center w-[1000px] items-center mr-[300px] h-screen">
            <TabProjects onAddProject={addProject} projects={projects} isOpenedProject={openProject}
                         updateTitleKey={updateTitleKey}/>
            {views[viewKey] ?? null}
        </div>
    );
}

export default App;
