import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Avatar,
} from '@radix-ui/react-avatar';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    CircleUserRound,
    Loader2
} from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { signOutAction } from "@/actions/user";
import toast from "react-hot-toast";

export const HeaderAvatar = () => {
    const router = useRouter();

    const [isLogoutPending, startTransition] = useTransition();

    const handleSignInWithGoogleClick = () => {
        startTransition(async () => {
            const { errorMessage } = await signOutAction();
            if (!errorMessage) {
                router.push('/');
            } else {
                toast.error(errorMessage);
            }
        });
    };

    return (
        <Avatar>
            <Dialog>
                <DialogTrigger>
                    <CircleUserRound width={30} height={30} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when youre done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="Username"
                                defaultValue="abc123"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                defaultValue="abc@def.com"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <Button type="submit">Save changes</Button>
                    <Separator className="my-5" />
                    <Button
                        disabled={isLogoutPending}
                        onClick={() => handleSignInWithGoogleClick()}
                        variant="secondary">
                        {isLogoutPending ?
                            <Loader2 className="animate-spin" size={24} color='white' />
                            :
                            'Logout'
                        }
                    </Button>
                </DialogContent>
            </Dialog>
        </Avatar>
    )
}