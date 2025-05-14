import { create } from "zustand";

interface AuthStore {
    user: {
        id: string;
        email: string;
        nickname: string;
        points: number;
    };
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: {
        id: "",
        email: "",
        nickname: "",
        points: 0,
    },
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth }),
    setUser: (user: AuthStore["user"]) => set({ user }),
}));
