import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import MainButton from "@/components/Global/Button";
import CardCollected from "@/components/Rewards/CardCollected";

export default function CardCollect() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        pageContainer: {
            gap: heightScale(48),
            paddingHorizontal: widthScale(24),
        },

        pageTitle: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(24),
            color: color.textMain,
        },

        pageText: {
            fontFamily: "Manrope-Regular",
            fontSize: fontScale(15),
            color: color.textMain,
        },
    });
    return (
        <CustomSafeAreaView>
            <GeneralHeader replaceTo="/(tabs)" />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <CardCollected />
                    <View
                        style={{
                            borderWidth: widthScale(3),
                            borderRadius: widthScale(16),
                            borderColor: color.accent,
                            backgroundColor: color.background2,
                            padding: widthScale(24),
                            alignItems: "center",
                            justifyContent: "center",
                            gap: heightScale(16),
                        }}
                    >
                        <Image
                            style={{
                                width: widthScale(64),
                                height: widthScale(64),
                            }}
                            source={require("@/assets/images/avatars/hs-3.png")}
                        />
                        <Text
                            style={{
                                fontFamily: "Satoshi-Bold",
                                fontSize: fontScale(20),
                                lineHeight: fontScale(28),
                                color: color.textMain,
                            }}
                        >
                            Manny
                        </Text>
                        <Image
                            source={require("@/assets/images/diamond.png")}
                            style={{
                                width: widthScale(48),
                                height: widthScale(48),
                            }}
                        />
                        <MainButton
                            disabled
                            style={{
                                width: "100%",
                                height: heightScale(36),
                                backgroundColor: color.grey,
                            }}
                        >
                            <Text
                                style={{
                                    color: color.accent,
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(14),
                                }}
                            >
                                Collected
                            </Text>
                        </MainButton>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
