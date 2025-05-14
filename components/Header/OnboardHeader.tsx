import { Pressable, Text, View } from "react-native";
import React from "react";
import { fontScale, heightScale, widthScale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { Href, router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function OnboardHeader({ skipTo }: { skipTo?: Href }) {
    return (
        <View
            style={{
                flexDirection: "row",
                paddingTop: heightScale(30),
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Pressable
                style={{ alignSelf: "flex-start" }}
                hitSlop={widthScale(20)}
                onPress={() => router.back()}
            >
                <Svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M5.46991 9.99327C5.24824 9.99327 5.02658 9.9116 4.85157 9.7366L0.733242 5.61827C0.394909 5.27994 0.394909 4.71994 0.733242 4.38161L4.85157 0.263272C5.18991 -0.0750618 5.74991 -0.0750618 6.08824 0.263272C6.42658 0.601605 6.42658 1.1616 6.08824 1.49994L2.58824 4.99994L6.08824 8.49994C6.42658 8.83827 6.42658 9.39827 6.08824 9.7366C5.92491 9.9116 5.70324 9.99327 5.46991 9.99327Z"
                        fill="#979EB3"
                    />
                </Svg>
            </Pressable>
            {skipTo && (
                <Pressable
                    onPress={() => router.push(skipTo)}
                    hitSlop={widthScale(20)}
                >
                    <Text
                        style={{
                            fontSize: fontScale(14),
                            color: Colors.textMain,
                            fontFamily: "Manrope-Bold",
                        }}
                    >
                        Skip
                    </Text>
                </Pressable>
            )}
        </View>
    );
}
