import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, widthScale } from "@/config/size";
import { Href, router } from "expo-router";
type Task = {
    id: number;
    title: string;
    description: string;
    points?: string;
    status?: string;
    url?: Href;
    image: any;
};
export default function TaskList() {
    const { color } = useColors();
    const TASKS: Task[] = [
        {
            id: 1,
            title: "Follow Reach",
            description: "X (Twitter)",
            points: "50",
            status: "",
            image: require("@/assets/images/big-x.png"),
        },

        {
            id: 2,
            title: "Invite Friends",
            description: "Get cards for inviting your friends",
            points: "20",
            status: "",
            url: "/(routes)/missions/invite-friends",
            image: require("@/assets/images/big-share.png"),
        },

        {
            id: 3,
            title: "Share Post on Social Media",
            description: "X (Twitter) Account",
            points: "30",
            status: "",
            image: require("@/assets/images/big-x.png"),
        },

        {
            id: 4,
            title: "Add your Socials",
            description: "X (Twitter) Account",
            points: "20",
            status: "",
            image: require("@/assets/images/big-x.png"),
        },
    ];
    return (
        <View style={{ gap: heightScale(16) }}>
            {TASKS.map((item, i) => (
                <TouchableOpacity
                    onPress={() => (item.url ? router.push(item.url) : null)}
                    key={i}
                    style={{
                        backgroundColor: color.background2,
                        paddingVertical: heightScale(12),
                        paddingHorizontal: widthScale(12),
                        borderRadius: widthScale(8),
                        gap: widthScale(16),
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            gap: widthScale(8),
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: widthScale(32),
                                height: widthScale(32),
                            }}
                            source={item.image}
                        />
                        <View>
                            <Text
                                style={{
                                    fontFamily: "Manrope-Medium",
                                    fontSize: fontScale(15),
                                    lineHeight: heightScale(20),
                                    color: color.textMain,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Manrope-Regular",
                                    fontSize: fontScale(12),
                                    lineHeight: heightScale(20),
                                    color: color.textSub,
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            width: widthScale(46),
                            flexShrink: 0,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: widthScale(1),
                            borderRadius: widthScale(40),
                            borderColor: color.textMain,
                            paddingVertical: heightScale(3),
                            paddingHorizontal: widthScale(6),
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Manrope-Regular",
                                fontSize: fontScale(12),
                                lineHeight: heightScale(20),
                                color: color.textSub,
                            }}
                        >
                            +{item.points}P
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
