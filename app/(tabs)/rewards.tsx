import { View, Text } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import LeaderBoard from "@/components/Rewards/LeaderBoard";
import Svg, { Path } from "react-native-svg";

export default function rewards() {
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
                    title: "Donation stats",
                    href: "/(routes)/rewards/donation-stats",
                }}
            />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Leadership Board</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Compare your points with others and see where you
                            stand.
                        </Text>
                    </View>
                    {/* space */}
                    <LeaderBoard />
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
                        <Svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M18 8.4375C19.3462 8.4375 20.4375 7.34619 20.4375 6H21.5625C21.5625 7.34619 22.6538 8.4375 24 8.4375V9.5625C22.6538 9.5625 21.5625 10.6538 21.5625 12H20.4375C20.4375 10.6538 19.3462 9.5625 18 9.5625V8.4375ZM5 15C8.31371 15 11 12.3137 11 9H13C13 12.3137 15.6863 15 19 15V17C15.6863 17 13 19.6863 13 23H11C11 19.6863 8.31371 17 5 17V15ZM8.87601 16C10.1872 16.7276 11.2724 17.8128 12 19.124C12.7276 17.8128 13.8128 16.7276 15.124 16C13.8128 15.2724 12.7276 14.1872 12 12.876C11.2724 14.1872 10.1872 15.2724 8.87601 16ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C19.7949 22.75 21.25 24.2051 21.25 26H22.75C22.75 24.2051 24.2051 22.75 26 22.75V21.25C24.2051 21.25 22.75 19.7949 22.75 18H21.25Z"
                                fill={color.accent}
                            />
                        </Svg>
                        <Text
                            style={{
                                flex: 1,
                                fontFamily: "Manrope-Regular",
                                fontSize: fontScale(15),
                                color: color.textMain,
                            }}
                        >
                            Sparkles means the number of missions participants
                            has engaged in.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
