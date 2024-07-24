import { Mail, Lock } from 'lucide-react'
import { Button } from '../ui/button'
import ThinksToDoImage from '@/components/icons/ThinksToDoImage';
import Link from 'next/link';
import SignInWithGoogle from '../ui/SignInWithGoogle';

export default function AuthComponent({ signInComponent }: { signInComponent: boolean }) {
    return (
        <div className="w-full h-full flex space-x-5 bg-[#111010]">
            <div>
                <div className="mt-8 ml-10">
                    <p className="font-roboto font-bold text-2xl">Trakiz</p>
                </div>
                <div className="mt-20 ml-32 w-[488px]">
                    <div className="flex flex-col">
                        <p className="font-poppins font-medium text-3xl">
                            {signInComponent ? 'Sign In' : 'Sign Up'}
                        </p>
                        <div className="flex mt-5">
                            {signInComponent ?
                                (
                                    <p className="font-poppins font-normal text-base">
                                        If you didnt have an account
                                        <br />
                                        You can
                                        <Link href="/signup">
                                            <span className="text-[#e48700] font-semibold pl-2 hover:underline">
                                                Register here!
                                            </span>
                                        </Link>
                                    </p>
                                ) :
                                (
                                    <p className="font-poppins font-normal text-base">
                                        If you already have an account
                                        <br />
                                        You can
                                        <Link href="/signin">
                                            <span className="text-[#e48700] font-semibold pl-2 hover:underline">
                                                Login here!
                                            </span>
                                        </Link>
                                    </p>
                                )}
                        </div>
                    </div>
                    <form>
                        <div className="relative mt-16">
                            {signInComponent ?
                                (
                                    <>
                                        <label htmlFor="email" className="block text-base font-medium text-[#999999]">Email</label>
                                        <div className='mt-1 mb-1'>
                                            <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                                <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                            </div>
                                            <input type="email" id="email" className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]" placeholder="Enter your email address" />
                                        </div>
                                        <label htmlFor="email" className="block text-base font-medium text-[#999999]">Password</label>
                                        <div className='mt-1'>
                                            <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                                <Lock className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                            </div>
                                            <input type="password" id="password" className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]" placeholder="Enter your password" />
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <label htmlFor="email" className="block text-base font-medium text-[#999999]">Email</label>
                                        <div className='mt-1 mb-1'>
                                            <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                                <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                            </div>
                                            <input type="email" id="email" className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]" placeholder="Enter your email address" />
                                        </div>
                                        <label htmlFor="email" className="block text-base font-medium text-[#999999]">Password</label>
                                        <div className='mt-1'>
                                            <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                                <Lock className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                            </div>
                                            <input type="password" id="password" className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]" placeholder="Enter your password" />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className="mt-5">
                            <Button
                                className='w-[430px] transition hover:scale-90 ease-in-out rounded-full bg-[#e48700]'>
                                Go ahead! - its free
                            </Button>
                            <p className='font-poppins font-semibold text-base text-[#b5b5b5] mt-5 text-center w-[429px]'>or continue with</p>
                            <SignInWithGoogle />
                        </div>
                    </form>
                </div>

            </div>
            <div className="flex justify-center items-center m-5 bg-[#B6700B] w-[600px] rounded-xl">
                <ThinksToDoImage />
            </div>
        </div>
    )
}