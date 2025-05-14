import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import HomeHeader from "@/components/Header/HomeHeader";
import { heightScale, scale, widthScale } from "@/config/size";
import MissionCTA from "@/components/Home/MissionCTA";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import Balance from "@/components/Home/Balance";
import Explore from "@/components/Home/Explore";

export default function Home() {
    return (
        <CustomSafeAreaView>
            <View
                style={{
                    paddingHorizontal: widthScale(20),
                    paddingVertical: heightScale(20),
                }}
            >
                <HomeHeader />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ gap: scale(24), paddingHorizontal: scale(20) }}>
                    <Balance />
                    <Explore />
                    <MissionCTA />
                    <View style={{ height: 10 }} />
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        gap: scale(24),
    },
});
