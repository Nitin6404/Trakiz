'use client';

import { Suspense } from 'react';
import { updateUserPassword } from '@/actions/user';
import ThinksToDoImage from '@/components/icons/ThinksToDoImage';
import { handleSuccess } from '@/lib/utils';
import { KeyRound, Mail, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import toast from 'react-hot-toast';

function PasswordForm() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const searchParams = useSearchParams();
    const authCodeForExchangeSession = searchParams.get('code');

    const [isSetNewPasswordPending, startTransition] = useTransition();

    const checkPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password do not match", {
                position: "bottom-right",
                style: {
                    background: "#ff0000",
                    color: "#ffffff",
                    animationDuration: "0.5s",
                },
            });
            return false;
        }
        return true;
    }

    const handleSetNewPasswordButton = async (formData: FormData) => {
        if (!checkPassword) return;
        startTransition(async () => {
            const { errorMessage } = await updateUserPassword(formData, authCodeForExchangeSession!);
            if (errorMessage) {
                toast.error(errorMessage, {
                    position: "bottom-right",
                    style: {
                        background: "#ff0000",
                        color: "#ffffff",
                        animationDuration: "0.5s",
                    },
                });
            } else {
                router.push('dashboard');
                handleSuccess("Password changed successfully");
            }
        });
    }

    return (
        <form
            action={handleSetNewPasswordButton}
            className="w-full h-full flex bg-[#111010]"
        >
            <div className='mt-6 ml-20'>
                <div className="-ml-10">
                    <p className="font-roboto font-bold text-2xl text-[#ffffff]">Trakiz</p>
                </div>
                <div className="mt-14 ml-10 mr-10 w-[488px] h-4/5 flex justify-center items-center">
                    <div className='w-full h-full'>
                        <div>
                            <div className='flex justify-center items-center'>
                                <div className='w-14 h-14 rounded-full flex justify-center items-center bg-white'>
                                    <KeyRound strokeWidth={2.5} height={21} width={21} color="#e48700" />
                                </div>
                            </div>
                            <div className='mt-7 flex flex-col text-center justify-center items-center'>
                                <p className='font-montserrat font-bold text-2xl text-[#E48700]'>
                                    Set new password
                                </p>
                                <p className='mt-3 font-montserrat font-semibold text-sm text-[#999999]'>
                                    Your new password must be different <br /> to previously used passwords.
                                </p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <label
                                htmlFor="pasword"
                                className="mt-5 block text-sm font-poppins font-medium text-[#999999]"
                            >
                                New password
                            </label>
                            <div className='mt-2.5 mb-1'>
                                <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                    <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                </div>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type='password'
                                    name="password"
                                    className="block w-[470px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]"
                                    placeholder="Enter your Password"
                                    disabled={isSetNewPasswordPending}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="mt-5 block text-sm font-poppins font-medium text-[#999999]"
                            >
                                Re-type password
                            </label>
                            <div className='mt-2.5 mb-1'>
                                <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                    <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                </div>
                                <input
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type='password'
                                    name="confirm-password"
                                    className="block w-[470px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]"
                                    placeholder="Re-type your Password"
                                    disabled={isSetNewPasswordPending}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='mt-10 flex justify-center items-center'>
                                <button
                                    className='w-[430px] h-10 transition hover:scale-90 ease-in-out rounded-full bg-[#e48700] flex justify-center items-center font-poppins text-base font-bold'
                                    disabled={isSetNewPasswordPending}
                                >
                                    {isSetNewPasswordPending ? <Loader2 className="animate-spin" /> : "Reset Password"}
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
        </form>
    );
}

export default function AuthComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PasswordForm />
        </Suspense>
    );
}
