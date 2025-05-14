import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path, Rect } from "react-native-svg";
import Wave from "@/assets/icons/wave.svg";
import { router } from "expo-router";
import { useColors } from "@/hooks/useColors";

export default function HomeHeader() {
    const { color } = useColors();
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Pressable
                onPress={() => router.push("/(routes)/settings/profile")}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: scale(8),
                }}
            >
                <Image
                    source={require("@/assets/images/headshot-1.png")}
                    style={{ width: scale(48), height: scale(48) }}
                />
                <Text
                    style={{
                        color: color.textMain,
                        fontFamily: "Satoshi-Medium",
                        fontSize: fontScale(16),
                        flexDirection: "row",
                        alignItems: "center",
                        gap: scale(8),
                    }}
                >
                    Hi, Official
                    <Wave style={{ width: scale(20), height: scale(20) }} />
                </Text>
            </Pressable>
            {/* ... */}
            <Svg
                onPress={() => router.push("/(routes)/notifications")}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
            >
                <Rect width="40" height="40" rx="20" fill={color.background2} />
                <Path
                    d="M14.75 24.5H25.25V19.2733C25.25 16.361 22.8995 14 20 14C17.1005 14 14.75 16.361 14.75 19.2733V24.5ZM20 12.5C23.7275 12.5 26.75 15.5323 26.75 19.2733V26H13.25V19.2733C13.25 15.5323 16.2725 12.5 20 12.5ZM18.125 26.75H21.875C21.875 27.2473 21.6775 27.7242 21.3258 28.0758C20.9742 28.4275 20.4973 28.625 20 28.625C19.5027 28.625 19.0258 28.4275 18.6742 28.0758C18.3225 27.7242 18.125 27.2473 18.125 26.75Z"
                    fill={color.textMain}
                />
            </Svg>
        </View>
    );
}
