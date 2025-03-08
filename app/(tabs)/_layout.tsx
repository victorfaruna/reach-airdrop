import { Tabs } from "expo-router";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale, fontScale } from "@/config/size";
import { TouchableHighlight, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5CC738",
        tabBarInactiveTintColor: "#8B9886",
        tabBarButton: (props: any) => <TouchableOpacity {...props} />,

        tabBarLabelStyle: {
          fontFamily: "Satoshi-Regular",
          fontSize: fontScale(14),
          marginTop: scale(-5),
        },
        tabBarStyle: {
          height: scale(60),
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20.1 19.1999C20.1 19.4386 20.0052 19.6675 19.8364 19.8363C19.6676 20.0051 19.4387 20.0999 19.2 20.0999H4.80002C4.56133 20.0999 4.33241 20.0051 4.16363 19.8363C3.99485 19.6675 3.90002 19.4386 3.90002 19.1999V9.7409C3.89993 9.60375 3.93118 9.4684 3.99139 9.34517C4.0516 9.22195 4.13917 9.11411 4.24742 9.0299L11.4474 3.4301C11.6054 3.3072 11.7999 3.24048 12 3.24048C12.2002 3.24048 12.3946 3.3072 12.5526 3.4301L19.7526 9.0299C19.8609 9.11411 19.9485 9.22195 20.0087 9.34517C20.0689 9.4684 20.1001 9.60375 20.1 9.7409V19.1999ZM18.3 18.2999V10.1801L12 5.2805L5.70002 10.1801V18.2999H18.3Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="missions"
        options={{
          title: "Missions",
          tabBarIcon: ({ color, focused }) => (
            <Svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M14 6.32812C15.0097 6.32812 15.8281 5.50964 15.8281 4.5H16.6719C16.6719 5.50964 17.4903 6.32812 18.5 6.32812V7.17188C17.4903 7.17188 16.6719 7.99036 16.6719 9H15.8281C15.8281 7.99036 15.0097 7.17188 14 7.17188V6.32812ZM4.25 11.25C6.73528 11.25 8.75 9.23528 8.75 6.75H10.25C10.25 9.23528 12.2647 11.25 14.75 11.25V12.75C12.2647 12.75 10.25 14.7647 10.25 17.25H8.75C8.75 14.7647 6.73528 12.75 4.25 12.75V11.25ZM7.15701 12C8.14038 12.5457 8.95432 13.3596 9.5 14.343C10.0457 13.3596 10.8596 12.5457 11.843 12C10.8596 11.4543 10.0457 10.6404 9.5 9.65701C8.95432 10.6404 8.14038 11.4543 7.15701 12ZM16.4375 13.5C16.4375 14.8462 15.3462 15.9375 14 15.9375V17.0625C15.3462 17.0625 16.4375 18.1538 16.4375 19.5H17.5625C17.5625 18.1538 18.6538 17.0625 20 17.0625V15.9375C18.6538 15.9375 17.5625 14.8462 17.5625 13.5H16.4375Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color, focused }) => (
            <Svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M13.4 16.4442V18.3H17.9V20.1H7.1V18.3H11.6V16.4442C9.86003 16.2248 8.25994 15.378 7.1 14.0626C5.94007 12.7472 5.30003 11.0538 5.3 9.30002V3.90002H19.7V9.30002C19.7 11.0538 19.0599 12.7472 17.9 14.0626C16.7401 15.378 15.14 16.2248 13.4 16.4442ZM7.1 5.70002V9.30002C7.1 10.7322 7.66893 12.1057 8.68162 13.1184C9.69432 14.1311 11.0678 14.7 12.5 14.7C13.9322 14.7 15.3057 14.1311 16.3184 13.1184C17.3311 12.1057 17.9 10.7322 17.9 9.30002V5.70002H7.1ZM2.6 5.70002H4.4V9.30002H2.6V5.70002ZM20.6 5.70002H22.4V9.30002H20.6V5.70002Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M5.3 21C5.3 19.0904 6.05857 17.2591 7.40883 15.9088C8.7591 14.5585 10.5904 13.8 12.5 13.8C14.4096 13.8 16.2409 14.5585 17.5912 15.9088C18.9414 17.2591 19.7 19.0904 19.7 21H17.9C17.9 19.5678 17.3311 18.1943 16.3184 17.1816C15.3057 16.1689 13.9322 15.6 12.5 15.6C11.0678 15.6 9.69432 16.1689 8.68163 17.1816C7.66893 18.1943 7.1 19.5678 7.1 21H5.3ZM12.5 12.9C9.5165 12.9 7.1 10.4835 7.1 7.49998C7.1 4.51648 9.5165 2.09998 12.5 2.09998C15.4835 2.09998 17.9 4.51648 17.9 7.49998C17.9 10.4835 15.4835 12.9 12.5 12.9ZM12.5 11.1C14.489 11.1 16.1 9.48898 16.1 7.49998C16.1 5.51098 14.489 3.89998 12.5 3.89998C10.511 3.89998 8.9 5.51098 8.9 7.49998C8.9 9.48898 10.511 11.1 12.5 11.1Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
}
