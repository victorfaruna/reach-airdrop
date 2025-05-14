import { useThemeStore } from "@/store/themeStore";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

let theme = useThemeStore.getState().theme;
const changeTheme = (value: any) => {
    theme = value;
    console.log("Theme State Changed to " + theme);
};
const unsubscribe = useThemeStore.subscribe((state) => {
    state.theme !== theme && changeTheme(state.theme);
});

let MyColors = {
    light: {
        textMain: "#000",
        textSub: "#A1A1A1",
        accent: "#5CC738",
        textMain2: "#fff",
        background: "#fff",
        background2: "#F5F5F5",
        tint: tintColorLight,
        icon: "#9BA1A6",
        tabIconDefault: "#9BA1A6",
        tabIconSelected: tintColorLight,
    },
    dark: {
        textMain: "#FDFDFD",
        //textSub: "#A1A1A1",
        textSub: "#8B9886",
        accent: "#5CC738",
        textMain2: "#000",
        background: "#131313",
        background2: "#1A1A1A",
        tint: tintColorDark,
        icon: "#9BA1A6",
        tabIconDefault: "#9BA1A6",
        tabIconSelected: tintColorDark,
    },
};

export let Colors = MyColors[theme];
