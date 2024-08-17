import { useState, FormEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createTodo } from "@/db/todo";
import { AddCardProps, TaskType } from "./TodosType";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { handleError } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { useTodo } from "@/context/TodoContext"; // Import the useTodo hook

export default function AddCard({ column }: AddCardProps) {
    const [title, setTitle] = useState("");
    const [adding, setAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const { tasks, dispatch } = useTodo();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (title.trim() === "") {
                handleError(new Error("Todo cannot be empty"));
                return;
            }
            // Long id is generated using uuidv4
            const id = uuidv4();
            const isError = await createTodo(id, title, column);
            if (isError !== null) {
                throw new Error("Failed to create task. Please try again.");
            }
            const newTask = { id, title, column };
            // add new task to the tasks array, immediately new task will be shown in the UI
            dispatch({ type: "ADD_TASK", payload: newTask });
            setAdding(false);
            setTitle("");
        } catch (error) {
            console.error(error);
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="animate-spin h-4 w-4 rounded-full border-t-2 border-b-2 border-neutral-50"></div>
        );
    }

    return (
        <>
            {adding ? (
                <motion.form layout onSubmit={handleSubmit}>
                    <textarea
                        onChange={(e) => {
                            setTitle(e.target.value);

                        }}
                        autoFocus
                        placeholder="Add new task..."
                        className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <button
                            type="submit"
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <Plus />
                        </button>
                    </div>
                </motion.form>
            ) : (
                <motion.button
                    layout
                    onClick={() => setAdding(true)}
                    className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                    {
                        loading ? (
                            <div className="animate-spin h-4 w-4 rounded-full border-t-2 border-b-2 border-neutral-50"></div>
                        ) : (
                            <>
                                <span>Add new task</span>
                                <Plus />
                            </>
                        )
                    }
                </motion.button>
            )}
        </>
    );
};
