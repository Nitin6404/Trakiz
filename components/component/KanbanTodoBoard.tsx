import React, {
  Dispatch,
  SetStateAction,
  useState,
  DragEvent,
  FormEvent,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import {
  MoreVertical,
  Trash2,
  CheckCircle,
  Pencil,
  Plus,
  Flame
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import useTodo from "@/hooks/useTodo";
import toast from "react-hot-toast";
import { title } from "process";

export const KanbanTodoBoard = () => {

  return (
    <div className="h-screen w-full bg-background text-neutral-50">
      <Board />
    </div>
  );
};

const Board = () => {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo } = useTodo();
  const [tasks, setTasks] = useState<TaskType[]>([])
  useEffect(() => {
    const defaultTasks: TaskType[] = todos.map((todo) => ({
      title: todo.title,
      id: todo.id.toString(),
      column: todo.column as ColumnType,
    }));
    setTasks(defaultTasks)
  }, [todos])

  return (
    <div className="flex h-full w-full gap-3 py-3">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        tasks={tasks}
        setTasks={setTasks}
      />
      <BurnBarrel setTasks={setTasks} />
    </div>
  );
};

type ColumnProps = {
  title: string;
  headingColor: string;
  tasks: TaskType[];
  column: ColumnType;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

const Column = ({
  title,
  headingColor,
  tasks,
  column,
  setTasks,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, card: TaskType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...tasks];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setTasks(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
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
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} setTasks={setTasks} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setTasks={setTasks} />
      </div>
    </div>
  );
};

type CardProps = TaskType & {
  handleDragStart: Function;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

// Card component with edit functionality
const Card = ({ title, id, column, handleDragStart, setTasks }: CardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(title);

  const handleSaveEdit = () => {
    if (!editText.trim().length) return;

    setTasks((prevtasks) =>
      prevtasks.map((card) =>
        card.id === id ? { ...card, title: editText.trim() } : card
      )
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setTasks((prevtasks) => prevtasks.filter((card) => card.id !== id));
  };

  const handleMarkAsCompleted = () => {
    setTasks((prevtasks) =>
      prevtasks.map((card) =>
        card.id === id ? { ...card, column: "done" } : card
      )
    );
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
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
                  <button className="text-neutral-400">
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

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({
  setTasks,
}: {
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setTasks((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active
        ? "border-red-800 bg-red-800/20 text-red-500"
        : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
        }`}
    >
      {active ? <Flame className="animate-bounce" /> : <Trash2 />}
    </div>
  );
};

type AddCardProps = {
  column: ColumnType;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

const AddCard = ({ column, setTasks }: AddCardProps) => {
  const [title, setTitle] = useState("");
  const [adding, setAdding] = useState(false);
  const { addTodo } = useTodo();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!title.trim().length) return;

    const newTitle = {
      column,
      title: title.trim(),
      id: Math.random().toString(),
    };
    console.log("this is new title : " + newTitle.title);

    const addTodoToDB = async () => {
      await addTodo(newTitle.title, column);
    }
    addTodoToDB();
    console.log("Add todo called")
    setTasks((pv) => [...pv, newTitle]);

    setAdding(false);
    setTitle("");
    setLoading(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
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

type ColumnType = "backlog" | "todo" | "doing" | "done";

type TaskType = {
  title: string;
  id: string;
  column: ColumnType;
};
