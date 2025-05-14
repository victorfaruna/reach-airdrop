import { View, Text } from "react-native";
import React from "react";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import MainButton from "../Global/Button";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

export default function DonationCTA() {
    const { color } = useColors();
    return (
        <View
            style={{
                padding: widthScale(16),
                backgroundColor: color.background2,
                borderRadius: widthScale(16),
                gap: heightScale(20),
            }}
        >
            <Text
                style={{
                    fontFamily: "Manrope-Bold",
                    fontSize: fontScale(16),
                    color: color.textMain,
                }}
            >
                Donation
            </Text>

            <Text
                style={{
                    fontFamily: "Manrope-Regular",
                    fontSize: fontScale(14),
                    lineHeight: heightScale(20),
                    color: color.textSub,
                }}
            >
                Support a Reach Initiative and earn rewards. Increase your
                airdrop points by X1, own a share of the Reach Token Passive
                Rewards.
            </Text>

            <MainButton
                style={{ width: "100%", height: heightScale(36) }}
                onPress={() => router.push("/(routes)/missions/donate")}
            >
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: fontScale(14),
                        color: color.textMain2,
                    }}
                >
                    Donate now
                </Text>
            </MainButton>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: widthScale(16),
                }}
            >
                <Svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16ZM9.25 6.25H10.75V7.75H9.25V6.25ZM9.25 9.25H10.75V13.75H9.25V9.25Z"
                        fill={color.accent2}
                    />
                </Svg>

                <Text
                    style={{
                        flex: 1,
                        fontFamily: "Manrope-Regular",
                        fontSize: fontScale(12),
                        lineHeight: heightScale(20),
                        color: color.textSub,
                    }}
                >
                    Your donation is split into a worthy cause and Reach
                    Initiatives in Agriculture Commodity, Real Estate and
                    Arbitrage.
                </Text>
            </View>
        </View>
    );
}
