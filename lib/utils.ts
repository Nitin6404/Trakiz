import { toast } from "react-hot-toast";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "Something went wrong"
) => {
  console.error(error);
  let errorMessage = defaultMessage;
  if (error instanceof Error && error.message.length < 100) {
    errorMessage = error.message;
  }
  return errorMessage;
};

export const handleError = (error: unknown) => {
  const errorMessage = getErrorMessage(error);
  toast.error(errorMessage, {
    position: "bottom-right",
    style: {
      background: "#ff0000",
      color: "#ffffff",
    },
  });
};

export function handleServerError(error: unknown) {
  console.error("Server Error:", error);
  return { errorMessage: "An error occurred. Please try again." };
}
