import React from "react";
import { Stack } from "expo-router";

export default function MissionsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="dailyQuiz"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="inviteFriends"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
      <Stack.Screen
        name="leaderBoard"
        options={{ headerShown: false, animation: "ios_from_right" }}
      />
    </Stack>
  );
}
