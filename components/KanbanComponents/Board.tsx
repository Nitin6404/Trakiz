import BurnBarrel from "@/components/KanbanComponents/BurnBarrel";
import Column from "@/components/KanbanComponents/Column";
import { useEffect, useState } from "react";
import { ColumnType, TaskType } from "./TodosType";
import { getTodos } from "@/db/todo"

export default function Board() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await getTodos();
                const convertedTasks = todos.map(todo => ({
                    ...todo,
                    column: todo.column as ColumnType
                }));
                setTasks(convertedTasks);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex h-full w-full gap-3 py-3 overflow-y-scroll">
            {['backlog', 'todo', 'doing', 'done'].map((column) => (
                <Column
                    key={column}
                    title={column.charAt(0).toUpperCase() + column.slice(1)}
                    column={column as ColumnType}
                    headingColor={`text-${column}-200`}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
            <BurnBarrel setTasks={setTasks} />
        </div>
    );
};