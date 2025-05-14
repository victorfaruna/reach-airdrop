import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { Href, router } from "expo-router";
import { useColors } from "@/hooks/useColors";

export default function GeneralHeader({
    rightButton,
    replaceTo,
}: {
    rightButton?: { title: string; href: Href };
    replaceTo?: Href;
}) {
    const { color } = useColors();
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: widthScale(24),
                paddingVertical: heightScale(24),
            }}
        >
            <Pressable
                hitSlop={widthScale(20)}
                onPress={() =>
                    replaceTo ? router.push(replaceTo) : router.back()
                }
            >
                <Svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    //       xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M5.46991 9.99352C5.24824 9.99352 5.02658 9.91185 4.85157 9.73685L0.733242 5.61852C0.394909 5.28018 0.394909 4.72018 0.733242 4.38185L4.85157 0.263516C5.18991 -0.0748177 5.74991 -0.0748177 6.08824 0.263516C6.42658 0.601849 6.42658 1.16185 6.08824 1.50018L2.58824 5.00018L6.08824 8.50018C6.42658 8.83852 6.42658 9.39852 6.08824 9.73685C5.92491 9.91185 5.70324 9.99352 5.46991 9.99352Z"
                        fill="#979EB3"
                    />
                </Svg>
            </Pressable>

            {rightButton && (
                <TouchableOpacity
                    onPress={() => router.push(rightButton.href)}
                    style={{
                        paddingVertical: heightScale(7),
                        paddingHorizontal: widthScale(12),
                        borderRadius: widthScale(40),
                        backgroundColor: color.grey,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Manrope-Regular",
                            fontSize: fontScale(12),
                            color: color.textMain,
                        }}
                    >
                        {rightButton.title}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
