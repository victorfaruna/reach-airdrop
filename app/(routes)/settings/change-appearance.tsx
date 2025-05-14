import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import Svg, { Path } from "react-native-svg";
import { useThemeStore } from "@/store/themeStore";

export default function appearance() {
    const { color } = useColors();
    const theme = useThemeStore((state) => state.theme);

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

        card: {
            backgroundColor: color.background2,
            borderRadius: heightScale(16),
            gap: heightScale(8),
        },

        cardItem: {
            height: heightScale(48),
            paddingHorizontal: widthScale(16),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: widthScale(16),
            borderBottomWidth: 1,
            borderBottomColor: color.background,
        },

        cardItemLabelContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(8),
        },
    });

    const ActiveIndicator = () => (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            //         xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM12 19.2C13.9096 19.2 15.7409 18.4414 17.0912 17.0912C18.4414 15.7409 19.2 13.9096 19.2 12C19.2 10.0904 18.4414 8.25909 17.0912 6.90883C15.7409 5.55857 13.9096 4.8 12 4.8C10.0904 4.8 8.25909 5.55857 6.90883 6.90883C5.55857 8.25909 4.8 10.0904 4.8 12C4.8 13.9096 5.55857 15.7409 6.90883 17.0912C8.25909 18.4414 10.0904 19.2 12 19.2ZM11.1027 15.6L7.284 11.7813L8.5566 10.5087L11.1027 13.0548L16.1931 7.9635L17.4666 9.2361L11.1027 15.6Z"
                fill={color.textMain}
            />
        </Svg>
    );

    return (
        <CustomSafeAreaView>
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Appearance</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Customize the look of your app interface.
                        </Text>
                    </View>
                    {/* space */}
                    <View style={styles.card}>
                        <TouchableOpacity
                            style={styles.cardItem}
                            onPress={() => {
                                useThemeStore.getState().setTheme("dark");
                            }}
                        >
                            <View style={styles.cardItemLabelContainer}>
                                <Text style={styles.pageText}>Dark Mode</Text>
                            </View>
                            {/* something... */}
                            {theme === "dark" ? <ActiveIndicator /> : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cardItem}
                            onPress={() => {
                                useThemeStore.getState().setTheme("light");
                            }}
                        >
                            <View style={styles.cardItemLabelContainer}>
                                <Text style={styles.pageText}>Light Mode</Text>
                            </View>
                            {/* something... */}
                            {theme === "light" ? <ActiveIndicator /> : null}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardItem}>
                            <View style={styles.cardItemLabelContainer}>
                                <Text style={styles.pageText}>System</Text>
                            </View>
                            {/* something... */}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
