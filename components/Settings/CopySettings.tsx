import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import Svg, { Path } from "react-native-svg";

export default function CopySettings() {
    const { color } = useColors();

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
            fontSize: fontScale(12),
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
            <View style={styles.card}>
                <TouchableOpacity style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Copy invitation link
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M14.7729 12.6522L13.7124 11.5902L14.7729 10.5297C15.1237 10.182 15.4023 9.7685 15.5928 9.31287C15.7832 8.85725 15.8818 8.36849 15.8829 7.87465C15.884 7.38081 15.7875 6.89162 15.5991 6.43517C15.4106 5.97871 15.1338 5.56398 14.7846 5.21479C14.4354 4.86559 14.0207 4.5888 13.5642 4.40032C13.1077 4.21183 12.6186 4.11536 12.1247 4.11645C11.6309 4.11753 11.1421 4.21614 10.6865 4.40662C10.2309 4.5971 9.81736 4.8757 9.4697 5.22642L8.4092 6.28767L7.34795 5.22717L8.40995 4.16667C9.39456 3.18206 10.73 2.62891 12.1224 2.62891C13.5149 2.62891 14.8503 3.18206 15.8349 4.16667C16.8196 5.15129 17.3727 6.48672 17.3727 7.87917C17.3727 9.27163 16.8196 10.6071 15.8349 11.5917L14.7737 12.6522H14.7729ZM12.6519 14.7732L11.5907 15.8337C10.6061 16.8183 9.27066 17.3714 7.8782 17.3714C6.48574 17.3714 5.15031 16.8183 4.1657 15.8337C3.18108 14.8491 2.62793 13.5136 2.62793 12.1212C2.62793 10.7287 3.18108 9.39329 4.1657 8.40867L5.22695 7.34817L6.28745 8.41017L5.22695 9.47067C4.87622 9.81834 4.59763 10.2319 4.40714 10.6875C4.21666 11.1431 4.11805 11.6319 4.11697 12.1257C4.11589 12.6195 4.21236 13.1087 4.40084 13.5652C4.58933 14.0216 4.86611 14.4364 5.21531 14.7856C5.56451 15.1348 5.97924 15.4115 6.43569 15.6C6.89215 15.7885 7.38133 15.885 7.87517 15.8839C8.36901 15.8828 8.85777 15.7842 9.31339 15.5937C9.76902 15.4032 10.1825 15.1246 10.5302 14.7739L11.5907 13.7134L12.6519 14.7739V14.7732ZM12.1209 6.81792L13.1822 7.87917L7.87895 13.1817L6.8177 12.1212L12.1209 6.81867V6.81792Z"
                                fill={color.textMain}
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
                {/* space */}
                <TouchableOpacity style={styles.cardItem}>
                    <View style={styles.cardItemLabelContainer}>
                        <Text
                            style={[
                                styles.sectionText,
                                { fontSize: fontScale(15) },
                            ]}
                        >
                            Copy invitation code
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: widthScale(4) }}>
                        <Text style={[styles.sectionText]}>107WGH331G</Text>
                        <Svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            //         xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M6.25 5.5V3.25C6.25 3.05109 6.32902 2.86032 6.46967 2.71967C6.61032 2.57902 6.80109 2.5 7 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V13.75C16.75 13.9489 16.671 14.1397 16.5303 14.2803C16.3897 14.421 16.1989 14.5 16 14.5H13.75V16.75C13.75 17.164 13.4125 17.5 12.9948 17.5H4.00525C3.90635 17.5006 3.8083 17.4816 3.71674 17.4442C3.62519 17.4068 3.54192 17.3517 3.47174 17.282C3.40156 17.2123 3.34584 17.1294 3.30779 17.0381C3.26974 16.9468 3.2501 16.8489 3.25 16.75L3.25225 6.25C3.25225 5.836 3.58975 5.5 4.0075 5.5H6.25ZM4.75225 7L4.75 16H12.25V7H4.75225ZM7.75 5.5H13.75V13H15.25V4H7.75V5.5Z"
                                fill={color.textMain}
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
