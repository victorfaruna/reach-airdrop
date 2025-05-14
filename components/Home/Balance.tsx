import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColors";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";

export default function Balance() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        balanceContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: color.background2,
            paddingVertical: scale(15),
            paddingHorizontal: scale(30),
            borderRadius: scale(16),
        },

        balanceLabel: {
            color: color.textSub,
            fontFamily: "Satoshi-Regular",
            fontSize: fontScale(12),
        },

        balanceText: {
            color: color.textMain,
            fontFamily: "Satoshi-Bold",
            fontSize: fontScale(20),
        },
    });
    return (
        <View style={styles.balanceContainer}>
            <View>
                <Text style={styles.balanceLabel}>Total Points</Text>
                <Text style={styles.balanceText}>310</Text>
            </View>
            {/* ... */}
            <View>
                <Text style={styles.balanceLabel}>Today&apos;s Points</Text>
                <Text style={styles.balanceText}>
                    110
                    <Svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M10.25 9.871L8.129 11.9927L7.06775 10.9323L10.25 7.75L13.4322 10.9323L12.371 11.9927L10.25 9.871Z"
                            fill={color.accent}
                        />
                    </Svg>
                </Text>
            </View>
        </View>
    );
}
