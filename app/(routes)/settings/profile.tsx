import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { fontScale, heightScale, scale, widthScale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";

import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { useColors } from "@/hooks/useColors";
import ProfileSettings from "@/components/Settings/ProfileSettings";
import CopySettings from "@/components/Settings/CopySettings";
import MainButton from "@/components/Global/Button";

export default function profile() {
    const { color } = useColors();
    const pfpOptions = [
        {
            id: 1,
            icon: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            id: 2,
            icon: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            id: 3,
            icon: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            id: 4,
            icon: require("@/assets/images/avatars/hs-4.png"),
        },
        {
            id: 5,
            icon: require("@/assets/images/avatars/hs-5.png"),
        },
        {
            id: 6,
            icon: require("@/assets/images/avatars/hs-6.png"),
        },
        {
            id: 7,
            icon: require("@/assets/images/avatars/hs-7.png"),
        },
        {
            id: 8,
            icon: require("@/assets/images/avatars/hs-8.png"),
        },
        {
            id: 9,
            icon: require("@/assets/images/avatars/hs-9.png"),
        },
        {
            id: 10,
            icon: require("@/assets/images/avatars/hs-10.png"),
        },
    ];
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // callbacks
    const handleModalToggle = () => {
        bottomSheetModalRef.current?.present();
    };

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1} // Backdrop disappears when sheet is fully closed
                appearsOnIndex={0} // Backdrop appears when sheet is opened
                opacity={0.5} // Adjust transparency here
            />
        ),
        []
    );

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
            <ScrollView>
                <View style={styles.pageContainer}>
                    <Text style={styles.pageTitle}>Profile</Text>
                    <View style={styles.card}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require("@/assets/images/headshot-1.png")}
                                style={styles.cardImage}
                            />
                            <Pressable
                                style={styles.cameraEditButton}
                                onPress={handleModalToggle}
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
                        </View>
                    </View>

                    <ProfileSettings />
                    <CopySettings />

                    <BottomSheetModal
                        enablePanDownToClose
                        ref={bottomSheetModalRef}
                        snapPoints={["55%"]}
                        backdropComponent={renderBackdrop}
                        backgroundStyle={{
                            borderRadius: scale(30),
                            backgroundColor: color.background2,
                        }}
                    >
                        <BottomSheetView
                            style={{
                                flex: 1,
                                paddingHorizontal: scale(20),
                                paddingVertical: scale(20),
                                gap: scale(24),
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Satoshi-Bold",
                                    fontSize: fontScale(20),
                                    lineHeight: scale(30),
                                    color: color.textMain,
                                }}
                            >
                                Choose a Profile Picture
                            </Text>

                            <Image
                                source={require("@/assets/images/headshot-1.png")}
                                style={{ width: scale(72), height: scale(72) }}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    gap: scale(16),
                                }}
                            >
                                {pfpOptions.map((option) => (
                                    <Image
                                        key={option.id}
                                        style={{
                                            width: scale(48),
                                            height: scale(48),
                                        }}
                                        source={option.icon}
                                    />
                                ))}
                            </View>

                            <MainButton style={{ width: "100%" }}>
                                <Text
                                    style={{
                                        fontFamily: "Satoshi-Medium",
                                        fontSize: fontScale(16),
                                        lineHeight: scale(20),
                                        color: color.textMain2,
                                    }}
                                >
                                    Save Changes
                                </Text>
                            </MainButton>
                        </BottomSheetView>
                    </BottomSheetModal>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
