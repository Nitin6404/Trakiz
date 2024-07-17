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
        <Avatar className="w-10 h-10">
            <AvatarImage src="https://avatars.githubusercontent.com/u/104624489?v=4" alt="User" />
            <AvatarFallback>User</AvatarFallback>
        </Avatar>
    )
}

function AssistantAvatar(){
    return(
        <Avatar className="w-10 h-10">
            <AvatarImage src="/logooftrakiz.png" alt="Assistant" />
            <AvatarFallback>Assistant</AvatarFallback>
        </Avatar>
    )
}