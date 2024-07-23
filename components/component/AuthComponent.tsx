import { Mail, Lock } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image';
import Link from 'next/link';

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
                                        <span className="text-[#e48700] font-semibold pl-2">
                                            Login here!
                                        </span>
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
                                        <div className='mt-1'>
                                            <div className="absolute flex items-end pt-2 pl-2 pointer-events-none">
                                                <Mail className='w-[33.33px] h-[26.67px]' color="#e48700" />
                                            </div>
                                            <input type="email" id="email" className="block w-[429px] pl-12 pr-4 py-2 text-white bg-transparent placeholder:text-white border-b-2 border-[#e48700] font-manrope font-medium text-lg focus:outline-none focus:border-[#e48700]" placeholder="Enter your email address" />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className={`${signInComponent ? "mt-5" : "mt-24"}`}>
                            <Button
                                className='w-[429px] transition hover:scale-90 ease-in-out rounded-full bg-[#e48700]'>
                                Go ahead! - its free
                            </Button>
                            <p className='font-poppins font-semibold text-base text-[#b5b5b5] mt-9 text-center w-[429px]'>or continue with</p>
                            <div className='flex justify-center space-x-5 w-[429px] mt-5'>
                                <FaceeBookIcon />
                                <AppleIcon />
                                <GoogleIcon />
                            </div>
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

function AppleIcon() {
    return (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.0521 20.7286C39.0521 30.7405 30.9356 38.8662 20.9146 38.8662C10.8936 38.8662 2.77701 30.7405 2.77701 20.7286C2.77701 10.7076 10.8936 2.59106 20.9146 2.59106C30.9356 2.59106 39.0521 10.7076 39.0521 20.7286Z" fill="#283544" />
            <path d="M29.416 16.1391C29.317 16.1968 26.9609 17.4153 26.9609 20.117C27.072 23.1981 29.9342 24.2786 29.9833 24.2786C29.9342 24.3363 29.5512 25.7505 28.4166 27.233C27.5162 28.5099 26.5167 29.7974 24.9991 29.7974C23.5555 29.7974 23.0373 28.9464 21.3716 28.9464C19.5828 28.9464 19.0766 29.7974 17.707 29.7974C16.1894 29.7974 15.116 28.441 14.1664 27.176C12.9328 25.5203 11.8843 22.9221 11.8473 20.4274C11.8224 19.1054 12.0944 17.806 12.7848 16.7022C13.7593 15.1613 15.499 14.1152 17.3989 14.0807C18.8545 14.035 20.1501 15.012 21.0384 15.012C21.8898 15.012 23.4815 14.0807 25.2824 14.0807C26.0597 14.0815 28.1325 14.2997 29.416 16.1391ZM20.9153 13.8168C20.6562 12.6095 21.3716 11.4023 22.0379 10.6322C22.8892 9.7009 24.2338 9.06879 25.3934 9.06879C25.4674 10.276 24.9983 11.46 24.1598 12.3224C23.4074 13.2537 22.1119 13.9548 20.9153 13.8168Z" fill="white" />
        </svg>

    )
}

function FaceeBookIcon() {
    return (
        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20.7287" cy="19.7287" rx="18.1376" ry="18.1376" fill="url(#paint0_linear_1_39)" />
            <path d="M27.4832 26.9339L28.2889 21.8146H23.2488V18.494C23.2488 17.0931 23.9515 15.7268 26.209 15.7268H28.5019V11.3685C28.5019 11.3685 26.4219 11.0226 24.4342 11.0226C20.2815 11.0226 17.5697 13.475 17.5697 17.9129V21.8146H12.9554V26.9339H17.5697V39.3101C18.4961 39.4519 19.4438 39.5245 20.4092 39.5245C21.3747 39.5245 22.3224 39.4519 23.2488 39.3101V26.9339H27.4832Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_1_39" x1="20.7287" y1="1.59109" x2="20.7287" y2="37.7586" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#18ACFE" />
                    <stop offset="1" stopColor="#0163E0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

function GoogleIcon() {
    return (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.4108 21.1315C39.4108 19.6402 39.2873 18.5519 39.02 17.4234H21.6434V24.1543H31.8431C31.6375 25.8271 30.5271 28.3462 28.0593 30.0389L28.0247 30.2643L33.5189 34.4354L33.8996 34.4727C37.3954 31.3086 39.4108 26.6533 39.4108 21.1315Z" fill="#4285F4" />
            <path d="M21.6422 38.8662C26.6392 38.8662 30.8342 37.2539 33.8984 34.4728L28.0581 30.0391C26.4953 31.1072 24.3977 31.8528 21.6422 31.8528C16.748 31.8528 12.5941 28.6889 11.1133 24.3157L10.8963 24.3338L5.18338 28.6667L5.10867 28.8702C8.15212 34.7952 14.4036 38.8662 21.6422 38.8662Z" fill="#34A853" />
            <path d="M11.1144 24.3158C10.7237 23.1873 10.4976 21.978 10.4976 20.7286C10.4976 19.479 10.7237 18.2699 11.0939 17.1414L11.0835 16.901L5.29899 12.4985L5.10973 12.5868C3.85537 15.0454 3.13562 17.8064 3.13562 20.7286C3.13562 23.6507 3.85537 26.4116 5.10973 28.8703L11.1144 24.3158Z" fill="#FBBC05" />
            <path d="M21.6423 9.60424C25.1176 9.60424 27.4619 11.0754 28.7986 12.3048L34.0219 7.30686C30.814 4.38471 26.6393 2.59109 21.6423 2.59109C14.4037 2.59109 8.15214 6.66194 5.10867 12.5868L11.0928 17.1414C12.5941 12.7683 16.7481 9.60424 21.6423 9.60424Z" fill="#EB4335" />
        </svg>

    )
}

function ThinksToDoImage() {
    return (
        <Image src='/auth.png' width={400} height={400} alt='Auth Image' />
    )
}