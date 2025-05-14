import { Image, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import MainButton from "@/components/Global/Button";
import { router } from "expo-router";

export default function completed() {
    const { color } = useColors();
    return (
        <CustomSafeAreaView style={{ paddingBottom: heightScale(24) }}>
            <View
                style={{
                    flex: 1,
                    gap: heightScale(4),
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={require("@/assets/images/hurray.png")}
                    style={{
                        width: widthScale(74),
                        height: widthScale(74),
                        objectFit: "contain",
                    }}
                />
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: fontScale(24),
                        color: color.textMain,
                    }}
                >
                    Mission Completed
                </Text>
                <Text
                    style={{
                        fontFamily: "Manrope-Medium",
                        fontSize: fontScale(14),
                        color: color.textSub,
                    }}
                >
                    You’ve completed this mission and earned 10P.
                </Text>
            </View>
            <MainButton
                style={{ marginHorizontal: widthScale(24) }}
                onPress={() => router.replace("/(tabs)")}
            >
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: fontScale(14),
                        color: color.textMain2,
                    }}
                >
                    Continue
                </Text>
            </MainButton>
        </CustomSafeAreaView>
    );
}
