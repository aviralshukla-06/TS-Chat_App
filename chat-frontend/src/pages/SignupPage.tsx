import { Button } from "../components/Button"
import { CardHeader } from "../components/CardHeader"
import { EmailInputBox } from "../components/EmailInputBox"
import { InputBox } from "../components/InputBox"
import { PasswordIcon } from "../custom-icons/PasswordIcon"
import { UserIcon } from "../custom-icons/UserIcon"

export const SignupPage = () => {
    return (

        <div className="h-screen w-auto flex items-center justify-center bg-[#A7F3D0]">
            <div className="h-2/3 w-1/3  flex flex-col items-center justify-center font-sans bg-blue-500 custom-diagonal-bg p-4">

                {/* Header */}
                <CardHeader
                    profileIcon={<UserIcon size="lg" />}
                    headingText="Welcome "
                    generalText="Create! The world is yours.."
                />

                {/* Inputs */}
                <div className="mt-6 w-full flex flex-col gap-4">

                    <InputBox
                        bgColor="custom"
                        icon={<UserIcon size="md" />}
                        placeholder="fullname"
                        iconPosition="left"
                    />

                    <EmailInputBox
                        bgColor="custom"
                        // icon={<UserIcon size="md" />}
                        placeholder="email"
                    // iconPosition="left"
                    />
                    <InputBox
                        bgColor="custom"
                        icon={<PasswordIcon size="md" />}
                        placeholder="password"
                        iconPosition="right"
                    />
                </div>
                <div className="mt-8">
                    <Button text="Signup" />
                </div>

            </div>
        </div>


    )
}