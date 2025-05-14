import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import MainButton from "@/components/Global/Button";
import { router } from "expo-router";

export default function ReferredUsers() {
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
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Referred Users</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Check out the number of cards you’ve gotten so far.
                        </Text>
                    </View>
                    {/* space */}
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Satoshi-Bold",
                                fontSize: fontScale(24),
                                color: color.textMain,
                            }}
                        >
                            <Text style={{ color: color.accent }}>Manny</Text>{" "}
                            has joined Reach!
                        </Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Tap the card to collect it.
                        </Text>
                    </View>
                    {/* space */}
                    <View
                        style={{
                            borderWidth: widthScale(3),
                            borderRadius: widthScale(16),
                            borderColor: color.accent,
                            backgroundColor: color.background2,
                            padding: widthScale(24),
                            alignItems: "center",
                            justifyContent: "center",
                            gap: heightScale(24),
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
                            onPress={() =>
                                router.push("/(routes)/rewards/card-collected")
                            }
                            style={{ width: "100%", height: heightScale(36) }}
                        >
                            <Text
                                style={{
                                    color: color.textMain2,
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(14),
                                }}
                            >
                                Collect
                            </Text>
                        </MainButton>
                    </View>
                    {/* space */}
                    <View
                        style={{
                            height: heightScale(48),
                            borderRadius: widthScale(8),
                            backgroundColor: color.background2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: widthScale(24),
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.pageText}>You've collected</Text>
                        <Text
                            style={[
                                styles.pageText,
                                { fontFamily: "Manrope-Bold" },
                            ]}
                        >
                            0P
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
