import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, widthScale } from "@/config/size";
import Svg, { Path } from "react-native-svg";

export default function LeaderBoard() {
    const { color } = useColors();
    const DATA = [
        {
            name: "Manny",
            points: 67000,
            missions: 49,
            image: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            name: "StunnerJay",
            points: 67000,
            missions: 49,
            image: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            name: "Fumzy005",
            points: 60000,
            missions: 46,
            image: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            name: "Shola44",
            points: 55000,
            missions: 42,
            image: require("@/assets/images/avatars/hs-4.png"),
        },
        {
            name: "Manny",
            points: 67000,
            missions: 49,
            image: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            name: "StunnerJay",
            points: 67000,
            missions: 49,
            image: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            name: "Fumzy005",
            points: 60000,
            missions: 46,
            image: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            name: "Shola44",
            points: 55000,
            missions: 42,
            image: require("@/assets/images/avatars/hs-4.png"),
        },
    ];

    const styles = StyleSheet.create({
        listContainer: {
            gap: heightScale(16),
        },

        listItem: {
            height: heightScale(64),
            borderRadius: widthScale(16),
            borderWidth: 1,
            borderColor: color.grey,
            paddingHorizontal: widthScale(24),
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: color.grey,
        },

        listText: {
            fontFamily: "Satoshi-Medium",
            fontSize: fontScale(12),
            color: color.textMain,
        },

        listLeftContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(13),
        },

        listImage: {
            width: widthScale(40),
            height: widthScale(40),
        },
    });
    return (
        <View style={styles.listContainer}>
            {DATA.map((item, index) => (
                <View
                    style={[
                        styles.listItem,
                        index === 0 && { borderColor: color.accent2 },
                    ]}
                    key={index}
                >
                    <View style={styles.listLeftContainer}>
                        <Image source={item.image} style={styles.listImage} />
                        <View>
                            <Text
                                style={[
                                    styles.listText,
                                    {
                                        fontSize: fontScale(16),
                                        fontFamily: "Satoshi-Medium",
                                    },
                                ]}
                            >
                                {item.name}
                            </Text>
                            <Text
                                style={[
                                    styles.listText,
                                    { color: color.textSub },
                                ]}
                            >
                                {item.points.toLocaleString()}P
                            </Text>
                        </View>
                    </View>
                    {/* space */}
                    <View
                        style={{
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={[
                                styles.listText,
                                index === 0 && { color: color.accent2 },
                            ]}
                        >
                            #{index + 1}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M9 4.21875C9.6731 4.21875 10.2188 3.67309 10.2188 3H10.7812C10.7812 3.67309 11.3269 4.21875 12 4.21875V4.78125C11.3269 4.78125 10.7812 5.32691 10.7812 6H10.2188C10.2188 5.32691 9.6731 4.78125 9 4.78125V4.21875ZM2.5 7.5C4.15685 7.5 5.5 6.15686 5.5 4.5H6.5C6.5 6.15686 7.84315 7.5 9.5 7.5V8.5C7.84315 8.5 6.5 9.84315 6.5 11.5H5.5C5.5 9.84315 4.15685 8.5 2.5 8.5V7.5ZM4.438 8C5.09359 8.3638 5.63621 8.9064 6 9.562C6.36379 8.9064 6.90641 8.3638 7.562 8C6.90641 7.6362 6.36379 7.0936 6 6.438C5.63621 7.0936 5.09359 7.6362 4.438 8ZM10.625 9C10.625 9.89745 9.89745 10.625 9 10.625V11.375C9.89745 11.375 10.625 12.1026 10.625 13H11.375C11.375 12.1026 12.1026 11.375 13 11.375V10.625C12.1026 10.625 11.375 9.89745 11.375 9H10.625Z"
                                    fill={color.textMain}
                                />
                            </Svg>
                            <Text style={styles.listText}>{item.missions}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}
