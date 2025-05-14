import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { fontScale, heightScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";

export default function EmptyNotifications() {
    const { color } = useColors();
    return (
        <View
            style={{
                flex: 1,
                marginTop: -heightScale(150),
                alignItems: "center",
                justifyContent: "center",
                gap: heightScale(8),
            }}
        >
            <Svg
                width="109"
                height="108"
                viewBox="0 0 109 108"
                fill="none"
                //       xmlns="http://www.w3.org/2000/svg"
            >
                <Circle
                    cx="54.5"
                    cy="54"
                    r="52.5"
                    stroke="#C73838"
                    stroke-width="3"
                />
                <Circle cx="54.5" cy="54" r="48" fill="#C73838" />
                <Path
                    d="M54.5 66C47.8724 66 42.5 60.6276 42.5 54C42.5 47.3724 47.8724 42 54.5 42C61.1276 42 66.5 47.3724 66.5 54C66.5 60.6276 61.1276 66 54.5 66ZM54.5 63.6C57.0461 63.6 59.4879 62.5886 61.2882 60.7882C63.0886 58.9879 64.1 56.5461 64.1 54C64.1 51.4539 63.0886 49.0121 61.2882 47.2118C59.4879 45.4114 57.0461 44.4 54.5 44.4C51.9539 44.4 49.5121 45.4114 47.7118 47.2118C45.9114 49.0121 44.9 51.4539 44.9 54C44.9 56.5461 45.9114 58.9879 47.7118 60.7882C49.5121 62.5886 51.9539 63.6 54.5 63.6ZM53.3 57.6H55.7V60H53.3V57.6ZM53.3 48H55.7V55.2H53.3V48Z"
                    fill="white"
                />
            </Svg>
            <Text
                style={{
                    fontFamily: "Manrope-Bold",
                    fontSize: fontScale(24),
                    color: color.textMain,
                }}
            >
                No Notifications
            </Text>
            <Text
                style={{
                    fontFamily: "Manrope-Medium",
                    fontSize: fontScale(15),
                    color: color.textSub,
                    textAlign: "center",
                }}
            >
                You don’t have any notifications at the moment.
            </Text>
        </View>
    );
}
