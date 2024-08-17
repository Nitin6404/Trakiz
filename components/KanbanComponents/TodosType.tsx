import { Dispatch, SetStateAction } from "react";


export type ColumnProps = {
    title: string;
    headingColor: string;
    tasks: TaskType[];
    column: ColumnType;
    dispatch: Dispatch<{ type: string, payload: TaskType[] }>;
};



export type CardProps = TaskType & {
    handleDragStart: Function;
    tasks: TaskType[];
    dispatch: Dispatch<{ type: string, payload: TaskType[] }>;
};

// Card component with edit functionality

export type DropIndicatorProps = {
    column: string;
};




export type AddCardProps = {
    column: ColumnType;
    tasks: TaskType[];
    setTasks: Dispatch<{ type: string, payload: TaskType[] }>; // Ensure this is always defined
};


export type ColumnType = "backlog" | "todo" | "doing" | "done";

export type TaskType = {
    title: string;
    id: string;
    column: ColumnType;
    userId?: string;
};

export interface DragEvent {
    clientY: number;
    preventDefault: () => void;
    dataTransfer: {
        setData: (key: string, value: string) => void;
        getData: (key: string) => string;
    };
}