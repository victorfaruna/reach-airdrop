import { View, Text } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";

export default function activities() {
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
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Activities</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Check out the number of cards you’ve gotten so far.
                        </Text>
                    </View>
                    <View
                        style={{
                            height: heightScale(48),
                            borderRadius: widthScale(8),
                            backgroundColor: color.background2,
                            paddingHorizontal: widthScale(16),
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Manrope-Regular",
                                fontSize: fontScale(16),
                                color: color.textMain,
                            }}
                        >
                            You’ve collected{" "}
                            <Text style={{ fontFamily: "Manrope-Bold" }}>
                                0 Cards
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
