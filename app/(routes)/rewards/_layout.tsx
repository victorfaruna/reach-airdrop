import React from "react";
import { Stack } from "expo-router";

export default function RewardsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="donation-stats"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="referred-users"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
            <Stack.Screen
                name="card-collected"
                options={{ headerShown: false, animation: "ios_from_right" }}
            />
        </Stack>
    );
}
