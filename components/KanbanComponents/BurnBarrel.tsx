import { Dispatch, SetStateAction, useState } from "react";
import { TaskType, DragEvent } from "./TodosType";
import { Flame, Trash2 } from "lucide-react";
import { useTodo } from "@/context/TodoContext";
import { deleteTodo } from "@/db/todo";
import { handleError } from "@/lib/utils";



export default function BurnBarrel() {
    const { tasks, dispatch } = useTodo();
    const [active, setActive] = useState(false);


    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = (e: DragEvent) => {
        setActive(false);
    };

    const handleDragEnd = async (e: DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");
        setActive(false);
        try {
            // delete the task using the todo Id in DATABASE
            const isError = await deleteTodo(cardId);
            if (isError !== null) {
                throw new Error("Failed to delete task. Please try again.");
            }
            // delete the task in the UI
            const deletedTask = tasks.find((task) => task.id === cardId);
            dispatch({ type: "DELETE_TASK", payload: deletedTask });
        } catch (error) {
            console.error(error);
            handleError(error);
        }
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