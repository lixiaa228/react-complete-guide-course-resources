import logo from "../assets/no-projects.png";

export default function NoProjectsSelected({onAddProject}) {
    function addProject() {
        onAddProject()
    }

    return (
        <div className="flex flex-col justify-center text-center w-[1000px] items-center ml-[300px]">
            <img className="w-[60px]" src={logo}></img>
            <h1 className="text-2xl font-bold text-[#625e5c] m-4">No Project Selected</h1>
            <p className="text-[#9d9b98]">Select a project or get started with a new one</p>
            <button onClick={addProject}
                    className="bg-[#322e2b] text-center  text-[#94908d] w-[160px] h-[40px] rounded-md font-medium mt-[30px] px-2">Create
                new project
            </button>
        </div>
    )
}