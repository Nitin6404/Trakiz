'use client';
import { useEffect, useState } from "react";
import { createSupabaseClient } from "@/auth/client";
import { User } from "@supabase/supabase-js";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const { auth } = createSupabaseClient();

    useEffect(() => {
        // Set up the auth state change listener
        const { data: authListener } = auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        // Check the initial session state
        auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null);
        });

        // Clean up the listener on unmount
        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, [auth]);

    return user;
};

export default useAuth;
