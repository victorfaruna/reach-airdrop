import { View, Image, Pressable } from "react-native";
import React from "react";
import { widthScale } from "@/config/size";

export default function ChooseAvatar() {
    const [seletedAvatar, setSeletedAvatar] = React.useState(1);
    const AVATARS = [
        {
            id: 1,
            image: require("@/assets/images/avatars/hs-1.png"),
        },
        {
            id: 2,
            image: require("@/assets/images/avatars/hs-2.png"),
        },
        {
            id: 3,
            image: require("@/assets/images/avatars/hs-3.png"),
        },
        {
            id: 4,
            image: require("@/assets/images/avatars/hs-4.png"),
        },
        {
            id: 5,
            image: require("@/assets/images/avatars/hs-5.png"),
        },
        {
            id: 6,
            image: require("@/assets/images/avatars/hs-6.png"),
        },
        {
            id: 7,
            image: require("@/assets/images/avatars/hs-7.png"),
        },
        {
            id: 8,
            image: require("@/assets/images/avatars/hs-8.png"),
        },
    ];

    const handleSelectAvatar = (id: any) => {
        setSeletedAvatar(id);
    };
    return (
        <View style={{ gap: widthScale(24) }}>
            <Pressable
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={
                        AVATARS.find((avatar) => avatar.id === seletedAvatar)
                            ?.image
                    }
                    style={{
                        width: widthScale(96),
                        height: widthScale(96),
                    }}
                />
            </Pressable>
            <View
                style={{
                    flexDirection: "row",
                    gap: widthScale(16),
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {AVATARS.map((avatar, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handleSelectAvatar(avatar.id)}
                    >
                        <Image
                            source={avatar.image}
                            style={{
                                width: widthScale(64),
                                height: widthScale(64),
                            }}
                        />
                    </Pressable>
                ))}
            </View>
        </View>
    );
}
