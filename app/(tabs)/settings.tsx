import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import { Text } from "react-native";
import MainButton from "@/components/Global/Button";
import Svg, { Path } from "react-native-svg";
import GeneralSettings from "@/components/Settings/GeneralSettings";
import SupportSettings from "@/components/Settings/SupportSettings";
import AboutReachSettings from "@/components/Settings/AboutReachSettings";
import { useAuthStore } from "@/store/authStore";
import { router } from "expo-router";

export default function settings() {
    const { color } = useColors();
    const handleSignOut = () => {
        useAuthStore.getState().setIsAuth(false);
    };

    const styles = StyleSheet.create({
        pageContainer: {
            gap: heightScale(24),
            paddingHorizontal: widthScale(24),
        },

        pageHeading: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: widthScale(8),
        },

        pageTitle: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(24),
            color: color.textMain,
        },

        editButton: {
            backgroundColor: color.background2,
            borderRadius: widthScale(40),
            paddingHorizontal: widthScale(18),
            paddingVertical: heightScale(6),
        },

        pageText: {
            fontFamily: "Manrope-Regular",
            fontSize: fontScale(15),
            color: color.textMain,
        },

        card: {
            backgroundColor: color.background2,
            borderRadius: widthScale(16),
            padding: widthScale(24),
            alignItems: "center",
            justifyContent: "center",

            gap: heightScale(8),
        },

        cardImageContainer: {
            position: "relative",
        },

        cardImage: {
            width: widthScale(63),
            height: widthScale(63),
            borderRadius: 999,
            borderWidth: widthScale(2.25),
            borderColor: color.accent,
        },

        cameraEditButton: {
            width: widthScale(22.5),
            height: widthScale(22.5),
            backgroundColor: color.background2,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            right: -widthScale(3),
            bottom: 0,
            position: "absolute",
            borderWidth: widthScale(1),
            borderColor: color.accent,
            borderRadius: "100%",
        },
    });
    return (
        <CustomSafeAreaView>
            <GeneralHeader />
            <ScrollView contentContainerStyle={styles.pageContainer}>
                {/* space */}
                <View style={styles.pageHeading}>
                    <Text style={styles.pageTitle}>Settings</Text>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() =>
                            router.push("/(routes)/settings/profile")
                        }
                    >
                        <Text
                            style={[
                                styles.pageText,
                                { fontSize: fontScale(12) },
                            ]}
                        >
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* space */}
                <View style={styles.card}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            source={require("@/assets/images/headshot-1.png")}
                            style={styles.cardImage}
                        />
                        <Pressable
                            style={styles.cameraEditButton}
                            onPress={() =>
                                router.push("/(routes)/settings/profile")
                            }
                        >
                            <Svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                //     xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M6.27543 4.08086L5.26293 5.09336H3.325V11.1684H11.425V5.09336H9.48708L8.47458 4.08086H6.27543ZM5.85625 3.06836H8.89375L9.90625 4.08086H11.9313C12.0655 4.08086 12.1943 4.1342 12.2892 4.22914C12.3842 4.32408 12.4375 4.45284 12.4375 4.58711V11.6746C12.4375 11.8089 12.3842 11.9376 12.2892 12.0326C12.1943 12.1275 12.0655 12.1809 11.9313 12.1809H2.81875C2.68448 12.1809 2.55572 12.1275 2.46078 12.0326C2.36584 11.9376 2.3125 11.8089 2.3125 11.6746V4.58711C2.3125 4.45284 2.36584 4.32408 2.46078 4.22914C2.55572 4.1342 2.68448 4.08086 2.81875 4.08086H4.84375L5.85625 3.06836ZM7.375 10.6621C6.63654 10.6621 5.92832 10.3688 5.40615 9.84659C4.88398 9.32441 4.59063 8.6162 4.59063 7.87773C4.59063 7.13927 4.88398 6.43106 5.40615 5.90888C5.92832 5.38671 6.63654 5.09336 7.375 5.09336C8.11346 5.09336 8.82168 5.38671 9.34385 5.90888C9.86602 6.43106 10.1594 7.13927 10.1594 7.87773C10.1594 8.6162 9.86602 9.32441 9.34385 9.84659C8.82168 10.3688 8.11346 10.6621 7.375 10.6621ZM7.375 9.64961C7.84493 9.64961 8.29561 9.46293 8.62791 9.13064C8.9602 8.79835 9.14688 8.34767 9.14688 7.87773C9.14688 7.4078 8.9602 6.95712 8.62791 6.62483C8.29561 6.29254 7.84493 6.10586 7.375 6.10586C6.90507 6.10586 6.45439 6.29254 6.1221 6.62483C5.7898 6.95712 5.60313 7.4078 5.60313 7.87773C5.60313 8.34767 5.7898 8.79835 6.1221 9.13064C6.45439 9.46293 6.90507 9.64961 7.375 9.64961V9.64961Z"
                                    fill={color.textMain}
                                />
                            </Svg>
                        </Pressable>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text
                            style={[
                                styles.pageText,
                                { fontFamily: "Manrope-Medium" },
                            ]}
                        >
                            Official Okpoba
                        </Text>
                        <Text
                            style={[
                                styles.pageText,
                                { fontSize: fontScale(12) },
                            ]}
                        >
                            okpoba.perekeme@gmail.com
                        </Text>
                    </View>
                </View>
                {/* space */}
                <GeneralSettings />
                {/* space */}
                <SupportSettings />
                {/* space */}
                <AboutReachSettings />
                {/* space */}
                <MainButton
                    onPress={handleSignOut}
                    style={{
                        backgroundColor: "#C73838",
                        gap: widthScale(3),
                    }}
                >
                    <Text style={[styles.pageText, { color: "#fff" }]}>
                        Sign out
                    </Text>
                    <Svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        //     xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M4.25 7.25H10.25V8.75H4.25V11L0.5 8L4.25 5V7.25ZM3.5 12.5H5.531C6.39701 13.2638 7.46501 13.7614 8.60684 13.9332C9.74868 14.105 10.9158 13.9437 11.9683 13.4686C13.0207 12.9935 13.9137 12.2249 14.5401 11.2549C15.1664 10.2848 15.4996 9.15469 15.4996 8C15.4996 6.84532 15.1664 5.71516 14.5401 4.74514C13.9137 3.77512 13.0207 3.00646 11.9683 2.53138C10.9158 2.05629 9.74868 1.89498 8.60684 2.0668C7.46501 2.23861 6.39701 2.73625 5.531 3.5H3.5C4.198 2.56788 5.10375 1.81139 6.1453 1.29061C7.18686 0.769832 8.33551 0.499127 9.5 0.500002C13.6423 0.500002 17 3.85775 17 8C17 12.1423 13.6423 15.5 9.5 15.5C8.33551 15.5009 7.18686 15.2302 6.1453 14.7094C5.10375 14.1886 4.198 13.4321 3.5 12.5Z"
                            fill="white"
                        />
                    </Svg>
                </MainButton>
                {/* space */}
                <Text style={[styles.pageText, { textAlign: "center" }]}>
                    Version 1.0.7.60
                </Text>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
