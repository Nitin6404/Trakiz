"use client";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { ColumnType, TaskType } from "@/components/KanbanComponents/TodosType";
import { getTodos } from "@/db/todo"; // Import the getTodos function
import { Dispatch } from "react";

type TodoContextType = {
    tasks: TaskType[];
    dispatch: Dispatch<{ type: string, payload: TaskType | TaskType[] }>;
    loading: boolean;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const todoReducer = (state: TaskType[], action: { type: string, payload: TaskType | TaskType[] }) => {
    switch (action.type) {
        case 'SET_TASKS':
            return Array.isArray(action.payload) ? action.payload : state;
        case 'ADD_TASK':
            return [...state, action.payload as TaskType];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== (action.payload as TaskType).id);
        case 'MOVE_TASK':
            return state.map(task => task.id === (action.payload as TaskType).id ? { ...task, column: (action.payload as TaskType).column } : task);
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
