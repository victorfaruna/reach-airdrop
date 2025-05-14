import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontScale, scale } from "@/config/size";
import Svg, { Path, Rect } from "react-native-svg";
import { router } from "expo-router";
import CardCollected from "@/components/Rewards/CardCollected";

export default function UserReferred() {
    const [cardCollected, setCardCollected] = useState(false);

    const hadleCardCollect = () => {
        setCardCollected(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        padding: scale(24),
                        gap: scale(24),
                        alignItems: "center",
                    }}
                >
                    <View
                        className="header"
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Svg
                            onPress={() => router.back()}
                            hitSlop={scale(20)}
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            //   xmlns="http://www.w3.org/2000/svg"
                        >
                            <Rect
                                width="48"
                                height="48"
                                rx="24"
                                fill="#F7FAF6"
                            />
                            <Path
                                d="M24.0001 22.7275L28.4551 18.2725L29.7277 19.5451L25.2727 24.0001L29.7277 28.4551L28.4551 29.7277L24.0001 25.2727L19.5451 29.7277L18.2725 28.4551L22.7275 24.0001L18.2725 19.5451L19.5451 18.2725L24.0001 22.7275Z"
                                fill="#0D140A"
                            />
                        </Svg>
                    </View>

                    {!cardCollected ? (
                        <View style={{ alignItems: "center" }}>
                            <Text
                                style={{
                                    fontFamily: "Satoshi-Bold",
                                    fontSize: scale(28),
                                    lineHeight: scale(38),
                                    color: "#0D140A",
                                }}
                            >
                                <Text style={{ color: "#5CC738" }}>Manny</Text>{" "}
                                has joined Over
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Satoshi-Regular",
                                    fontSize: scale(16),
                                    lineHeight: scale(20),
                                    color: "#576652",
                                }}
                            >
                                Tap the card to collect it.
                            </Text>
                        </View>
                    ) : (
                        <CardCollected />
                    )}

                    <View
                        style={{
                            width: "100%",
                            backgroundColor: "#F2FAEF",
                            borderRadius: scale(16),
                            padding: scale(24),
                            gap: cardCollected ? scale(16) : scale(24),
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={
                                require("@/assets/images/headshot-1.png") as any
                            }
                            style={{
                                width: scale(64),
                                height: scale(64),
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: "Satoshi-Medium",
                                fontSize: fontScale(24),
                                lineHeight: fontScale(34),
                                color: "#0D140A",
                            }}
                        >
                            Manny
                        </Text>

                        <Image
                            source={
                                require("@/assets/images/diamond.png") as any
                            }
                            style={{
                                width: cardCollected ? scale(48) : scale(80),
                                height: cardCollected ? scale(48) : scale(80),
                            }}
                        />

                        {!cardCollected && (
                            <TouchableOpacity
                                onPress={hadleCardCollect}
                                style={{
                                    width: "100%",
                                    height: scale(52),
                                    backgroundColor: "#5CC738",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: scale(8),
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Satoshi-Medium",
                                        fontSize: fontScale(16),
                                        lineHeight: fontScale(20),
                                        color: "#fff",
                                    }}
                                >
                                    Collect
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {!cardCollected && (
                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: scale(18),
                                paddingVertical: scale(16),
                                backgroundColor: "#F2FAEF",
                                borderRadius: scale(8),
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Satoshi-Medium",
                                    fontSize: fontScale(16),
                                    lineHeight: fontScale(20),
                                    color: "#0D140A",
                                }}
                            >
                                You&apos;ve collected
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Satoshi-Bold",
                                    fontSize: fontScale(16),
                                    lineHeight: fontScale(20),
                                    color: "#0D140A",
                                }}
                            >
                                0P
                            </Text>
                        </View>
                    )}
                    {/* end */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        gap: scale(24),
    },
});
