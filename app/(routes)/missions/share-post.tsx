import { View, Text } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import Svg, { Path, Rect } from "react-native-svg";
import MainButton from "@/components/Global/Button";
import { router } from "expo-router";

export default function SharePost() {
    const { color } = useColors();

    const styles = StyleSheet.create({
        pageContainer: {
            flex: 1,
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
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.pageContainer}>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            gap: heightScale(24),
                            borderBottomWidth: widthScale(1),
                            borderBottomColor: color.grey,
                            paddingBottom: heightScale(16),
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: widthScale(8),
                            }}
                        >
                            <Svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
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
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(14),
                                    color: color.textMain,
                                }}
                            >
                                Reach
                            </Text>
                        </View>

                        <View
                            style={{
                                backgroundColor: color.grey,
                                height: heightScale(28),
                                borderRadius: widthScale(40),
                                paddingHorizontal: widthScale(12),
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={[
                                    styles.pageText,
                                    { fontSize: fontScale(12) },
                                ]}
                            >
                                In Progress
                            </Text>
                        </View>
                    </View>
                    <View
                        id="CARD"
                        style={{
                            backgroundColor: color.background2,
                            borderRadius: heightScale(16),
                            padding: heightScale(24),
                            gap: heightScale(16),
                        }}
                    >
                        <View
                            id="HEAD"
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: widthScale(8),
                            }}
                        >
                            <View id="LEFT">
                                <Text style={styles.pageText}>Missions</Text>
                                <Text
                                    style={[
                                        styles.pageText,
                                        {
                                            fontSize: fontScale(10),
                                            color: color.textSub,
                                        },
                                    ]}
                                >
                                    Share post on X(Twitter) to get Reach points
                                </Text>
                            </View>
                            <View
                                style={{
                                    height: heightScale(26),
                                    borderRadius: widthScale(40),
                                    backgroundColor: color.grey,
                                    paddingHorizontal: widthScale(12),
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={[
                                        styles.pageText,
                                        { fontSize: fontScale(12) },
                                    ]}
                                >
                                    10 Points
                                </Text>
                            </View>
                        </View>

                        <Text
                            style={[
                                styles.pageText,
                                { fontSize: fontScale(13) },
                            ]}
                        >
                            Hey Everyone! I just got registered on Reach Airdrop
                            - A decentralized platform where users get points
                            for referring people and performing other tasks.
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: widthScale(16),
                            }}
                        >
                            <MainButton
                                style={{ flex: 1, height: heightScale(36) }}
                            >
                                <Text
                                    style={[
                                        styles.pageText,
                                        {
                                            fontSize: fontScale(14),
                                            fontFamily: "Manrope-Bold",
                                            color: color.background,
                                        },
                                    ]}
                                >
                                    Share on X
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
                            height: heightScale(48),
                            borderRadius: widthScale(8),
                            backgroundColor: color.background2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: widthScale(24),
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{ flexDirection: "row", gap: widthScale(8) }}
                        >
                            <Svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                //         xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M12 11.1C13.1935 11.1 14.3381 11.5741 15.182 12.418C16.0259 13.2619 16.5 14.4065 16.5 15.6V21H14.7V15.6C14.7 14.9113 14.4369 14.2486 13.9644 13.7476C13.492 13.2465 12.8459 12.9449 12.1584 12.9045L12 12.9C11.3113 12.9 10.6486 13.1631 10.1476 13.6356C9.64649 14.108 9.3449 14.7541 9.3045 15.4416L9.3 15.6V21H7.5V15.6C7.5 14.4065 7.97411 13.2619 8.81802 12.418C9.66193 11.5741 10.8065 11.1 12 11.1ZM6.15 13.8C6.4011 13.8 6.645 13.8297 6.879 13.8846C6.72512 14.3427 6.63399 14.8195 6.6081 15.3021L6.6 15.6V15.6774C6.49655 15.6404 6.38894 15.6162 6.2796 15.6054L6.15 15.6C5.81441 15.6 5.49085 15.725 5.24242 15.9507C4.994 16.1763 4.83852 16.4864 4.8063 16.8204L4.8 16.95V21H3V16.95C3 16.1146 3.33187 15.3134 3.92261 14.7226C4.51335 14.1319 5.31457 13.8 6.15 13.8ZM17.85 13.8C18.6854 13.8 19.4866 14.1319 20.0774 14.7226C20.6681 15.3134 21 16.1146 21 16.95V21H19.2V16.95C19.2 16.6144 19.075 16.2908 18.8493 16.0424C18.6237 15.794 18.3136 15.6385 17.9796 15.6063L17.85 15.6C17.6925 15.6 17.5413 15.627 17.4 15.6765V15.6C17.4 15.0006 17.3028 14.4246 17.1219 13.8864C17.355 13.8297 17.5989 13.8 17.85 13.8ZM6.15 8.4C6.74674 8.4 7.31903 8.63705 7.74099 9.05901C8.16295 9.48097 8.4 10.0533 8.4 10.65C8.4 11.2467 8.16295 11.819 7.74099 12.241C7.31903 12.6629 6.74674 12.9 6.15 12.9C5.55326 12.9 4.98097 12.6629 4.55901 12.241C4.13705 11.819 3.9 11.2467 3.9 10.65C3.9 10.0533 4.13705 9.48097 4.55901 9.05901C4.98097 8.63705 5.55326 8.4 6.15 8.4ZM17.85 8.4C18.4467 8.4 19.019 8.63705 19.441 9.05901C19.8629 9.48097 20.1 10.0533 20.1 10.65C20.1 11.2467 19.8629 11.819 19.441 12.241C19.019 12.6629 18.4467 12.9 17.85 12.9C17.2533 12.9 16.681 12.6629 16.259 12.241C15.8371 11.819 15.6 11.2467 15.6 10.65C15.6 10.0533 15.8371 9.48097 16.259 9.05901C16.681 8.63705 17.2533 8.4 17.85 8.4ZM6.15 10.2C6.03065 10.2 5.91619 10.2474 5.8318 10.3318C5.74741 10.4162 5.7 10.5307 5.7 10.65C5.7 10.7693 5.74741 10.8838 5.8318 10.9682C5.91619 11.0526 6.03065 11.1 6.15 11.1C6.26935 11.1 6.38381 11.0526 6.4682 10.9682C6.55259 10.8838 6.6 10.7693 6.6 10.65C6.6 10.5307 6.55259 10.4162 6.4682 10.3318C6.38381 10.2474 6.26935 10.2 6.15 10.2ZM17.85 10.2C17.7307 10.2 17.6162 10.2474 17.5318 10.3318C17.4474 10.4162 17.4 10.5307 17.4 10.65C17.4 10.7693 17.4474 10.8838 17.5318 10.9682C17.6162 11.0526 17.7307 11.1 17.85 11.1C17.9693 11.1 18.0838 11.0526 18.1682 10.9682C18.2526 10.8838 18.3 10.7693 18.3 10.65C18.3 10.5307 18.2526 10.4162 18.1682 10.3318C18.0838 10.2474 17.9693 10.2 17.85 10.2ZM12 3C12.9548 3 13.8705 3.37928 14.5456 4.05442C15.2207 4.72955 15.6 5.64522 15.6 6.6C15.6 7.55478 15.2207 8.47045 14.5456 9.14558C13.8705 9.82072 12.9548 10.2 12 10.2C11.0452 10.2 10.1295 9.82072 9.45442 9.14558C8.77928 8.47045 8.4 7.55478 8.4 6.6C8.4 5.64522 8.77928 4.72955 9.45442 4.05442C10.1295 3.37928 11.0452 3 12 3ZM12 4.8C11.5226 4.8 11.0648 4.98964 10.7272 5.32721C10.3896 5.66477 10.2 6.12261 10.2 6.6C10.2 7.07739 10.3896 7.53523 10.7272 7.87279C11.0648 8.21036 11.5226 8.4 12 8.4C12.4774 8.4 12.9352 8.21036 13.2728 7.87279C13.6104 7.53523 13.8 7.07739 13.8 6.6C13.8 6.12261 13.6104 5.66477 13.2728 5.32721C12.9352 4.98964 12.4774 4.8 12 4.8Z"
                                    fill={color.textMain}
                                />
                            </Svg>

                            <Text style={styles.pageText}>Participants</Text>
                        </View>
                        <Text
                            style={[
                                styles.pageText,
                                { fontFamily: "Manrope-Bold" },
                            ]}
                        >
                            548
                        </Text>
                    </View>
                </View>
                <MainButton
                    onPress={() =>
                        router.push("/(routes)/missions/mission-completed")
                    }
                    style={{
                        height: heightScale(48),
                        marginBottom: heightScale(100),
                        marginHorizontal: widthScale(24),
                    }}
                >
                    <Text
                        style={[
                            styles.pageText,
                            {
                                fontSize: fontScale(14),
                                fontFamily: "Manrope-Bold",
                                color: color.background,
                            },
                        ]}
                    >
                        Check
                    </Text>
                </MainButton>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
