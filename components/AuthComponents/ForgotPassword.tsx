import ThinksToDoImage from '@/components/icons/ThinksToDoImage';
import Link from 'next/link';
// import CheckYourEmailForVerification from '@/components/AuthCompponents/YourEmailForVerification';
// import SetNewPassword from '@/components/AuthCompponents/SetNewPassword';
// import PasswordReserted from '@/components/AuthCompponents/PasswordReserted';

export default function AuthComponent({ signInComponent }: { signInComponent: boolean }) {
    return (
        <div className="w-full h-full flex  bg-[#111010]">
            <div className='mt-10 ml-20'>
                <div className="-ml-10">
                    <p className="font-roboto font-bold text-2xl">Trakiz</p>
                </div>
                <div className="mt-14 ml-20 mr-18 w-[488px] h-4/5 bg-red-600 flex justify-center items-center">
                    <div className='w-full h-full'>
                        <p>
                            gggggggggggggggg
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-5 mx-5 w-full rounded-lg bg-[#B6700B]">
                <ThinksToDoImage />
            </div>
        </div>
    )
}