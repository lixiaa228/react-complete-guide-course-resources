import {useState} from "react";


export default function TabProjects({projects, onAddProject, isOpenedProject, updateTitleKey}) {

    // const [isOpenedModal, setIsOpenedModal] = useState(false);

    function isOpenedProjectModal(titleKey) {
        isOpenedProject(true)
        updateTitleKey(titleKey);
        // setTitleSection(titleKey)
    }

    function isSelected() {

    }

    function addProject() {
        onAddProject()
    }


    return (
        <div className="flex mt-[100px]">
            <div className="w-[400px] h-[600px] rounded-r-2xl bg-[#100e0c] text-white flex flex-col">
                <h1 className="mt-[60px] text-2xl font-semibold ml-[30px]">YOUR PROJECTS</h1>
                <button onClick={addProject}
                        className="bg-[#322e2b] text-center text-[#837e7b] w-[140px] h-[45px] rounded-md ml-[30px] font-medium mt-[30px]">+
                    Add project
                </button>
                <div className="mt-[20px] cursor-pointer flex flex-col ">
                    {projects ? Object.keys(projects).map((titleKey, i) => (
                        <p onClick={() => isOpenedProjectModal(titleKey)}
                           className="bg-[#100e0c] ml-[30px] mt-[10px] h-[35px] pl-2 pt-1 text-left" key={i}>{titleKey}</p>
                    )) : null}
                </div>
            </div>
        </div>
    )
}