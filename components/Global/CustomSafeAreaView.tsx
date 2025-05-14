import { useColors } from "@/hooks/useColors";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomSafeAreaViewProps extends ViewProps {
    children: React.ReactNode;
    addBottomPadding?: boolean;
}

export default function CustomSafeAreaView({
    children,
    style,
    addBottomPadding = false,
    ...props
}: CustomSafeAreaViewProps) {
    const { color } = useColors();
    const insets = useSafeAreaInsets();
    return (
        <View
            style={[
                {
                    flex: 1,
                    paddingTop: insets.top,
                    paddingBottom: addBottomPadding ? insets.bottom : 0,
                    backgroundColor: color.background,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </View>
    );
}
