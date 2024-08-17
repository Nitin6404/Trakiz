"use client";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { ColumnType, TaskType } from "@/components/KanbanComponents/TodosType";
import { getTodos } from "@/db/todo"; // Import the getTodos function
import { Dispatch } from "react";

type Todo = {
    id: string;
    title: string;
    column: ColumnType;
    userId?: string;
}

type TodoContextType = {
    tasks: Todo[];
    loading: boolean;
    dispatch: React.Dispatch<any>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const todoReducer = (state: TaskType[], action: { type: string, payload: Todo | Todo[] }) => {
    switch (action.type) {
        // Set the tasks array to the payload basically updating the tasks array
        case 'SET_TASKS':
            return Array.isArray(action.payload) ? action.payload : state;
        // Add a new task to the tasks array
        case 'ADD_TASK':
            return [...state, action.payload as TaskType];
        // Delete a task from the tasks array
        case 'DELETE_TASK':
            return state.filter(task => task.id !== (action.payload as TaskType).id);
        // Update a task in the tasks array
        case 'MOVE_TASK':
            return state.map(task => task.id === (action.payload as TaskType).id ? { ...task, column: (action.payload as TaskType).column } : task);
        // An action for updating the title of a task
        case 'UPDATE_TITLE':
            return state.map(task => task.id === (action.payload as TaskType).id ? { ...task, title: (action.payload as TaskType).title } : task);
        default:
            return state;
    }
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, dispatch] = useReducer(todoReducer, []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const todos = await getTodos();
                const convertedTasks = todos.map(todo => ({
                    ...todo,
                    column: todo.column as ColumnType
                }));
                dispatch({ type: 'SET_TASKS', payload: convertedTasks });
            } catch (error) {
                console.error("Error fetching tasks: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return (
        <TodoContext.Provider value={{ tasks, dispatch, loading }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
};
