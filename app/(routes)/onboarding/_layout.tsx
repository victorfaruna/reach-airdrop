import React from "react";
import { Stack } from "expo-router";

export default function OnboardingLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="signup"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="confirm-code"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="add-username"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="add-profile-image"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="add-socials"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
        </Stack>
    );
}
