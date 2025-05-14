import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { ScrollView } from "react-native-gesture-handler";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import DailyMissionsCTA from "@/components/Missions/DailyMissionsCTA";
import Svg, { Path } from "react-native-svg";
import TaskList from "@/components/Missions/TaskList";
import { router } from "expo-router";

export default function missions() {
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

        menuTray: {
            flexDirection: "row",
            gap: widthScale(8),
            flexWrap: "wrap",
        },

        menuTrayItem: {
            flexDirection: "row",
            alignItems: "center",
            gap: widthScale(8),
            borderRadius: widthScale(40),
            paddingVertical: heightScale(5),
            paddingHorizontal: widthScale(14),
            borderWidth: widthScale(0.8),
            borderColor: color.grey,
        },
    });
    return (
        <CustomSafeAreaView>
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Missions</Text>
                        <Text
                            style={[styles.pageText, { color: color.textSub }]}
                        >
                            Complete missions to earn points and other rewards.
                        </Text>
                    </View>
                    {/* space */}
                    <DailyMissionsCTA />
                    {/* space */}
                    <View style={styles.menuTray}>
                        <TouchableOpacity
                            style={[
                                styles.menuTrayItem,
                                { backgroundColor: color.grey },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.pageText,
                                    { fontSize: fontScale(14) },
                                ]}
                            >
                                Tasks
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuTrayItem}
                            onPress={() =>
                                router.push("/(routes)/missions/share-post")
                            }
                        >
                            <Svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M11.3333 9.33333C11.5101 9.33333 11.6797 9.2631 11.8047 9.13807C11.9298 9.01305 12 8.84348 12 8.66667C12 8.48986 11.9298 8.32029 11.8047 8.19526C11.6797 8.07024 11.5101 8 11.3333 8C11.1565 8 10.987 8.07024 10.8619 8.19526C10.7369 8.32029 10.6667 8.48986 10.6667 8.66667C10.6667 8.84348 10.7369 9.01305 10.8619 9.13807C10.987 9.2631 11.1565 9.33333 11.3333 9.33333ZM11.3333 12C11.5101 12 11.6797 11.9298 11.8047 11.8047C11.9298 11.6797 12 11.5101 12 11.3333C12 11.1565 11.9298 10.987 11.8047 10.8619C11.6797 10.7369 11.5101 10.6667 11.3333 10.6667C11.1565 10.6667 10.987 10.7369 10.8619 10.8619C10.7369 10.987 10.6667 11.1565 10.6667 11.3333C10.6667 11.5101 10.7369 11.6797 10.8619 11.8047C10.987 11.9298 11.1565 12 11.3333 12ZM8.66667 8.66667C8.66667 8.84348 8.59643 9.01305 8.4714 9.13807C8.34638 9.2631 8.17681 9.33333 8 9.33333C7.82319 9.33333 7.65362 9.2631 7.5286 9.13807C7.40357 9.01305 7.33333 8.84348 7.33333 8.66667C7.33333 8.48986 7.40357 8.32029 7.5286 8.19526C7.65362 8.07024 7.82319 8 8 8C8.17681 8 8.34638 8.07024 8.4714 8.19526C8.59643 8.32029 8.66667 8.48986 8.66667 8.66667ZM8.66667 11.3333C8.66667 11.5101 8.59643 11.6797 8.4714 11.8047C8.34638 11.9298 8.17681 12 8 12C7.82319 12 7.65362 11.9298 7.5286 11.8047C7.40357 11.6797 7.33333 11.5101 7.33333 11.3333C7.33333 11.1565 7.40357 10.987 7.5286 10.8619C7.65362 10.7369 7.82319 10.6667 8 10.6667C8.17681 10.6667 8.34638 10.7369 8.4714 10.8619C8.59643 10.987 8.66667 11.1565 8.66667 11.3333ZM4.66667 9.33333C4.84348 9.33333 5.01305 9.2631 5.13807 9.13807C5.2631 9.01305 5.33333 8.84348 5.33333 8.66667C5.33333 8.48986 5.2631 8.32029 5.13807 8.19526C5.01305 8.07024 4.84348 8 4.66667 8C4.48986 8 4.32029 8.07024 4.19526 8.19526C4.07024 8.32029 4 8.48986 4 8.66667C4 8.84348 4.07024 9.01305 4.19526 9.13807C4.32029 9.2631 4.48986 9.33333 4.66667 9.33333ZM4.66667 12C4.84348 12 5.01305 11.9298 5.13807 11.8047C5.2631 11.6797 5.33333 11.5101 5.33333 11.3333C5.33333 11.1565 5.2631 10.987 5.13807 10.8619C5.01305 10.7369 4.84348 10.6667 4.66667 10.6667C4.48986 10.6667 4.32029 10.7369 4.19526 10.8619C4.07024 10.987 4 11.1565 4 11.3333C4 11.5101 4.07024 11.6797 4.19526 11.8047C4.32029 11.9298 4.48986 12 4.66667 12Z"
                                    fill={color.textMain}
                                />
                                <Path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.66665 1.16699C4.79926 1.16699 4.92644 1.21967 5.0202 1.31344C5.11397 1.40721 5.16665 1.53438 5.16665 1.66699V2.17566C5.60798 2.16699 6.09398 2.16699 6.62865 2.16699H9.37065C9.90598 2.16699 10.392 2.16699 10.8333 2.17566V1.66699C10.8333 1.53438 10.886 1.40721 10.9798 1.31344C11.0735 1.21967 11.2007 1.16699 11.3333 1.16699C11.4659 1.16699 11.5931 1.21967 11.6869 1.31344C11.7806 1.40721 11.8333 1.53438 11.8333 1.66699V2.21833C12.0067 2.23166 12.1709 2.24855 12.326 2.26899C13.1073 2.37433 13.74 2.59566 14.2393 3.09433C14.738 3.59366 14.9593 4.22633 15.0647 5.00766C15.1667 5.76766 15.1667 6.73766 15.1667 7.96299V9.37099C15.1667 10.5963 15.1667 11.567 15.0647 12.3263C14.9593 13.1077 14.738 13.7403 14.2393 14.2397C13.74 14.7383 13.1073 14.9597 12.326 15.065C11.566 15.167 10.596 15.167 9.37065 15.167H6.62998C5.40465 15.167 4.43398 15.167 3.67465 15.065C2.89332 14.9597 2.26065 14.7383 1.76132 14.2397C1.26265 13.7403 1.04132 13.1077 0.935984 12.3263C0.833984 11.5663 0.833984 10.5963 0.833984 9.37099V7.96299C0.833984 6.73766 0.833984 5.76699 0.935984 5.00766C1.04132 4.22633 1.26265 3.59366 1.76132 3.09433C2.26065 2.59566 2.89332 2.37433 3.67465 2.26899C3.83021 2.24855 3.99443 2.23166 4.16732 2.21833V1.66699C4.16732 1.5345 4.2199 1.40742 4.31353 1.31367C4.40715 1.21993 4.53416 1.16717 4.66665 1.16699ZM3.80665 3.26033C3.13665 3.35033 2.74998 3.51966 2.46798 3.80166C2.18598 4.08366 2.01665 4.47033 1.92665 5.14033C1.91154 5.25366 1.89865 5.37344 1.88798 5.49966H14.112C14.1013 5.37344 14.0884 5.25344 14.0733 5.13966C13.9833 4.46966 13.814 4.08299 13.532 3.80099C13.25 3.51899 12.8633 3.34966 12.1927 3.25966C11.508 3.16766 10.6047 3.16633 9.33332 3.16633H6.66665C5.39532 3.16633 4.49265 3.16833 3.80665 3.26033ZM1.83332 8.00033C1.83332 7.43099 1.83332 6.93566 1.84198 6.50033H14.158C14.1667 6.93566 14.1667 7.43099 14.1667 8.00033V9.33366C14.1667 10.605 14.1653 11.5083 14.0733 12.1937C13.9833 12.8637 13.814 13.2503 13.532 13.5323C13.25 13.8143 12.8633 13.9837 12.1927 14.0737C11.508 14.1657 10.6047 14.167 9.33332 14.167H6.66665C5.39532 14.167 4.49265 14.1657 3.80665 14.0737C3.13665 13.9837 2.74998 13.8143 2.46798 13.5323C2.18598 13.2503 2.01665 12.8637 1.92665 12.193C1.83465 11.5083 1.83332 10.605 1.83332 9.33366V8.00033Z"
                                    fill={color.textMain}
                                />
                            </Svg>

                            <Text
                                style={[
                                    styles.pageText,
                                    { fontSize: fontScale(14) },
                                ]}
                            >
                                Daily
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuTrayItem}>
                            <Svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2ZM16 10C14.34 10 13 8.66 13 7C13 5.34 14.34 4 16 4C17.66 4 19 5.34 19 7C19 8.66 17.66 10 16 10ZM19 16H17C17 14.8 16.25 13.72 15.13 13.3L8.97 11H1V22H7V20.56L14 22.5L22 20V19C22 17.34 20.66 16 19 16ZM5 20H3V13H5V20ZM13.97 20.41L7 18.5V13H8.61L14.43 15.17C14.77 15.3 15 15.63 15 16C15 16 13 15.95 12.7 15.85L10.32 15.06L9.69 16.96L12.07 17.75C12.58 17.92 13.11 18 13.65 18H19C19.39 18 19.74 18.24 19.9 18.57L13.97 20.41Z"
                                    fill={color.textMain}
                                />
                            </Svg>

                            <Text
                                style={[
                                    styles.pageText,
                                    { fontSize: fontScale(14) },
                                ]}
                            >
                                Donations
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* space */}
                    <TaskList />
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
