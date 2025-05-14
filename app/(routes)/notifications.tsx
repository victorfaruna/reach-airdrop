import { View, Text } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import EmptyNotifications from "@/components/Notifications/EmptyNotifications";

export default function Notifications() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        pageContainer: {
            flex: 1,
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
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Notifications</Text>
                    </View>
                    <EmptyNotifications />
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
