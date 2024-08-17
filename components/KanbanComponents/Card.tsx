import { useState } from "react";
import DropIndicator from "@/components/KanbanComponents/DropIndicator";
import { CardProps, ColumnType } from "@/components/KanbanComponents/TodosType";
import { motion } from "framer-motion";
import { CheckCircle, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { deleteTodo, markTodoAsCompleted, updateTodo } from "@/db/todo";
import { handleError } from "@/lib/utils";

export default function Card({ title, id, column, handleDragStart, dispatch }: CardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);
    const [loading, setLoading] = useState(false);

    const handleSaveEdit = async () => {
        try {
            // if the editText is the same as the title, then show error as the user is trying to save the same text
            if (editText === title) {
                throw new Error("No changes made to the todo.");
            }
            setLoading(true);

            // update the task with the new text using the todo Id
            const isError = await updateTodo(id, editText, column);
            if (isError !== null) {
                throw new Error("Failed to update task. Please try again.");
            }

            // update the task in the UI
            const updatedTask = { id, title: editText, column };
            dispatch({ type: "UPDATE_TITLE", payload: updatedTask });

            setIsEditing(false);
            setEditText("");
        } catch (error) {
            console.error(error);
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            setLoading(true);

            // delete the task using the todo Id
            const isError = await deleteTodo(id);
            if (isError !== null) {
                throw new Error("Failed to delete task. Please try again.");
            }

            // delete the task in the UI
            const deletedTask = { id, title, column };
            dispatch({ type: "DELETE_TASK", payload: deletedTask });
        } catch (error) {
            console.error(error);
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsCompleted = async () => {
        try {
            setLoading(true);

            // mark the task as completed using the todo Id
            const isError = await markTodoAsCompleted(id);
            if (isError !== null) {
                throw new Error("Failed to mark task as completed. Please try again.");
            }

            // update the task in the UI
            const updatedTask = { id, title, column: "done" as ColumnType };
            dispatch({ type: "MARK_AS_COMPLETED", payload: updatedTask });
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
                                    <button className="text-neutral-400" title="Show More">
                                        <MoreVertical size={16} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuItem
                                        onClick={() => setIsEditing(true)}
                                    >
                                        <Pencil className="mr-2 h-4 w-4" />
                                        <span>Edit ToDo</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={handleDelete}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        <span>Delete ToDo</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={handleMarkAsCompleted}
                                    >
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
