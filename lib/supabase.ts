// lib/supabase.ts
import { supabase } from "@/utils/supabaseClient";

type SupabaseResponse<T> = {
  data: T | null;
  error: { message: string } | null;
};

export async function addEmail(email: string): Promise<SupabaseResponse<any>> {
  const { data, error } = await supabase
    .from("earlyaccessusers")
    .insert([{ email }]);

  return { data, error };
}
