import {
    View,
    Text,
    Platform,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import OnboardHeader from "@/components/Header/OnboardHeader";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, widthScale } from "@/config/size";
import MainButton from "@/components/Global/Button";
import { router } from "expo-router";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function AddUsername() {
    const { color } = useColors();
    const [username, setUsername] = useState("");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.background,
            paddingHorizontal: widthScale(20),
            gap: heightScale(24),
        },

        formInputContainer: {
            gap: heightScale(5),
        },

        formInputWrapper: {
            backgroundColor: color.background2,
            height: heightScale(52),
            justifyContent: "space-between",
            paddingRight: widthScale(16),
            borderRadius: heightScale(8),
            flexDirection: "row",
            alignItems: "center",
        },

        formInput: {
            flex: 1,
            paddingHorizontal: widthScale(16),
            paddingVertical: heightScale(10),
            fontSize: fontScale(15),
            lineHeight: fontScale(20),
            color: color.textMain,
            fontFamily: "Manrope-Regular",
        },

        footer: {
            paddingVertical: heightScale(20),
            gap: heightScale(16),
        },

        continueText: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(14),
            color: color.textMain2,
        },

        footerText: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(12),
            color: color.textSub,
            textAlign: "center",
        },
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
            }}
        >
            <CustomSafeAreaView style={styles.container}>
                <OnboardHeader skipTo={"/onboarding/add-profile-image"} />
                <View style={{ flex: 1, gap: heightScale(24) }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: "Manrope-Bold",
                                fontSize: fontScale(24),
                                textAlign: "center",
                                color: color.textMain,
                            }}
                        >
                            Add Username
                        </Text>
                        <Text
                            style={{
                                color: color.textSub,
                                fontFamily: "Manrope-Regular",
                                fontSize: fontScale(14),
                                lineHeight: fontScale(20),
                                textAlign: "center",
                            }}
                        >
                            Add a unique username to your account.
                        </Text>
                    </View>

                    <View style={styles.formInputContainer}>
                        {/* <Text style={styles.formInputLabel}>Enter code</Text> */}
                        <View style={styles.formInputWrapper}>
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                style={styles.formInput}
                                placeholderTextColor={color.textSub}
                                //       secureTextEntry={!isPasswordVisible}
                                placeholder="Username"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <MainButton
                        onPress={() =>
                            router.push("/onboarding/add-profile-image")
                        }
                        style={{ gap: widthScale(3) }}
                        disabled={
                            // code.length === 0 || code.length < 4
                            false
                        }
                    >
                        <Text style={styles.continueText}>Continue</Text>
                        <Svg
                            width="14"
                            height="10"
                            viewBox="0 0 14 10"
                            fill="none"
                            //     xmlns="http://www.w3.org/2000/svg"
                        >
                            <G clip-path="url(#clip0_238_3240)">
                                <Path
                                    d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289L8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893C6.90237 0.683418 6.90237 1.31658 7.29289 1.70711L9.58579 4H1.5C0.947716 4 0.5 4.44772 0.5 5C0.5 5.55228 0.947716 6 1.5 6H9.58579L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12.7071 5.70711Z"
                                    fill={color.textMain2}
                                />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_238_3240">
                                    <Rect
                                        width="13"
                                        height="10"
                                        fill="white"
                                        transform="translate(0.5)"
                                    />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    </MainButton>
                </View>
            </CustomSafeAreaView>
        </KeyboardAvoidingView>
    );
}
