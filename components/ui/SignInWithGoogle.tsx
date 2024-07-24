import { Button } from "./button"
import GoogleIcon from "../icons/GoogleIcon"

export default function SignInWithGoogle() {
    return (
        <div className='flex justify-center w-[429px] mt-5'>
            <Button
                className='w-[430px] transition hover:scale-90 ease-in-out rounded-full bg-[#e48700] flex justify-center space-x-3'>
                <GoogleIcon />
                <p>
                    Sign in with Google
                </p>
            </Button>
        </div>
    )
}