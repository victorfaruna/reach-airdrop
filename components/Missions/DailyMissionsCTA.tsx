import { View, Text } from "react-native";
import React from "react";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import MainButton from "../Global/Button";
import { router } from "expo-router";

export default function DailyMissionsCTA() {
    const { color } = useColors();
    return (
        <View
            style={{
                padding: widthScale(16),
                backgroundColor: color.background2,
                gap: heightScale(16),
                borderRadius: widthScale(16),
            }}
        >
            {/* space */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: fontScale(16),
                        color: color.textMain,
                    }}
                >
                    DailyMissions
                </Text>

                <View
                    style={{
                        backgroundColor: color.grey,
                        borderRadius: widthScale(40),
                        paddingVertical: heightScale(5),
                        paddingHorizontal: widthScale(12),
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Manrope-Regular",
                            fontSize: fontScale(12),
                            color: color.textMain,
                        }}
                    >
                        10 points
                    </Text>
                </View>
            </View>
            {/* space */}
            <Text
                style={{
                    fontFamily: "Manrope-Regular",
                    fontSize: fontScale(14),
                    color: color.textSub,
                }}
            >
                Share daily posts on your socials to earn bonus points and
                maintain your streak!
            </Text>
            {/* space */}
            <MainButton
                style={{ height: heightScale(36) }}
                onPress={() => router.push("/(routes)/missions/share-post")}
            >
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: fontScale(14),
                        color: color.textMain2,
                    }}
                >
                    Get Reward
                </Text>
            </MainButton>
        </View>
    );
}
