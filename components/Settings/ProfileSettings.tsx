import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import { useThemeStore } from "@/store/themeStore";

export default function ProfileSettings() {
    const { color } = useColors();
    let theme = useThemeStore((state) => state.theme);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const styles = StyleSheet.create({
        container: {
            gap: heightScale(24),
        },

        sectionTitle: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(18),
            color: color.textMain,
        },

        sectionText: {
            fontFamily: "Manrope-Medium",
            fontSize: fontScale(12),
            color: color.textMain,
        },

        card: {
            backgroundColor: color.background2,
            borderRadius: heightScale(16),
            gap: heightScale(8),
        },

        cardItem: {
            height: heightScale(48),
            paddingHorizontal: widthScale(16),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: widthScale(16),
            borderBottomWidth: 1,
            borderBottomColor: color.background,
        },

        cardItemLabelContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(8),
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* space */}
                <TouchableOpacity
                    style={styles.cardItem}
                    onPress={() =>
                        router.push("/(routes)/settings/change-nickname")
                    }
                >
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M9.99991 13.75C12.7464 13.75 15.1487 14.9312 16.4552 16.6937L15.0737 17.347C14.0102 16.087 12.1352 15.25 9.99991 15.25C7.86466 15.25 5.98966 16.087 4.92616 17.347L3.54541 16.693C4.85191 14.9305 7.25341 13.75 9.99991 13.75ZM9.99991 2.5C10.9945 2.5 11.9483 2.89509 12.6516 3.59835C13.3548 4.30161 13.7499 5.25544 13.7499 6.25V8.5C13.7499 9.46635 13.3768 10.3954 12.7084 11.0933C12.0401 11.7913 11.1281 12.2043 10.1627 12.2463L9.99991 12.25C9.00535 12.25 8.05152 11.8549 7.34826 11.1517C6.645 10.4484 6.24991 9.49456 6.24991 8.5V6.25C6.24997 5.28365 6.62307 4.35463 7.2914 3.65667C7.95974 2.95871 8.87172 2.54569 9.83716 2.50375L9.99991 2.5ZM9.99991 4C9.426 3.99997 8.87377 4.21924 8.45621 4.61296C8.03865 5.00668 7.78733 5.54508 7.75366 6.118L7.74991 6.25V8.5C7.74935 9.08568 7.97717 9.6485 8.38499 10.0689C8.7928 10.4892 9.34846 10.734 9.93388 10.7512C10.5193 10.7684 11.0884 10.5566 11.5201 10.1609C11.9519 9.76519 12.2124 9.2167 12.2462 8.632L12.2499 8.5V6.25C12.2499 5.65326 12.0129 5.08097 11.5909 4.65901C11.1689 4.23705 10.5966 4 9.99991 4Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Nickname
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: widthScale(4),
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.sectionText}>officialokpoba</Text>
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M12.1547 12.0003L9.60864 9.45514L10.8812 8.18164L14.6999 12.0003L10.8812 15.819L9.60864 14.5455L12.1547 12.0003Z"
                                fill={color.textMain}
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
                {/* space */}
                <TouchableOpacity style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M3.25 3.75H16.75C16.9489 3.75 17.1397 3.82902 17.2803 3.96967C17.421 4.11032 17.5 4.30109 17.5 4.5V15.5C17.5 15.6989 17.421 15.8897 17.2803 16.0303C17.1397 16.171 16.9489 16.25 16.75 16.25H3.25C3.05109 16.25 2.86032 16.171 2.71967 16.0303C2.57902 15.8897 2.5 15.6989 2.5 15.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM16 6.9285L10.054 12.2535L4 6.912V14.75H16V6.9285ZM4.38325 5.25L10.0457 10.2465L15.6265 5.25H4.38325Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Email
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={styles.sectionText}>
                            officialokpoba@gmail.com
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* space */}
                <TouchableOpacity style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M7.5 3.75H3.125L8.28804 10.6341L3.40622 16.2499H5.06249L9.05519 11.6569L12.5 16.25H16.875L11.4948 9.07644L16.1251 3.75H14.4688L10.7277 8.05361L7.5 3.75ZM13.125 15L5.625 5H6.875L14.375 15H13.125Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Twitter
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={styles.sectionText}>officialokpoba</Text>
                    </View>
                </TouchableOpacity>
                {/* space */}
                <TouchableOpacity style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M3.25 3.75H16.75C16.9489 3.75 17.1397 3.82902 17.2803 3.96967C17.421 4.11032 17.5 4.30109 17.5 4.5V15.5C17.5 15.6989 17.421 15.8897 17.2803 16.0303C17.1397 16.171 16.9489 16.25 16.75 16.25H3.25C3.05109 16.25 2.86032 16.171 2.71967 16.0303C2.57902 15.8897 2.5 15.6989 2.5 15.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM16 6.9285L10.054 12.2535L4 6.912V14.75H16V6.9285ZM4.38325 5.25L10.0457 10.2465L15.6265 5.25H4.38325Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Invitation
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={styles.sectionText}>10 invites</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
