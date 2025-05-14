import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { fontScale, widthScale, heightScale } from "@/config/size";
import { useColors } from "@/hooks/useColors";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import Background from "@/components/Onboarding/Background";
const { width } = Dimensions.get("window");

const DATA = [
    {
        id: "1",
        title: "Welcome to Reach",
        text: "Join our community and start investing in tokenized real-world assets while making impactful donations to causes you care about.",
        image: require("@/assets/images/onb1.png"),
    },
    {
        id: "2",
        title: "Invest, Swap, and Donate in One Place",
        text: "Easily add funds using your card, swap tokens, support real-world projects and receive tokenized rewards.",
        image: require("@/assets/images/onb2.png"),
    },
    {
        id: "3",
        title: "Secure Your Account & Earn Rewards",
        text: "Protect your transactions with a PIN and two-factor authentication (2FA), and track your rewards from the donations you’ve made.",
        image: require("@/assets/images/onb3.png"),
    },
];

export default function Onboarding() {
    const { color } = useColors();
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        if (currentIndex < DATA.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        } else {
            router.push("/(routes)/onboarding/signup");
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "flex-end",
            gap: heightScale(24),
        },

        pagination: {
            flexDirection: "row",
            gap: widthScale(4),
            justifyContent: "center",
        },

        paginationItem: {
            width: widthScale(20),
            height: heightScale(5),
            borderRadius: heightScale(6),
            backgroundColor: color.accent,
        },

        textBody: {
            gap: heightScale(8),
            paddingHorizontal: widthScale(16),
        },

        title: {
            fontFamily: "Satoshi-Bold",
            fontSize: fontScale(24),
            color: color.textMain,
            textAlign: "center",
        },

        text: {
            fontFamily: "Satoshi-Medium",
            fontSize: fontScale(14),
            color: color.textSub,
            textAlign: "center",
        },

        button: {
            marginHorizontal: widthScale(28),
            padding: widthScale(10),
            height: heightScale(50),
            borderRadius: heightScale(50),
            marginVertical: heightScale(40),
            backgroundColor: color.accent,
            flexDirection: "row",
            gap: widthScale(8),
            alignItems: "center",
            justifyContent: "center",
        },

        buttonText: {
            fontFamily: "Satoshi-Bold",
            fontSize: fontScale(14),
            color: color.textMain2,
            textAlign: "center",
        },
    });

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ width, gap: heightScale(16) }}>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Image
                        source={item.image}
                        style={{
                            width: "96%",
                            height: heightScale(365),
                            objectFit: "contain",
                            alignSelf: "center",
                        }}
                    />
                </View>
                <View style={styles.pagination}>
                    <View
                        style={[
                            styles.paginationItem,
                            { opacity: index === 0 ? 1 : 0.5 },
                        ]}
                    ></View>
                    <View
                        style={[
                            styles.paginationItem,
                            { opacity: index === 1 ? 1 : 0.5 },
                        ]}
                    ></View>
                    <View
                        style={[
                            styles.paginationItem,
                            { opacity: index === 2 ? 1 : 0.5 },
                        ]}
                    ></View>
                </View>
                <View style={styles.textBody}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <Background style={styles.container}>
            <FlatList
                ref={flatListRef}
                onScroll={handleScroll}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Continue</Text>
                <Svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289L8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893C6.90237 0.683418 6.90237 1.31658 7.29289 1.70711L9.58579 4H1.5C0.947716 4 0.5 4.44772 0.5 5C0.5 5.55228 0.947716 6 1.5 6H9.58579L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12.7071 5.70711Z"
                        fill={color.textMain2}
                    />
                </Svg>
            </TouchableOpacity>
        </Background>
    );
}
