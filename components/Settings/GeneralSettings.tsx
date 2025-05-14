import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import { useThemeStore } from "@/store/themeStore";

export default function GeneralSettings() {
    const { color } = useColors();
    let theme = useThemeStore((state) => state.theme);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const styles = StyleSheet.create({
        container: {
            gap: heightScale(24),
        },

        sectionTitle: {
            fontFamily: "Manrope-Bold",
            fontSize: fontScale(18),
            color: color.textMain,
        },

        sectionText: {
            fontFamily: "Manrope-Medium",
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
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>General</Text>
            <View style={styles.card}>
                <View style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M4.75 14.5H15.25V9.27325C15.25 6.361 12.8995 4 10 4C7.1005 4 4.75 6.361 4.75 9.27325V14.5ZM10 2.5C13.7275 2.5 16.75 5.53225 16.75 9.27325V16H3.25V9.27325C3.25 5.53225 6.2725 2.5 10 2.5ZM8.125 16.75H11.875C11.875 17.2473 11.6775 17.7242 11.3258 18.0758C10.9742 18.4275 10.4973 18.625 10 18.625C9.50272 18.625 9.02581 18.4275 8.67417 18.0758C8.32254 17.7242 8.125 17.2473 8.125 16.75Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>Notifications</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: color.accent }}
                        thumbColor={isEnabled ? "fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {/* space */}
                <TouchableOpacity
                    style={styles.cardItem}
                    onPress={() =>
                        router.push("/(routes)/settings/change-appearance")
                    }
                >
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M8.5 6.25C8.49985 7.29298 8.81035 8.31237 9.39192 9.17816C9.97348 10.0439 10.7997 10.7169 11.7653 11.1112C12.7309 11.5055 13.7921 11.6032 14.8134 11.3919C15.8348 11.1807 16.7701 10.67 17.5 9.925V10C17.5 14.1423 14.1423 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5H10.075C9.57553 2.98834 9.17886 3.57172 8.90836 4.21576C8.63786 4.8598 8.49902 5.55146 8.5 6.25ZM4 10C3.99945 11.3387 4.44665 12.6392 5.27042 13.6945C6.09419 14.7497 7.24723 15.4992 8.54606 15.8236C9.84489 16.148 11.2149 16.0287 12.4381 15.4847C13.6614 14.9407 14.6675 14.0033 15.2965 12.8215C14.1771 13.0852 13.0088 13.0586 11.9026 12.744C10.7964 12.4295 9.78888 11.8376 8.97566 11.0243C8.16244 10.2111 7.57048 9.20361 7.25596 8.09738C6.94144 6.99116 6.91477 5.82292 7.1785 4.7035C6.21818 5.2151 5.41509 5.97825 4.85519 6.91123C4.2953 7.84422 3.99968 8.91191 4 10Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>Appearance</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: widthScale(4),
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.sectionText}>{theme}</Text>
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M12.1547 12.0003L9.60864 9.45514L10.8812 8.18164L14.6999 12.0003L10.8812 15.819L9.60864 14.5455L12.1547 12.0003Z"
                                fill={color.textMain}
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
                {/* space */}
                <TouchableOpacity
                    style={styles.cardItem}
                    onPress={() =>
                        router.push("/(routes)/settings/change-language")
                    }
                >
                    <View style={styles.cardItemLabelContainer}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M14.875 8.5L18.175 16.75H16.5588L15.658 14.5H12.5905L11.6912 16.75H10.0757L13.375 8.5H14.875ZM8.5 2.5V4H13V5.5H11.524C10.9455 7.24156 10.0221 8.84876 8.809 10.2257C9.34998 10.7085 9.93676 11.1372 10.561 11.506L9.99775 12.9145C9.19189 12.4574 8.4382 11.914 7.75 11.2938C6.41019 12.5063 4.82353 13.4141 3.09925 13.9548L2.69725 12.508C4.17463 12.0369 5.53602 11.2595 6.6925 10.2265C5.83652 9.25745 5.12355 8.17095 4.57525 7H6.25525C6.67326 7.77164 7.1745 8.4952 7.75 9.15775C8.68758 8.07708 9.42648 6.83898 9.9325 5.50075L2.5 5.5V4H7V2.5H8.5ZM14.125 10.6637L13.1898 13H15.0588L14.125 10.6637Z"
                                fill={color.textMain}
                            />
                        </Svg>

                        <Text style={styles.sectionText}>Language</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            gap: widthScale(4),
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.sectionText}>English</Text>
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M12.1547 12.0003L9.60864 9.45514L10.8812 8.18164L14.6999 12.0003L10.8812 15.819L9.60864 14.5455L12.1547 12.0003Z"
                                fill={color.textMain}
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
