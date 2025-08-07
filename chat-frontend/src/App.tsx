import { UserIcon } from "./custom-icons/UserIcon"

function App() {
  {/* <h1 className="flex bg-"></h1> */ }

  return (

    <div className="flex justify-center items-center h-screen">
      <div className="h-96 w-96 border border-black flex items-center font-sans bg-blue-500 custom-diagonal-bg">
        <div className="flex items-center justify-center bg-inherit">
          <div className="border border-black rounded-full flex justify-center items-center z-10  h-12 w-12 bg-white">
            <UserIcon size="lg" />
          </div>
          <div className="-ml-4 z-0">
            <input className="bg-[#476468] h-9 flex justify-center rounded-r-3xl" placeholder="username" />
          </div>

        </div>
        {/* hi there */}
      </div>
    </div>

  )
}

export default App
