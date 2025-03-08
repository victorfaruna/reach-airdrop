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
        name="changeNickname"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="changeEmail"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
    </Stack>
  );
}
