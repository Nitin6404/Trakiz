import { AlarmClockCheck } from "lucide-react"
import { TrakizAi } from "@/components/RightSideBarComponents/TrakizAi"
import useAuth from "@/hooks/useAuth"

export const OnboardingMessage = () => {
    const user = useAuth();

    return (
        <>
            <div className='mt-5 '>
                <p className='text-4xl leading-10 font-bold font-montserrat'>Welcome back, {user?.email?.split('@')[0]}</p>
            </div>
            <div className='mt-4 w-full flex justify-between items-center'>
                <div>
                    <p className='text-xl leading-5 font-bold text-[#BDC1CA]'>You have 9 tasks to complete</p>
                </div>
                <div className='flex pr-16 space-x-5'>
                    <TrakizAi />
                    <div className='flex justify-center items-center'>
                        <AlarmClockCheck />
                    </div>
                </div>
            </div>
        </>
    )
}