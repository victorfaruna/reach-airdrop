import { View, Image, Dimensions, StatusBar } from "react-native";
import React from "react";

import { scale } from "@/config/size";
import { useColors } from "@/hooks/useColors";

export default function Background({
    children,
    style,
}: {
    children: any;
    style?: any;
}) {
    const { width, height } = Dimensions.get("window");
    const { color } = useColors();
    return (
        <View
            style={{
                width,
                height,
                flex: 1,
                backgroundColor: color.background,
                position: "relative",
            }}
        >
            <Image
                source={require("@/assets/graphics/circleShader.png")}
                style={{
                    width,
                    height: scale(500),
                    position: "absolute",
                    zIndex: 1,
                }}
            />
            <View style={{ ...style }}>{children}</View>
            <StatusBar hidden />
        </View>
    );
}
