import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import MainButton from "@/components/Global/Button";

export default function chageNickname() {
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

        form: {
            gap: heightScale(24),
        },

        formItem: {
            gap: heightScale(8),
        },

        formInputLabel: {
            fontFamily: "Manrope-Regular",
            color: color.textMain,
            fontSize: fontScale(15),
        },

        formInput: {
            height: heightScale(52),
            backgroundColor: color.background2,
            borderRadius: heightScale(8),
            paddingHorizontal: widthScale(16),
            paddingVertical: heightScale(10),
            fontSize: fontScale(15),
            color: color.textMain,
            fontFamily: "Manrope-Regular",
        },
    });
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <CustomSafeAreaView style={{ paddingBottom: heightScale(50) }}>
                <GeneralHeader />
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={styles.pageContainer}>
                        <View style={{ gap: heightScale(4) }}>
                            <Text style={styles.pageTitle}>
                                Change Nickname
                            </Text>
                            <Text
                                style={[
                                    styles.pageText,
                                    { color: color.textSub },
                                ]}
                            >
                                You can change your nickname again in 14 days
                                from the last changes.
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <View style={styles.formItem}>
                                <Text style={styles.formInputLabel}>
                                    Current Username
                                </Text>
                                <TextInput
                                    style={[
                                        styles.formInput,
                                        { color: color.textSub },
                                    ]}
                                    keyboardType="default"
                                    editable={false}
                                    value="officialokpoba"
                                />
                            </View>
                            <View style={styles.formItem}>
                                <Text style={styles.formInputLabel}>
                                    New Username
                                </Text>
                                <TextInput
                                    style={[styles.formInput]}
                                    placeholderTextColor={color.textSub}
                                    placeholder="Username*"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <MainButton
                    style={{
                        marginHorizontal: widthScale(20),
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Manrope-Bold",
                            fontSize: fontScale(14),
                            color: color.textMain2,
                        }}
                    >
                        Save changes
                    </Text>
                </MainButton>
            </CustomSafeAreaView>
        </KeyboardAvoidingView>
    );
}
