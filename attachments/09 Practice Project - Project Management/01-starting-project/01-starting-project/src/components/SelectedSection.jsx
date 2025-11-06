import styled from "styled-components"
import {useState, useRef, forwardRef} from "react";


const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 600px;
    text-align: left;

    h1 {
        font-weight: bold;
        color: #42413f;
        margin: 10px 0;
        font-size: 28px;
    }
`

const SelectedSection = forwardRef(function SelectedSection({keyProjects, projects, onNoSelect, updateProject}) {

    const inputTask = useRef()
    const [updatedData, setUpdatesData] = useState({
        ...projects
    });

    function deleteProject() {

        if (updatedData && keyProjects) {
            setUpdatesData(prev => {
                delete updatedData[keyProjects]
            })
        }
        if (updatedData && keyProjects) {
            onNoSelect();
        }
        updateProject(updatedData)
    }

    function addTask(titleKey) {
        const newTask = inputTask.current.value.trim();
        if (!newTask) return;
        setUpdatesData(prev => ({
            ...prev,
            [titleKey]: {
                ...prev[titleKey],
                tasks: [...(prev[titleKey]?.tasks ?? []), newTask],
            },
        }));
        inputTask.current.value = "";
    }

    function removeTask(titleKey, index) {
        setUpdatesData(prev => {
            const section = prev[titleKey] ?? {};
            const oldTasks = section.tasks ?? [];
            const newTasks = oldTasks.filter((_, i) => i !== index);

            return {
                ...prev,
                [titleKey]: {
                    ...section,
                    tasks: newTasks,
                },
            };
        });
    }

    if (!projects[keyProjects]) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center text-center w-[1000px] ml-[30px]">
            <Section>
                <div className="flex flex-row justify-between">
                    <h1>{projects[keyProjects].title}</h1>
                    <button onClick={deleteProject} className="font-medium">Delete
                    </button>
                </div>
                <p className="text-[#979293] mb-[20px]">{projects[keyProjects].date}</p>
                <p className="text-[#5b5b5b] border-b-2 border-[#cbcbcb] font-normal pb-3">{projects[keyProjects].description}</p>
            </Section>
            <Section>
                <h1>Tasks</h1>
                <div className="flex flex-row justify-start items-center mb-[30px]">
                    <input ref={inputTask} className="bg-[#e1dfdd] w-[300px] h-[35px] rounded-sm" name="task"
                           type="text"></input>
                    <button onClick={() => addTask(keyProjects)} className="ml-[15px]">Add Task</button>
                </div>


                {updatedData?.[keyProjects]?.tasks?.length > 0 ? (
                        <div className="bg-[#f2f2f2] flex flex-col pt-8 px-4 pb-4 font-normal rounded-sm">

                            {updatedData[keyProjects].tasks.map((task, i) => (
                                <div className="flex flex-row justify-between items-center mb-[20px]">

                                    <li className="list-none" key={i}>
                                        {task}
                                    </li>
                                    <button onClick={() => removeTask(keyProjects, i)}>Clear</button>

                                </div>
                            ))}
                        </div>
                    )
                    : <p>This project does not have any tasks yet.</p>
                }


            </Section>
        </div>
    )
})
export default SelectedSection;