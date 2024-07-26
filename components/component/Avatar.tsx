import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CircleUserRound } from 'lucide-react';

export default function ChatAvatar({ isUser }: { isUser: boolean }) {
    return (
        isUser ?
            <UserAvatar /> :
            <AssistantAvatar />
    );
}

function UserAvatar() {
    return (
        <Avatar >
            <CircleUserRound height={30} width={30} />
            <AvatarFallback>User</AvatarFallback>
        </Avatar>
    )
}

function AssistantAvatar() {
    return (
        <Avatar >
            <AvatarImage height={36} width={37} src="/logooftrakiz.png" alt="Assistant" />
            <AvatarFallback>Assistant</AvatarFallback>
        </Avatar>
    )
}