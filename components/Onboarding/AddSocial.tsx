import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";

export default function AddSocial() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        container: {
            gap: heightScale(16),
        },

        item: {
            height: heightScale(48),
            gap: widthScale(12),
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: color.textSub,
            borderRadius: widthScale(8),
            paddingHorizontal: widthScale(16),
            paddingVertical: widthScale(12),
        },

        text: {
            fontFamily: "Manrope-Regular",
            fontSize: fontScale(15),
            color: color.textMain,
        },
    });
    return (
        <View style={styles.container}>
            <View style={[styles.item, { borderColor: color.accent }]}>
                <Image
                    source={require("@/assets/icons/facebook.png")}
                    style={{
                        objectFit: "contain",
                        width: widthScale(20),
                        height: widthScale(20),
                    }}
                />
                <Text style={styles.text}> Connect Facebook</Text>
            </View>
            <View style={[styles.item, { borderColor: color.textMain }]}>
                <Image
                    source={require("@/assets/icons/twitter.png")}
                    style={{
                        width: widthScale(18),
                        objectFit: "contain",
                        height: widthScale(18),
                    }}
                />
                <Text style={styles.text}> Connect X (Twitter)</Text>
            </View>
            <View style={[styles.item, { opacity: 0.5 }]}>
                <Image
                    source={require("@/assets/icons/discord.png")}
                    style={{
                        objectFit: "contain",
                        width: widthScale(20),
                        height: widthScale(20),
                    }}
                />
                <Text style={styles.text}> Connect Discord</Text>
            </View>
        </View>
    );
}
