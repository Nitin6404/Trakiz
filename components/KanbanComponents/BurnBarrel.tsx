import { Dispatch, SetStateAction, useState } from "react";
import { TaskType, DragEvent } from "./TodosType";
import { Flame, Trash2 } from "lucide-react";



export default function BurnBarrel({
    setTasks,
}: {
    setTasks: Dispatch<SetStateAction<TaskType[]>>;
}) {
    const [active, setActive] = useState(false);

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = (e: DragEvent) => {
        setActive(false);
    };

    const handleDragEnd = (e: DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");
        setActive(false);
        setTasks((prevTasks) => prevTasks.filter((card) => card.id !== cardId));
    };

    return (
        <div
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active
                ? "border-red-800 bg-red-800/20 text-red-500"
                : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
                }`}
        >
            {active ? <Flame className="animate-bounce" /> : <Trash2 />}
        </div>
    );
};