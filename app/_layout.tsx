import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useThemeStore } from "@/store/themeStore";
import { useColors } from "@/hooks/useColors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { theme } = useThemeStore();
    const { color } = useColors();
    const [loaded] = useFonts({
        "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
        "Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
        "Satoshi-Bold": require("../assets/fonts/Satoshi-Bold.otf"),
        "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
        "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
        "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <SafeAreaProvider>
                    <Stack>
                        <Stack.Screen
                            name="(tabs)"
                            options={{
                                headerShown: false,
                                animation: "ios_from_right",
                            }}
                        />
                        <Stack.Screen
                            name="(routes)"
                            options={{
                                headerShown: false,
                                animation: "ios_from_right",
                            }}
                        />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                    <StatusBar
                        backgroundColor={color.background}
                        barStyle={
                            theme === "light" ? "dark-content" : "light-content"
                        }
                    />
                </SafeAreaProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}
