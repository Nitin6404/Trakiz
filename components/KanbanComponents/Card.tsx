import { useEffect, useState } from "react";
import DropIndicator from "@/components/KanbanComponents/DropIndicator";
import { CardProps, ColumnType, TaskType } from "@/components/KanbanComponents/TodosType";
import { motion } from "framer-motion";
import { CheckCircle, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { createTodo, deleteTodo, getTodos, moveTodo, updateTodo } from "@/db/todo";
import { handleError } from "@/lib/utils";

export default function Card({ title, id, column, handleDragStart, tasks, dispatch }: CardProps) {

    // const handleUpdateTask = async (id: number, title: string, column: ColumnType) => {
    //     try {
    //         const todo = await updateTodo(id, title, column);
    //         setTasks(tasks.map((task) => (task.id === id ? { ...task, title, column } : task)));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleDeleteTask = async (id: number) => {
    //     try {
    //         await deleteTodo(id);
    //         setTasks(tasks.filter((task) => task.id !== id));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleMoveTask = async (id: number, newColumn: ColumnType) => {
    //     try {
    //         const todo = await moveTodo(id, newColumn);
    //         setTasks(tasks.map((task) => (task.id === id ? { ...task, column: newColumn } : task)));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);

    // const handleSaveEdit = () => {
    //     // if the text is empty, send client toast message "Todo cannot be empty"
    //     if (editText.trim() === "") {
    //         handleError(new Error("Todo cannot be empty"));
    //         return;
    //     }

    //     setTasks((prevtasks) =>
    //         prevtasks.map((card) =>
    //             card.id === id ? { ...card, title: editText.trim() } : card
    //         )
    //     );
    //     setIsEditing(false);
    // };

    // const handleDelete = () => {
    //     setTasks((prevtasks) => prevtasks.filter((card) => card.id !== id));
    // };

    // const handleMarkAsCompleted = () => {
    //     setTasks((prevtasks) =>
    //         prevtasks.map((card) =>
    //             card.id === id ? { ...card, column: "done" } : card
    //         )
    //     );
    // };

    return (
        <>
            <DropIndicator column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
            >
                {isEditing ? (
                    <>
                        <textarea
                            title="Edit ToDo"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-50 focus:outline-0"
                        />
                        <div className="mt-1 flex items-center justify-end gap-2">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="text-sm text-neutral-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveEdit}
                                className="text-sm text-neutral-50"
                            >
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <p className="text-sm text-neutral-100">{title}</p>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="text-neutral-400" title="Button Text">
                                        <MoreVertical size={16} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuItem onClick={() => setIsEditing(true)}>
                                        <Pencil className="mr-2 h-4 w-4" />
                                        <span>Edit ToDo</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleDelete}>
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        <span>Delete ToDo</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleMarkAsCompleted}>
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        <span>Mark as Completed</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </>
                )}
            </motion.div>
        </>
    );
};
