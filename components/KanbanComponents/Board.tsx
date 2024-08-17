import BurnBarrel from "@/components/KanbanComponents/BurnBarrel";
import Column from "@/components/KanbanComponents/Column";
import { useTodo } from "@/context/TodoContext"; // Import the custom hook
import { ColumnType } from "./TodosType";

export default function Board() {
    const { tasks, loading, dispatch } = useTodo();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex h-full w-full gap-3 py-3">
            {['backlog', 'todo', 'doing', 'done'].map((column) => (
                <Column
                    key={column}
                    title={column.charAt(0).toUpperCase() + column.slice(1)}
                    column={column as ColumnType}
                    headingColor={`text-${column}-200`}
                    tasks={tasks.filter(task => task.column === column)}
                    setTasks={(newTasks) => dispatch({ type: 'SET_TASKS', payload: newTasks })}
                />
            ))}
            <BurnBarrel setTasks={(newTasks) => dispatch({ type: 'SET_TASKS', payload: newTasks })} />
        </div>
    );
}
