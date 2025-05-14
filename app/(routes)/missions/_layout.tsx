import React from "react";
import { Stack } from "expo-router";

export default function MissionsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="share-post"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="activities"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="mission-completed"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="invite-friends"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="donate"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="donate-with-card"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="donation-successful"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
        </Stack>
    );
}
