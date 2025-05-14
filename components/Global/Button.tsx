import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { heightScale, widthScale } from "@/config/size";
import { Colors } from "@/constants/Colors";

interface MainButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export default function MainButton({
    style,
    children,
    onPress,
    disabled,
}: MainButtonProps) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                {
                    height: heightScale(49),
                    borderRadius: widthScale(50),
                    backgroundColor: Colors.accent,
                    opacity: disabled ? 0.4 : 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                },
                style,
            ]}
        >
            {children}
        </TouchableOpacity>
    );
}
