import React from "react";
import { Stack } from "expo-router";

export default function UserLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="profile"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="change-appearance"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="change-language"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="change-nickname"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="terms-and-policies"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
        </Stack>
    );
}
