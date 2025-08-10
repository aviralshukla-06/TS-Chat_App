import { PasswordIcon } from "../custom-icons/PasswordIcon"
import { UserIcon } from "../custom-icons/UserIcon"
// import { CardHeader } from "./CardHeader"
import { InputBox } from "./InputBox"

export const Card = () => {
    return (
        <div>
            {/* <CardHeader /> */}
            <div className="mb-2">
                <InputBox
                    bgColor="custom"
                    icon={<UserIcon size="md" />}
                    placeholder="userame"
                    iconPosition="left"
                />
            </div>

            <div className="mt-2">
                <InputBox
                    bgColor="custom"
                    icon={<PasswordIcon size="md" />}
                    placeholder="password"
                    iconPosition="right"
                />
            </div>


        </div>
    )
}