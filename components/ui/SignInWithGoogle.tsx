import { Button } from "./button"
import GoogleIcon from "../icons/GoogleIcon"
import { useTransition } from 'react';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { signWithGoogleAction } from '@/actions/user'
import { useRouter } from 'next/navigation';
import { Provider } from "@supabase/supabase-js";


export default function SignInWithGoogle() {

    const router = useRouter();

    const [isGooglePending, startTransition] = useTransition();

    const handleSignInWithGoogleClick = (provider: Provider) => {
        startTransition(async () => {
            const { errorMessage, url } = await signWithGoogleAction(provider);
            if (!errorMessage && url) {
                router.push(url);
            } else {
                toast.error(errorMessage);
            }
        });
    };
    return (
        <div className='flex justify-center w-[429px] mt-5'>
            <Button
                onClick={() => handleSignInWithGoogleClick("google")}
                disabled={isGooglePending}
                className='w-[430px] transition hover:scale-90 ease-in-out rounded-full bg-[#e48700] flex justify-center space-x-3'>
                {
                    isGooglePending ?
                        (
                            <Loader2 className="animate-spin" size={24} color='white' />
                        ) :
                        (
                            <>
                                <GoogleIcon />
                                <p>
                                    Sign in with Google
                                </p>
                            </>
                        )
                }
            </Button>
        </div>
    )
}