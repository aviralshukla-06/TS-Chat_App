import { ChatIcon } from "../custom-icons/ChatIcon"
import { SettingsIcon } from "../custom-icons/SettingsIcon"

export const NavBar = () => {
    return (
        <div className="flex justify-between h-12 w-full border pl-8 pr-8">
            <div className="flex text-center items-center ">
                <ChatIcon size="lg" />
                <span className="font-bold text-xl pl-4" >Chat-World</span>
            </div>
            <div>
                <SettingsIcon size="lg" />
            </div>
        </div>
    )
}