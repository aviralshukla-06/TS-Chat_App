interface buttonProps {
    text: string
}

export const Button = ({ text }: buttonProps) => {
    return (
        <div className="text-xl font-bold text-[#01212e] bg-white rounded-full flex text-center justify-center  items-center h-10 w-60">
            {text}
        </div>
    )
}