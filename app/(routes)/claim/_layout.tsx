import React from "react";
import { Stack } from "expo-router";

export default function RoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="userReferred"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="activities"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
    </Stack>
  );
}
