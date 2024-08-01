import { OnboardingMessage } from "@/components/RightSideBarComponents/OnboaringMessage"
import { HeaderAvatar } from "../RightSideBarComponents/HeaderAvatar"
import { KanbanTodoBoard } from "@/components/component/KanbanTodoBoard"

export const RightSideBarComponents = () => {
    return (
        < div className="flex flex-col h-full p-4 font-poppins" >
            <header className='flex justify-end'>
                <HeaderAvatar />
            </header>
            <OnboardingMessage />
            <div className='mt-4'>
                <KanbanTodoBoard />
            </div>
        </div >
    )
}