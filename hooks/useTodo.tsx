import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { getErrorMessage } from '@/lib/utils';
import toast from 'react-hot-toast';
import { title } from 'process';

interface Todo {
    id: number;
    title: string;
    column: string;
}

interface UseTodoReturn {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    addTodo: (title: string, column: string) => Promise<void>;
    updateTodo: (id: number, updates: Partial<Todo>) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
}

const useTodo = (): UseTodoReturn => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch all todos
    const fetchTodos = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('todos')
                .select('*')
                .order('id', { ascending: true });

            if (error) {
                throw error;
            }
            setTodos(data);
        } catch (error) {
            setError(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    // Add a new todo
    const addTodo = async () => {
        try {
            console.log("this is a user: " + await supabase.auth.getUser())
            const { data, error } = await supabase
                .from('todos')
                .insert([
                    {
                        title: 'someValue',
                        column_name: 'otherValue',
                    },
                ])
                .select()
            if (error) {
                throw error;
            }
            setTodos([...todos, data[0]]);
            toast.success('Todo added successfully');
        } catch (error) {
            setError(getErrorMessage(error));
            toast.error(getErrorMessage(error));
        }
    };

    // Update a todo
    const updateTodo = async (id: number, updates: Partial<Todo>) => {
        try {
            const { data, error } = await supabase
                .from('todos')
                .update(updates)
                .eq('id', id)
                .single();

            if (error) {
                throw error;
            }
            setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
            toast.success('Todo updated successfully');
        } catch (error) {
            setError(getErrorMessage(error));
            toast.error(getErrorMessage(error));
        }
    };

    // Delete a todo
    const deleteTodo = async (id: number) => {
        try {
            const { error } = await supabase
                .from('todos')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }
            setTodos(todos.filter((todo) => todo.id !== id));
            toast.success('Todo deleted successfully');
        } catch (error) {
            setError(getErrorMessage(error));
            toast.error(getErrorMessage(error));
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return {
        todos,
        loading,
        error,
        addTodo,
        updateTodo,
        deleteTodo,
    };
};

export default useTodo;