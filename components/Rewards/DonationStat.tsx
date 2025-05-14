import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, widthScale } from "@/config/size";

export default function DonationStat() {
    const { color } = useColors();
    const me = 5;
    const DATA = [
        {
            name: "Manny",
            points: 2250,
            amount: 1500,
            image: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            name: "StunnerJay",
            points: 2250,
            amount: 1200,
            image: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            name: "Fumzy005",
            points: 2250,
            amount: 1150,
            image: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            name: "Shola44",
            points: 2250,
            amount: 1100,
            image: require("@/assets/images/avatars/hs-4.png"),
        },
        {
            name: "Me",
            points: 2250,
            amount: 500,
            image: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            name: "StunnerJay",
            points: 2250,
            amount: 450,
            image: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            name: "Fumzy005",
            points: 2250,
            amount: 400,
            image: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            name: "Shola44",
            points: 55000,
            amount: 300,
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
                        me === index + 1 && { borderColor: color.accent },
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
                                ${item.amount.toLocaleString()} donated
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
                                me === index + 1 && { color: color.accent },
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
                            <Text style={styles.listText}>
                                {item.points.toLocaleString()}P
                            </Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}
