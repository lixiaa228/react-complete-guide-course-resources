import logo from './assets/no-projects.png'

function App() {
  return (
    <>
        <div className="flex mt-[100px]">
            <div className="w-[400px] h-[600px] rounded-r-2xl bg-[#100e0c] text-white flex flex-col">
                <h1 className="mt-[60px] text-2xl font-semibold ml-[30px]">YOUR PROJECTS</h1>
                <button className="bg-[#322e2b] text-center text-[#837e7b] w-[140px] h-[45px] rounded-md ml-[30px] font-medium mt-[30px]">+ Add project</button>
            </div>
            <div className="flex flex-col justify-center p-8 text-center items-center w-[1000px]">
                <img className="w-[60px]" src={logo}></img>
                <h1 className="text-2xl font-bold text-[#625e5c] m-4">No Project Selected</h1>
                <p className="text-[#9d9b98]">Select a project or get started with a new one</p>
                <button className="bg-[#322e2b] text-center  text-[#94908d] w-[160px] h-[45px] rounded-md font-medium mt-[30px] px-2">Create new project</button>
            </div>

        </div>
    </>
  );
}

export default App;
