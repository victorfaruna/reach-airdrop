import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, widthScale } from "@/config/size";

import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

export default function SupportSettings() {
    const { color } = useColors();

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
            fontSize: fontScale(15),
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
            <Text style={styles.sectionTitle}>Support</Text>
            <View style={styles.card}>
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
                                d="M8.125 13.125C8.125 13.125 12.5 13.75 14.375 15.625H15C15.3452 15.625 15.625 15.3452 15.625 15V11.2106C16.1641 11.0719 16.5625 10.5824 16.5625 10C16.5625 9.41756 16.1641 8.92812 15.625 8.78937V5C15.625 4.65483 15.3452 4.375 15 4.375H14.375C12.5 6.25 8.125 6.875 8.125 6.875H5.625C4.93464 6.875 4.375 7.43464 4.375 8.125V11.875C4.375 12.5654 4.93464 13.125 5.625 13.125H6.25L6.875 16.25H8.125V13.125ZM9.375 7.91325C9.80206 7.82162 10.3297 7.69496 10.8996 7.52733C11.9484 7.21884 13.2812 6.73289 14.375 5.98411V14.0159C13.2812 13.2671 11.9484 12.7812 10.8996 12.4727C10.3297 12.3051 9.80206 12.1784 9.375 12.0868V7.91325ZM5.625 8.125H8.125V11.875H5.625V8.125Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>Notices</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={styles.sectionText}></Text>
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
                <TouchableOpacity
                    style={styles.cardItem}
                    onPress={() =>
                        router.push("/(routes)/settings/terms-and-policies")
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
                                d="M10 1.75L16.1627 3.1195C16.5055 3.196 16.75 3.49975 16.75 3.8515V11.3417C16.75 12.8462 15.9977 14.2517 14.746 15.0858L10 18.25L5.254 15.0858C4.0015 14.251 3.25 12.8463 3.25 11.3425V3.8515C3.25 3.49975 3.4945 3.196 3.83725 3.1195L10 1.75ZM10 3.28675L4.75 4.453V11.3417C4.75 12.3445 5.251 13.2812 6.08575 13.8378L10 16.4478L13.9142 13.8378C14.749 13.2812 15.25 12.3453 15.25 11.3425V4.453L10 3.2875V3.28675ZM13.339 7.1665L14.4003 8.227L9.62725 13L6.445 9.81775L7.5055 8.75725L9.6265 10.8783L13.339 7.16575V7.1665Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>
                            Terms and Policies
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={styles.sectionText}></Text>
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
                                d="M10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16ZM9.25 6.25H10.75V7.75H9.25V6.25ZM9.25 9.25H10.75V13.75H9.25V9.25Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>App Management</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: widthScale(4),
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.sectionText}>Latest</Text>
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
            </View>
        </View>
    );
}
