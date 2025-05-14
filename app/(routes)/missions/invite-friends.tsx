import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import MainButton from "@/components/Global/Button";
import Svg, { Path, Rect } from "react-native-svg";
import LeaderBoard from "@/components/Rewards/LeaderBoard";

export default function invite() {
    const { color } = useColors();

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
                        <Text style={styles.pageTitle}>Invite Friends</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            You will receive cards while your invited friends
                            will get bonus points.
                        </Text>
                    </View>

                    <View
                        style={{
                            padding: widthScale(24),
                            backgroundColor: color.background2,
                            borderRadius: widthScale(16),
                            justifyContent: "center",
                            alignItems: "center",
                            gap: heightScale(8),
                        }}
                    >
                        <Image
                            source={require("@/assets/images/points.png")}
                            style={{
                                width: widthScale(44),
                                height: widthScale(44),
                                objectFit: "contain",
                            }}
                        />
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(24),
                                    color: color.textMain,
                                }}
                            >
                                210P
                            </Text>
                            <Text
                                style={[
                                    styles.pageText,
                                    { color: color.textSub },
                                ]}
                            >
                                Refer friends to earn more points
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: widthScale(8),
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <MainButton
                                style={{ flex: 1, height: heightScale(36) }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Bold",
                                        fontSize: fontScale(14),
                                        color: color.textMain2,
                                    }}
                                >
                                    Invite Friends
                                </Text>
                            </MainButton>
                            <Svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Rect
                                    width="36"
                                    height="36"
                                    rx="8"
                                    fill={color.grey}
                                />
                                <Path
                                    d="M13.75 13.5C14.0261 13.5 14.25 13.2761 14.25 13V11.25C14.25 11.0511 14.329 10.8603 14.4697 10.7197C14.6103 10.579 14.8011 10.5 15 10.5H24C24.1989 10.5 24.3897 10.579 24.5303 10.7197C24.671 10.8603 24.75 11.0511 24.75 11.25V21.75C24.75 21.9489 24.671 22.1397 24.5303 22.2803C24.3897 22.421 24.1989 22.5 24 22.5H22.25C21.9739 22.5 21.75 22.7239 21.75 23V24.75C21.75 25.164 21.4125 25.5 20.9948 25.5H12.0052C11.9063 25.5006 11.8083 25.4816 11.7167 25.4442C11.6252 25.4068 11.5419 25.3517 11.4717 25.282C11.4016 25.2123 11.3458 25.1294 11.3078 25.0381C11.2697 24.9468 11.2501 24.8489 11.25 24.75L11.2523 14.25C11.2523 13.836 11.5898 13.5 12.0075 13.5H13.75ZM13.2521 15C12.976 15 12.7522 15.2238 12.7521 15.4999L12.7501 23.4999C12.7501 23.7761 12.9739 24 13.2501 24H19.75C20.0261 24 20.25 23.7761 20.25 23.5V15.5C20.25 15.2239 20.0261 15 19.75 15H13.2521ZM15.75 13C15.75 13.2761 15.9739 13.5 16.25 13.5H21.25C21.5261 13.5 21.75 13.7239 21.75 14V20.5C21.75 20.7761 21.9739 21 22.25 21H22.75C23.0261 21 23.25 20.7761 23.25 20.5V12.5C23.25 12.2239 23.0261 12 22.75 12H16.25C15.9739 12 15.75 12.2239 15.75 12.5V13Z"
                                    fill={color.textMain}
                                />
                            </Svg>
                        </View>
                    </View>

                    <View
                        style={{
                            padding: widthScale(24),
                            gap: heightScale(24),
                            backgroundColor: color.background2,
                            borderRadius: widthScale(16),
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: widthScale(16),
                                justifyContent: "space-between",
                            }}
                        >
                            <Svg
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
                                    fill={color.grey}
                                />
                                <Path
                                    d="M16.5 31.5C16.5 29.9087 17.1321 28.3826 18.2574 27.2574C19.3826 26.1321 20.9087 25.5 22.5 25.5C24.0913 25.5 25.6174 26.1321 26.7426 27.2574C27.8679 28.3826 28.5 29.9087 28.5 31.5H27C27 30.3065 26.5259 29.1619 25.682 28.318C24.8381 27.4741 23.6935 27 22.5 27C21.3065 27 20.1619 27.4741 19.318 28.318C18.4741 29.1619 18 30.3065 18 31.5H16.5ZM22.5 24.75C20.0138 24.75 18 22.7362 18 20.25C18 17.7638 20.0138 15.75 22.5 15.75C24.9862 15.75 27 17.7638 27 20.25C27 22.7362 24.9862 24.75 22.5 24.75ZM22.5 23.25C24.1575 23.25 25.5 21.9075 25.5 20.25C25.5 18.5925 24.1575 17.25 22.5 17.25C20.8425 17.25 19.5 18.5925 19.5 20.25C19.5 21.9075 20.8425 23.25 22.5 23.25ZM28.713 26.0273C29.767 26.5019 30.6615 27.2709 31.2889 28.2418C31.9164 29.2126 32.2501 30.344 32.25 31.5H30.75C30.7502 30.633 30.4999 29.7844 30.0293 29.0562C29.5587 28.328 28.8878 27.7512 28.0972 27.3953L28.7123 26.0273H28.713ZM28.197 17.5598C28.9526 17.8712 29.5987 18.4002 30.0533 19.0794C30.5078 19.7587 30.7503 20.5577 30.75 21.375C30.7503 22.4042 30.3658 23.3964 29.6719 24.1566C28.978 24.9168 28.025 25.3901 27 25.4835V23.9738C27.5557 23.8942 28.0713 23.6385 28.471 23.2443C28.8707 22.8502 29.1335 22.3382 29.2209 21.7837C29.3082 21.2292 29.2155 20.6612 28.9563 20.1633C28.6971 19.6653 28.2851 19.2636 27.7808 19.017L28.197 17.5598Z"
                                    fill={color.textMain}
                                />
                            </Svg>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Bold",
                                        fontSize: fontScale(18),
                                        lineHeight: heightScale(28),
                                        color: color.textMain,
                                    }}
                                >
                                    Friend’s Card
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Regular",
                                        fontSize: fontScale(12),
                                        lineHeight: heightScale(20),
                                        color: color.textSub,
                                    }}
                                >
                                    When your invited friends join over, you
                                    will receive a card as as reward. Keep these
                                    cards for future benefits and surprises.
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: widthScale(16),
                                justifyContent: "space-between",
                            }}
                        >
                            <Svg
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
                                    fill={color.grey}
                                />
                                <Path
                                    d="M16.5 31.5C16.5 29.9087 17.1321 28.3826 18.2574 27.2574C19.3826 26.1321 20.9087 25.5 22.5 25.5C24.0913 25.5 25.6174 26.1321 26.7426 27.2574C27.8679 28.3826 28.5 29.9087 28.5 31.5H27C27 30.3065 26.5259 29.1619 25.682 28.318C24.8381 27.4741 23.6935 27 22.5 27C21.3065 27 20.1619 27.4741 19.318 28.318C18.4741 29.1619 18 30.3065 18 31.5H16.5ZM22.5 24.75C20.0138 24.75 18 22.7362 18 20.25C18 17.7638 20.0138 15.75 22.5 15.75C24.9862 15.75 27 17.7638 27 20.25C27 22.7362 24.9862 24.75 22.5 24.75ZM22.5 23.25C24.1575 23.25 25.5 21.9075 25.5 20.25C25.5 18.5925 24.1575 17.25 22.5 17.25C20.8425 17.25 19.5 18.5925 19.5 20.25C19.5 21.9075 20.8425 23.25 22.5 23.25ZM28.713 26.0273C29.767 26.5019 30.6615 27.2709 31.2889 28.2418C31.9164 29.2126 32.2501 30.344 32.25 31.5H30.75C30.7502 30.633 30.4999 29.7844 30.0293 29.0562C29.5587 28.328 28.8878 27.7512 28.0972 27.3953L28.7123 26.0273H28.713ZM28.197 17.5598C28.9526 17.8712 29.5987 18.4002 30.0533 19.0794C30.5078 19.7587 30.7503 20.5577 30.75 21.375C30.7503 22.4042 30.3658 23.3964 29.6719 24.1566C28.978 24.9168 28.025 25.3901 27 25.4835V23.9738C27.5557 23.8942 28.0713 23.6385 28.471 23.2443C28.8707 22.8502 29.1335 22.3382 29.2209 21.7837C29.3082 21.2292 29.2155 20.6612 28.9563 20.1633C28.6971 19.6653 28.2851 19.2636 27.7808 19.017L28.197 17.5598Z"
                                    fill={color.textMain}
                                />
                            </Svg>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Bold",
                                        fontSize: fontScale(18),
                                        lineHeight: heightScale(28),
                                        color: color.textMain,
                                    }}
                                >
                                    Ongoing Missions
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Regular",
                                        fontSize: fontScale(12),
                                        lineHeight: heightScale(20),
                                        color: color.textSub,
                                    }}
                                >
                                    Enjoy the benefits over and over! Please
                                    make sure that using improper methods may
                                    disqualify rewards.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            gap: heightScale(24),
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(24),
                                    color: color.textMain,
                                }}
                            >
                                Leadership Board
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope-Regular",
                                    fontSize: fontScale(15),
                                    color: color.textSub,
                                }}
                            >
                                Updated 5 minutes ago
                            </Text>
                        </View>

                        <LeaderBoard />
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
