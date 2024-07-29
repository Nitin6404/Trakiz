"use server";

import { supabase } from "@/utils/supabaseClient";
import { handleServerError } from "@/lib/utils";
import { getUser } from "@/auth/server";
import { randomUUID } from "crypto";

interface Todo {
  id: string;
  title: string;
  column: string;
  userId?: string;
}

export const isAuthenticated = async () => {
  const user = await getUser();
  return user !== null;
};

export const getSession = async () => {
  const { data: session } = await supabase.auth.getSession();
  return session;
};

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .select("title, id, column");
    if (error) throw error;
    return data;
  } catch (error) {
    handleServerError(error);
    return [];
  }
};

export const getTodoById = async (id: string): Promise<Todo | null> => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .select("title, id, column")
      .eq("id", id);
    if (error) throw error;
    return data[0] || null;
  } catch (error) {
    handleServerError(error);
    return null;
  }
};

export const createTodo = async (
  title: string,
  column: string
): Promise<Todo | null> => {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");

  try {
    const user = await getUser();
    const userId = user?.id;
    const payload = { id: randomUUID(), title, column, userId };

    const { data, error } = await supabase
      .from("todos")
      .insert(payload)
      .select();
    if (error) throw error;
    return data[0] || null;
  } catch (error) {
    handleServerError(error);
    return null;
  }
};

export const updateTodo = async (
  id: string,
  title: string,
  column: string
): Promise<Todo | null> => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .update({ title, column })
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0] || null;
  } catch (error) {
    handleServerError(error);
    return null;
  }
};

export const moveTodo = async (
  id: string,
  newColumn: string
): Promise<Todo | null> => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .update({ column: newColumn })
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0] || null;
  } catch (error) {
    handleServerError(error);
    return null;
  }
};

export const deleteTodo = async (id: string): Promise<Todo | null> => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0] || null;
  } catch (error) {
    handleServerError(error);
    return null;
  }
};
