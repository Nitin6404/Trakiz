import { DropIndicatorProps } from "@/components/KanbanComponents/TodosType";

export default function DropIndicator({ column }: DropIndicatorProps) {
    return (
        <div
            data-column={column}
            className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
        />
    );
};