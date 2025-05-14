import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useCallback, useRef } from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, scale, widthScale } from "@/config/size";
import MainButton from "@/components/Global/Button";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

export default function donateWithCard() {
    const { color } = useColors();
    const [amount, setAmount] = React.useState("500");

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
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Donate with Card</Text>
                    </View>
                    {/* space */}
                    <View style={{ gap: heightScale(8) }}>
                        <Text
                            style={{
                                fontFamily: "Manrope-Medium",
                                fontSize: fontScale(14),
                                color: color.textSub,
                            }}
                        >
                            Investment Amount
                        </Text>
                        <View
                            style={{
                                height: heightScale(52),
                                borderRadius: widthScale(8),
                                backgroundColor: color.background2,
                                paddingHorizontal: widthScale(16),
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: widthScale(8),
                            }}
                        >
                            <TextInput
                                value={amount}
                                onChangeText={setAmount}
                                style={{
                                    flex: 1,
                                    fontFamily: "Manrope-Regular",
                                    fontSize: fontScale(15),
                                    color: color.textMain,
                                }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: widthScale(3),
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Medium",
                                        fontSize: fontScale(15),
                                        color: color.textSub,
                                    }}
                                >
                                    USD
                                </Text>
                                <Svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    //       xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M3.39998 7.42578L8.83331 12.8591C9.47498 13.5008 10.525 13.5008 11.1666 12.8591L16.6 7.42578"
                                        stroke={color.textSub}
                                        strokeWidth="1.5"
                                        stroke-miterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    <View style={{ gap: heightScale(8) }}>
                        <Text
                            style={{
                                fontFamily: "Manrope-Medium",
                                fontSize: fontScale(14),
                                color: color.textSub,
                            }}
                        >
                            Active card
                        </Text>
                        <View
                            style={{
                                height: heightScale(52),
                                borderRadius: widthScale(8),
                                backgroundColor: color.background2,
                                paddingHorizontal: widthScale(16),
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: widthScale(8),
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Manrope-Regular",
                                    fontSize: fontScale(14),
                                    color: color.textMain,
                                }}
                            >
                                <Text style={{ fontFamily: "Manrope-Bold" }}>
                                    VISA
                                </Text>{" "}
                                **** **** **** 9098
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: widthScale(3),
                                }}
                            >
                                <Svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    //       xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M8.50005 12.3791L15.3941 5.48438L16.4553 6.54488L8.50005 14.5001L3.72705 9.72712L4.78755 8.66663L8.50005 12.3791Z"
                                        fill={color.accent}
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    {/* space */}
                    <MainButton
                        onPress={() =>
                            router.push(
                                "/(routes)/missions/donation-successful"
                            )
                        }
                    >
                        <Text
                            style={{
                                fontFamily: "Manrope-Bold",
                                fontSize: fontScale(14),
                                color: color.textMain2,
                            }}
                        >
                            Donate
                        </Text>
                    </MainButton>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
