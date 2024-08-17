import { AlarmClockCheck } from "lucide-react";
import { TrakizAi } from "@/components/RightSideBarComponents/TrakizAi";
import useAuth from "@/hooks/useAuth";
import { useTodo } from "@/context/TodoContext"; // Import the custom hook

export const OnboardingMessage = () => {
    const user = useAuth();
    const { tasks } = useTodo(); // Access tasks from the context

    // Filter the tasks to include only "todo" and "backlog"
    const taskCount = tasks.filter(task => task.column === "todo" || task.column === "backlog").length;

    if (!user) return null;

    return (
        <>
            <div className='mt-5 '>
                <p className='text-4xl leading-10 font-bold font-montserrat'>
                    Welcome back, {user?.email?.split('@')[0]}
                </p>
            </div>
            <div className='mt-4 w-full flex justify-between items-center'>
                <div>
                    <p className='text-xl leading-5 font-bold text-[#BDC1CA]'>
                        You have {taskCount} tasks to complete
                    </p>
                </div>
                <div className='flex pr-16 space-x-5'>
                    <TrakizAi />
                    <div className='flex justify-center items-center'>
                        <AlarmClockCheck />
                    </div>
                </div>
            </div>
        </>
    );
};
