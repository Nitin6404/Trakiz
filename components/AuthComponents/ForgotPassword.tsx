'use client';
import { forgotPasswordAction } from '@/actions/user';
import ThinksToDoImage from '@/components/icons/ThinksToDoImage';
import { KeyRound, Mail, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import toast from 'react-hot-toast';
// import CheckYourEmailForVerification from '@/components/AuthCompponents/YourEmailForVerification';
// import SetNewPassword from '@/components/AuthCompponents/SetNewPassword';
// import PasswordReserted from '@/components/AuthCompponents/PasswordReserted';

export default function AuthComponent() {

    const [isForgotPasswordPending, startTransition] = useTransition();

    const handleForgotPasswordButton = async (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await forgotPasswordAction(formData);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success("Password reset email sent");
            }
        });
    }

    return (
        <form
            action={handleForgotPasswordButton}
        >
            <div className="w-full h-full flex  bg-[#111010]">
                <div className='mt-10 ml-20'>
                    <div className="-ml-10">
                        <p className="font-roboto font-bold text-2xl">Trakiz</p>
                    </div>
                    <div className="mt-14 ml-10 mr-10 w-[488px] h-4/5 flex justify-center items-center">
                        <div className='w-full h-full'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <div className='w-14 h-14 rounded-full flex justify-center items-center bg-white'>
                                        <KeyRound strokeWidth={2.5} height={21} width={21} color="#e48700" />
                                    </div>
                                </div>
                                <div className='mt-7 flex flex-col justify-center items-center'>
                                    <p className='font-montserrat font-bold text-xl '>
                                        Forgot password?
                                    </p>
                                    <p className='mt-3 font-poppins font-bold text-base text-[#999999]'>
                                        No worries, we&apos;ll send you reset instructions.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <label
                                    htmlFor="email"
                                    className="mt-5 block text-base font-medium text-[#999999]"
                                >
                                    Email
                                </label>
                                <div className='mt-2.5 mb-1'>
                                    <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                        <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                    </div>
                                    <input
                                        type='email'
                                        name="email"
                                        className="block w-[470px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]"
                                        placeholder="Enter your email address"
                                        disabled={isForgotPasswordPending}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='mt-10 flex justify-center items-center'>
                                    <button
                                        className='w-[430px] h-10 transition hover:scale-90 ease-in-out rounded-full bg-[#e48700] flex justify-center items-center font-poppins text-base font-bold'
                                        disabled={isForgotPasswordPending}
                                    >
                                        {isForgotPasswordPending ? <Loader2 className="animate-spin" /> : "Reset Password"}
                                    </button>
                                </div>
                                <Link href='/signin'>
                                    <div className='flex justify-center items-center mt-8 space-x-2 hover:underline hover:cursor-pointer'>
                                        <ArrowLeft />
                                        <p className='font-poppins font-normal text-base'>
                                            Back to log in
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center my-5 mx-5 w-screen rounded-lg bg-[#B6700B]">
                    <div className='w-1/2'>
                        <ThinksToDoImage />
                    </div>
                </div>
            </div>
        </form>
    )
}