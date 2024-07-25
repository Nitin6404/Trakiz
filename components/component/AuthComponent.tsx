import ThinksToDoImage from '@/components/icons/ThinksToDoImage';
import Link from 'next/link';
import SignInUp from '@/components/ui/SignInUp';

export default function AuthComponent({ signInComponent }: { signInComponent: boolean }) {
    return (
        <div className="w-full h-full flex  bg-[#111010]">
            <div className='mt-14 ml-28'>
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
                    <SignInUp signInComponent={signInComponent} />
                </div>
            </div>
            <div className="flex justify-center items-center my-5 mx-5 w-full rounded-lg bg-[#B6700B]">
                <ThinksToDoImage />
            </div>
        </div>
    )
}