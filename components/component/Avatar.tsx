import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function ChatAvatar({isUser}: {isUser: boolean}) {
    return (
        isUser ? 
            <UserAvatar /> : 
            <AssistantAvatar />
    );
}

function UserAvatar(){
    return(
        <Avatar >
            <AvatarImage className='h-[33px] w-[32px] rounded-full' src="https://avatars.githubusercontent.com/u/104624489?v=4" alt="User" />
            <AvatarFallback>User</AvatarFallback>
        </Avatar>
    )
}

function AssistantAvatar(){
    return(
        <Avatar >
            <AvatarImage height={36} width={37} src="/logooftrakiz.png" alt="Assistant" />
            <AvatarFallback>Assistant</AvatarFallback>
        </Avatar>
    )
}