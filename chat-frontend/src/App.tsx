import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
// import { HomePage } from "./pages/HomePage"
// import SignupPage from "./pages/SignupPage"
// import SigninPage from "./pages/SigninPage"
// import SettingPage from "./pages/SettingPage"
// import ProfilePage from "./pages/ProfilePage"
import { CardHeader } from "./components/CardHeader"
import { UserIcon } from "./custom-icons/UserIcon"
import { InputBox } from "./components/InputBox"
import { Card } from "./components/Card"
import { SignupPage } from "./pages/SignupPage"
import { SigninPage } from "./pages/SigninPage"
import { HomePage } from "./pages/HomePage"


const App = () => {
  return (
    <div>
      <NavBar />
      {/* <BrowserRouter> */}

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        {/* <Route path="/settings" element={<SettingPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )

}



export default App


//  return (

//     <div className="flex justify-center items-center h-screen">
//       <div className="h-96 w-96 border border-black flex items-center font-sans bg-blue-500 custom-diagonal-bg">
//         <div className="flex items-center justify-center bg-inherit">
//           <div className="border border-black rounded-full flex justify-center items-center z-10  h-12 w-12 bg-white">
//             <UserIcon size="lg" />
//           </div>
//           <div className="-ml-4 z-0">
//             <input className="bg-[#476468] h-9 flex justify-center rounded-r-3xl" placeholder="username" />
//           </div>

//         </div>
//       </div>
//     </div>

//   )