import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, scale, widthScale } from "@/config/size";
import Svg, { Defs, ClipPath, G, Rect, Path } from "react-native-svg";
import MainButton from "../Global/Button";
import { router } from "expo-router";

export default function Explore() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        container: {
            gap: widthScale(16),
        },

        sectionTitle: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(18),
            color: color.textMain,
        },

        inner: {
            backgroundColor: color.background2,
            gap: heightScale(16),
            padding: widthScale(24),
            borderRadius: heightScale(16),
        },

        sectionText: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(14),
            color: color.textMain,
        },
    });

    const ArrowIcon = () => (
        <Svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            //         xmlns="http://www.w3.org/2000/svg"
        >
            <G clip-path="url(#clip0_264_1944)">
                <Path
                    d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289L8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893C6.90237 0.683418 6.90237 1.31658 7.29289 1.70711L9.58579 4H1.5C0.947716 4 0.5 4.44772 0.5 5C0.5 5.55228 0.947716 6 1.5 6H9.58579L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12.7071 5.70711Z"
                    fill={color.textMain2}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_264_1944">
                    <Rect
                        width="13"
                        height="10"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Explore</Text>
            <View style={styles.inner}>
                <View
                    style={{
                        flexDirection: "row",
                        gap: widthScale(8),
                        alignItems: "center",
                    }}
                >
                    <Svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        //     xmlns="http://www.w3.org/2000/svg"
                    >
                        <Rect
                            width="32"
                            height="32"
                            rx="16"
                            fill={color.textMain}
                        />
                        <Rect
                            x="9.17505"
                            y="22.5"
                            width="13"
                            height="13.65"
                            transform="rotate(-90 9.17505 22.5)"
                            fill={color.accent}
                        />
                    </Svg>
                    <Text
                        style={[
                            styles.sectionText,
                            { fontSize: fontScale(15) },
                        ]}
                    >
                        Reach
                    </Text>
                </View>
                {/* space */}
                <View>
                    <Text style={styles.sectionText}>Missons</Text>
                    <Text
                        style={[
                            styles.sectionText,
                            {
                                fontFamily: "Manrope-Regular",
                                opacity: 0.8,
                                fontSize: fontScale(14),
                            },
                        ]}
                    >
                        Share post on X(Twitter) to get 10 points.
                    </Text>
                </View>

                {/* space */}
                <Text
                    style={[
                        styles.sectionText,
                        { fontFamily: "Manrope-Regular" },
                    ]}
                >
                    Reach Missions is a decentralized platform where users refer
                    and earn multiple points.
                </Text>

                {/* space */}

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: widthScale(19),
                    }}
                >
                    <MainButton
                        onPress={() =>
                            router.push("/(routes)/missions/share-post")
                        }
                        style={{
                            flex: 1,
                            height: scale(36),
                            gap: widthScale(4),
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Manrope-Bold",
                                color: color.textMain2,
                                fontSize: fontScale(14),
                            }}
                        >
                            Start
                        </Text>
                        <ArrowIcon />
                    </MainButton>
                    <Svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        //     xmlns="http://www.w3.org/2000/svg"
                    >
                        <Rect width="36" height="36" rx="8" fill="#333333" />
                        <Path
                            d="M13.75 13.5C14.0261 13.5 14.25 13.2761 14.25 13V11.25C14.25 11.0511 14.329 10.8603 14.4697 10.7197C14.6103 10.579 14.8011 10.5 15 10.5H24C24.1989 10.5 24.3897 10.579 24.5303 10.7197C24.671 10.8603 24.75 11.0511 24.75 11.25V21.75C24.75 21.9489 24.671 22.1397 24.5303 22.2803C24.3897 22.421 24.1989 22.5 24 22.5H22.25C21.9739 22.5 21.75 22.7239 21.75 23V24.75C21.75 25.164 21.4125 25.5 20.9948 25.5H12.0052C11.9063 25.5006 11.8083 25.4816 11.7167 25.4442C11.6252 25.4068 11.5419 25.3517 11.4717 25.282C11.4016 25.2123 11.3458 25.1294 11.3078 25.0381C11.2697 24.9468 11.2501 24.8489 11.25 24.75L11.2523 14.25C11.2523 13.836 11.5898 13.5 12.0075 13.5H13.75ZM13.2521 15C12.976 15 12.7522 15.2238 12.7521 15.4999L12.7501 23.4999C12.7501 23.7761 12.9739 24 13.2501 24H19.75C20.0261 24 20.25 23.7761 20.25 23.5V15.5C20.25 15.2239 20.0261 15 19.75 15H13.2521ZM15.75 13C15.75 13.2761 15.9739 13.5 16.25 13.5H21.25C21.5261 13.5 21.75 13.7239 21.75 14V20.5C21.75 20.7761 21.9739 21 22.25 21H22.75C23.0261 21 23.25 20.7761 23.25 20.5V12.5C23.25 12.2239 23.0261 12 22.75 12H16.25C15.9739 12 15.75 12.2239 15.75 12.5V13Z"
                            fill="white"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
}
