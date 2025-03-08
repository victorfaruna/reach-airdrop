import React from "react";
import { Stack } from "expo-router";

export default function RoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="claim"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="missions"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="user"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
    </Stack>
  );
}
