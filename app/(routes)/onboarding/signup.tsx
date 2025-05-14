import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

//Modules................
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import { useColors } from "@/hooks/useColors";
import OnboardHeader from "@/components/Header/OnboardHeader";
import { fontScale, widthScale, heightScale } from "@/config/size";
import MainButton from "@/components/Global/Button";
import Svg, { Defs, ClipPath, G, Path, Rect } from "react-native-svg";
import { router } from "expo-router";

export default function Signup() {
    const { color } = useColors();
    //Check.................
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    //States...............
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [referralCode, setReferralCode] = useState("");

    //Functions.............

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.background,
            paddingHorizontal: widthScale(15),
        },

        pageTitle: {
            fontFamily: "Manrope-Bold",
            color: color.textMain,
            fontSize: fontScale(24),
            textAlign: "center",
            letterSpacing: fontScale(0.4),
        },

        formContainer: {
            gap: heightScale(24),
        },

        formInputContainer: {
            gap: heightScale(5),
        },

        formInputLabel: {
            fontFamily: "Manrope-Bold",
            color: color.textMain,
            fontSize: fontScale(12),
            letterSpacing: fontScale(0.4),
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

        showPassword: {
            paddingHorizontal: widthScale(3),
        },

        showPasswordText: {
            fontFamily: "Manrope-Medium",
            color: color.textMain,
            fontSize: fontScale(14),
            textDecorationLine: "underline",
        },

        formSubTextContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(3),
        },

        formSubText: {
            fontFamily: "Manrope-Regular",
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(3),
            fontSize: fontScale(12),
            color: color.textSub,
            lineHeight: heightScale(20),
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

        loginText: {
            fontFamily: "Manrope-Medium",
            fontSize: fontScale(14),
            color: color.textMain,
            lineHeight: heightScale(21),
            textAlign: "center",
        },
    });

    return (
        <CustomSafeAreaView style={styles.container}>
            <OnboardHeader />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    flex: 1,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="never"
                    contentContainerStyle={{
                        flex: 1,
                        gap: heightScale(20),
                        marginTop: heightScale(24),
                    }}
                >
                    <Text style={styles.pageTitle}>Create your account</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.formInputContainer}>
                            <Text style={styles.formInputLabel}>
                                Email address
                            </Text>
                            <View style={styles.formInputWrapper}>
                                <TextInput
                                    keyboardType="default"
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.formInput}
                                    placeholderTextColor={color.textSub}
                                    placeholder="Enter email address"
                                />
                            </View>
                        </View>

                        <View style={styles.formInputContainer}>
                            <Text style={styles.formInputLabel}>Password</Text>
                            <View style={styles.formInputWrapper}>
                                <TextInput
                                    style={styles.formInput}
                                    value={password}
                                    secureTextEntry={!isPasswordVisible}
                                    onChangeText={setPassword}
                                    placeholderTextColor={color.textSub}
                                    placeholder="Password (8+ characters)"
                                    //       secureTextEntry={!isPasswordVisible}
                                />
                                <Pressable
                                    style={styles.showPassword}
                                    onPress={() =>
                                        setIsPasswordVisible(!isPasswordVisible)
                                    }
                                >
                                    <Text style={styles.showPasswordText}>
                                        {isPasswordVisible ? "Hide" : "Show"}
                                    </Text>
                                </Pressable>
                            </View>
                            {password.length >= 8 && (
                                <View style={styles.formSubTextContainer}>
                                    <Svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        //       xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            d="M3.75 7.50006L6.40165 10.1517L11.7044 4.84839"
                                            stroke="#A1A1A1"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text style={styles.formSubText}>
                                        Password must be 8+ characters
                                    </Text>
                                </View>
                            )}
                        </View>

                        <View style={styles.formInputContainer}>
                            <Text style={styles.formInputLabel}>
                                Confirm Password
                            </Text>
                            <View style={styles.formInputWrapper}>
                                <TextInput
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    style={styles.formInput}
                                    placeholderTextColor={color.textSub}
                                    //       secureTextEntry={!isPasswordVisible}
                                    placeholder="Confirm Password"
                                />
                                <Pressable
                                    style={styles.showPassword}
                                    onPress={() =>
                                        setIsConfirmPasswordVisible(
                                            !isConfirmPasswordVisible
                                        )
                                    }
                                >
                                    <Text style={styles.showPasswordText}>
                                        {isConfirmPasswordVisible
                                            ? "Hide"
                                            : "Show"}
                                    </Text>
                                </Pressable>
                            </View>
                            {password.length >= 8 &&
                                confirmPassword === password && (
                                    <View style={styles.formSubTextContainer}>
                                        <Svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            //       xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path
                                                d="M3.75 7.50006L6.40165 10.1517L11.7044 4.84839"
                                                stroke="#A1A1A1"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </Svg>
                                        <Text style={styles.formSubText}>
                                            Passwords match
                                        </Text>
                                    </View>
                                )}
                        </View>

                        <View style={styles.formInputContainer}>
                            <Text style={styles.formInputLabel}>
                                Referral code (Optional)
                            </Text>
                            <View style={styles.formInputWrapper}>
                                <TextInput
                                    value={referralCode}
                                    onChangeText={setReferralCode}
                                    style={styles.formInput}
                                    placeholderTextColor={color.textSub}
                                    placeholder="Enter referral code"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.footer}>
                <MainButton
                    onPress={() =>
                        router.push("/(routes)/onboarding/confirm-code")
                    }
                    style={{ gap: widthScale(3) }}
                    disabled={
                        //     password.length < 8 ||
                        //     confirmPassword.length < 8 ||
                        //     email.length === 0
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

                <Text style={styles.loginText}>
                    Already have an account?{" "}
                    <Text style={{ color: color.accent }}>Login here</Text>
                </Text>
            </View>
        </CustomSafeAreaView>
    );
}
