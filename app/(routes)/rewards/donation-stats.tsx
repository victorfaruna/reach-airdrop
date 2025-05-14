import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import LeaderBoard from "@/components/Rewards/LeaderBoard";
import DonationStat from "@/components/Rewards/DonationStat";

export default function DonationStats() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        pageContainer: {
            gap: heightScale(24),
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
            <GeneralHeader
                rightButton={{
                    title: "Leadership stats",
                    href: "/(tabs)/rewards",
                }}
            />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Donation Stats</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Compare your points with others and see where you
                            stand.
                        </Text>
                    </View>
                    {/* space */}
                    <View
                        style={{
                            padding: widthScale(24),
                            backgroundColor: color.background2,
                            borderRadius: widthScale(16),
                            justifyContent: "center",
                            alignItems: "center",
                            gap: heightScale(8),
                        }}
                    >
                        <Image
                            source={require("@/assets/images/donation.png")}
                            style={{
                                width: widthScale(44),
                                height: widthScale(44),
                                objectFit: "contain",
                            }}
                        />
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(24),
                                    color: color.textMain,
                                }}
                            >
                                $500
                            </Text>
                            <Text
                                style={[
                                    styles.pageText,
                                    { color: color.textSub },
                                ]}
                            >
                                Donations made so far
                            </Text>
                        </View>
                    </View>
                    {/* space */}
                    <DonationStat />
                    {/* space */}
                    <View
                        style={{
                            padding: widthScale(16),
                            borderRadius: widthScale(16),
                            backgroundColor: color.background2,
                            paddingHorizontal: widthScale(16),
                            flexDirection: "row",
                            gap: widthScale(8),
                            overflow: "hidden",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                fontFamily: "Manrope-Regular",
                                fontSize: fontScale(15),
                                color: color.textMain,
                            }}
                        >
                            User will receive a 1.5X multiplier in points and a
                            500 $REACH passive rewards unfolding.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
