'use client';
import { useRouter } from 'next/navigation';
import SignInWithGoogle from '../ui/SignInWithGoogle';
import { Mail, Lock } from 'lucide-react'
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { createAccountAction, loginAction } from '@/actions/user'

export default function SignInUp({ signInComponent }: { signInComponent: boolean }) {
    const router = useRouter();

    const [isSignInWithPasswordPending, startTransition] = useTransition();

    const handleClickCreateAccountButton = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await createAccountAction(formData);

            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                router.push("/");
                toast.success("A verification link has been sent to your email");
            }
        });
    };

    const handleClickLoginButton = (formData: FormData) => {
        startTransition(async () => {
            const { errorMessage } = await loginAction(formData);
            if (errorMessage) {
                toast.error(errorMessage);
            } else {
                toast.success("Successfully logged in");
                router.push("/");
            }
        });
    };
    return (
        <form
            action={signInComponent ? handleClickLoginButton : handleClickCreateAccountButton}
        >
            <div className="relative mt-12">
                <label
                    htmlFor="email"
                    className="block text-base font-medium text-[#999999]"
                >
                    Email
                </label>
                <div className='mt-1 mb-1'>
                    <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                        <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]"
                        placeholder="Enter your email address"
                        disabled={isSignInWithPasswordPending}
                    />
                </div>
                <label
                    htmlFor="password"
                    className="block text-base font-medium text-[#999999]">
                    Password
                </label>
                <div className='mt-1'>
                    <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                        <Lock className='w-[33.33px] h-[26.67px]' color="#e48700" />
                    </div>
                    <input
                        type="password"
                        name="password"
                        className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]"
                        placeholder="Enter your password"
                        disabled={isSignInWithPasswordPending}
                    />
                </div>
            </div>
            <div className="mt-5">
                <button
                    className='w-[430px] h-10 transition hover:scale-90 ease-in-out rounded-full bg-[#e48700] flex justify-center items-center'
                    disabled={isSignInWithPasswordPending}
                >
                    {isSignInWithPasswordPending ? <Loader2 className="animate-spin" /> : "Go ahead! - its free"}
                </button>
                <p className='font-poppins font-semibold text-base text-[#b5b5b5] mt-5 text-center w-[429px]'>or continue with</p>
                <SignInWithGoogle />
            </div>
        </form>
    )
}