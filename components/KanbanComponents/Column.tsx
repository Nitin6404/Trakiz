import { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";
import { ColumnProps, TaskType, DragEvent } from "./TodosType";
import { moveTodo } from "@/db/todo";

export default function Column({
    title,
    headingColor,
    tasks,
    column,
    setTasks,
}: ColumnProps) {
    const [active, setActive] = useState(false);

    const handleDragStart = (e: DragEvent, card: TaskType) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragEnd = async (e: DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");
        const card = tasks.find((task) => task.id === cardId);

        setActive(false);
        clearHighlights();

        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";
        const moveToBack = before === "-1";

        if (card && card.column !== column) {
            try {
                const updatedCard = await moveTodo(cardId, column);
                setTasks((prevTasks) =>
                    prevTasks.map((task) =>
                        task.id === cardId ? { ...task, column } : task
                    )
                );
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        highlightIndicator(e);
        setActive(true);
    };

    const clearHighlights = (els?: HTMLElement[]) => {
        const indicators = els || getIndicators();
        indicators.forEach((i) => {
            i.style.opacity = "0";
        });
    };

    const highlightIndicator = (e: DragEvent) => {
        const indicators = getIndicators();
        clearHighlights(indicators);
        const el = getNearestIndicator(e, indicators);
        el.element.style.opacity = "1";
    };

    const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
        const DISTANCE_OFFSET = 50;
        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + DISTANCE_OFFSET);
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );

        return el;
    };

    const getIndicators = () => {
        return Array.from(
            document.querySelectorAll(
                `[data-column="${column}"]`
            ) as unknown as HTMLElement[]
        );
    };

    const handleDragLeave = () => {
        clearHighlights();
        setActive(false);
    };

    const filteredtasks = tasks.filter((c) => c.column === column);

    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">
                    {filteredtasks.length}
                </span>
            </div>
            <div
                onDrop={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"
                    }`}
            >
                {filteredtasks.map((c) => {
                    return <Card
                        key={c.id}
                        {...c}
                        handleDragStart={handleDragStart}
                        tasks={tasks}
                        setTasks={setTasks}
                    />;
                })}
                <DropIndicator column={column} />
                <AddCard column={column} tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    );
};