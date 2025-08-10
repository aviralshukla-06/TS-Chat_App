import type { ReactElement } from "react"

type inputBoxColor = "custom" | "inherited"
type IconPosition = "left" | "right"

interface inputBoxProps {
    bgColor?: inputBoxColor,
    icon?: ReactElement
    placeholder: string,
    iconPosition?: IconPosition

}

export const InputBox = ({ bgColor, icon, placeholder, iconPosition = "left" }: inputBoxProps) => {
    const colorClass = bgColor === "custom" ? "bg-[#476468] text-white" : "bg-inherit text-black"

    return (
        <div >
            <div className="flex items-center justify-center bg-inherit">
                {iconPosition === "left" && (
                    <span className="border border-black rounded-full flex justify-center items-center z-10  h-12 w-12 bg-white">{icon}</span>
                )}

                <input
                    className={`${colorClass} ${iconPosition === "left" ? "-ml-2 pl-4 rounded-r-3xl" : " rounded-l-3xl -mr-2 pr-2 pl-4"} z-0 h-9 flex justify-center `}
                    placeholder={placeholder}
                />

                {iconPosition === "right" && (
                    <span className="border border-black rounded-full flex justify-center items-center z-10 h-12 w-12 bg-white -ml-2">
                        {icon}
                    </span>
                )}
            </div>
        </div>

    )
}