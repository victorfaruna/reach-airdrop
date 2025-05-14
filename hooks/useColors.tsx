import { useThemeStore } from "@/store/themeStore";

export const useColors = () => {
    const theme = useThemeStore((state) => state.theme);
    const colors = {
        light: {
            textMain: "#000",
            textSub: "#8B9886",
            grey: "#F5F5F5",
            accent: "#5CC738",
            accent2: "#EDA600",
            textMain2: "#fff",
            background: "#fff",
            background2: "#F5F5F5",
            icon: "#9BA1A6",
            tabIconDefault: "#9BA1A6",
        },
        dark: {
            textMain: "#FDFDFD",

            textSub: "#8B9886",
            grey: "#333333",
            accent: "#5CC738",
            accent2: "#EDA600",
            textMain2: "#000",
            background: "#131313",
            background2: "#1A1A1A",
            icon: "#9BA1A6",
            tabIconDefault: "#9BA1A6",
        },
    };

    return { color: colors[theme] };
};
