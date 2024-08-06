"use server";

import { get } from "axios";
import { createSupabaseClient, protectRoute } from "../auth/server";
import {
  getErrorMessage,
  getSuccessMessage,
  handleError,
  handleSuccess,
} from "../lib/utils";
import { Provider } from "@supabase/supabase-js";

export const createAccountAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { auth } = createSupabaseClient();

    const { error } = await auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { auth } = createSupabaseClient();

    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const signWithGoogleAction = async (provider: Provider) => {
  try {
    const { auth } = createSupabaseClient();

    const { data, error } = await auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
      },
    });
    if (error) throw error;

    if (error) throw error;

    return { errorMessage: null, url: data.url };
  } catch (error) {
    return { errorMessage: "Error logging in" };
  }
};

export const forgotPasswordAction = async (email: string) => {
  try {
    await protectRoute();
    const { auth } = createSupabaseClient();
    const { data, error } = await auth.resetPasswordForEmail(email);
    if (error) {
      throw error;
    } else {
      handleSuccess("Password reset email sent");
      return {
        successMessage: getSuccessMessage("Password reset email sent"),
      };
    }
  } catch (error: unknown) {
    handleError(error);
    return { errorMessage: getErrorMessage(error) };
  }
};

export const signOutAction = async () => {
  try {
    await protectRoute();

    const { auth } = createSupabaseClient();

    const { error } = await auth.signOut();

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};
