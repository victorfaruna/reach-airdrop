import { View, Text, Image } from "react-native";
import React from "react";
import { scale, widthScale } from "@/config/size";

export default function HeadshotCluster() {
    return (
        <View style={{ alignItems: "flex-end", gap: scale(6) }}>
            <Image
                source={require("@/assets/images/headshot-3.png")}
                style={{ width: scale(39), height: scale(39) }}
            />
            <View style={{ flexDirection: "row", gap: scale(8) }}>
                <Image
                    source={require("@/assets/images/headshot-4.png")}
                    style={{ width: scale(28), height: scale(28) }}
                />
                <Image
                    source={require("@/assets/images/headshot-2.png")}
                    style={{
                        width: scale(51),
                        height: scale(51),
                        marginRight: widthScale(8),
                    }}
                />
            </View>
            <Image
                source={require("@/assets/images/headshot-5.png")}
                style={{ width: scale(28), height: scale(28) }}
            />
        </View>
    );
}
