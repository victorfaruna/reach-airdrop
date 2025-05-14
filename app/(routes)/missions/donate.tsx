import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useCallback, useRef } from "react";
import CustomSafeAreaView from "@/components/Global/CustomSafeAreaView";
import GeneralHeader from "@/components/Header/GeneralHeader";
import { useColors } from "@/hooks/useColors";
import { fontScale, heightScale, scale, widthScale } from "@/config/size";
import MainButton from "@/components/Global/Button";
import Svg, { Path } from "react-native-svg";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";

export default function donate() {
    const { color } = useColors();
    const [amount, setAmount] = React.useState("500");

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // callbacks
    const handleModalToggle = () => {
        bottomSheetModalRef.current?.present();
    };

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1} // Backdrop disappears when sheet is fully closed
                appearsOnIndex={0} // Backdrop appears when sheet is opened
                opacity={0.5} // Adjust transparency here
            />
        ),
        []
    );

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
    });
    return (
        <CustomSafeAreaView>
            <GeneralHeader />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={{ gap: heightScale(4) }}>
                        <Text style={styles.pageTitle}>Donation</Text>
                    </View>
                    {/* space */}
                    <View style={{ gap: heightScale(8) }}>
                        <Text
                            style={{
                                fontFamily: "Manrope-Medium",
                                fontSize: fontScale(14),
                                color: color.textSub,
                            }}
                        >
                            Investment Amount
                        </Text>
                        <View
                            style={{
                                height: heightScale(52),
                                borderRadius: widthScale(8),
                                backgroundColor: color.background2,
                                paddingHorizontal: widthScale(16),
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: widthScale(8),
                            }}
                        >
                            <TextInput
                                value={amount}
                                onChangeText={setAmount}
                                style={{
                                    flex: 1,
                                    fontFamily: "Manrope-Regular",
                                    fontSize: fontScale(15),
                                    color: color.textMain,
                                }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: widthScale(3),
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Manrope-Medium",
                                        fontSize: fontScale(15),
                                        color: color.textSub,
                                    }}
                                >
                                    USD
                                </Text>
                                <Svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    //       xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M3.39998 7.42578L8.83331 12.8591C9.47498 13.5008 10.525 13.5008 11.1666 12.8591L16.6 7.42578"
                                        stroke={color.textSub}
                                        strokeWidth="1.5"
                                        stroke-miterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    {/* space */}
                    <MainButton onPress={() => handleModalToggle()}>
                        <Text
                            style={{
                                fontFamily: "Manrope-Bold",
                                fontSize: fontScale(14),
                                color: color.textMain2,
                            }}
                        >
                            Donate
                        </Text>
                    </MainButton>
                </View>
                <BottomSheetModal
                    enablePanDownToClose
                    ref={bottomSheetModalRef}
                    snapPoints={[203]}
                    backdropComponent={renderBackdrop}
                    backgroundStyle={{
                        borderRadius: scale(30),
                        backgroundColor: color.background2,
                    }}
                >
                    <BottomSheetView
                        style={{
                            flex: 1,
                            justifyContent: "space-between",
                            paddingHorizontal: scale(20),
                            paddingVertical: scale(40),
                            gap: scale(24),
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                bottomSheetModalRef.current?.dismiss();
                                router.push(
                                    "/(routes)/missions/donate-with-card"
                                );
                            }}
                            style={{
                                flexDirection: "row",
                                gap: widthScale(8),
                                alignItems: "center",
                            }}
                        >
                            <Svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M3.92969 15.8797L15.8797 3.92969"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    stroke-miterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M11.1013 18.2781L12.3013 17.0781"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    stroke-miterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M13.793 15.5892L16.183 13.1992"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M3.60127 10.2395L10.2413 3.59949C12.3613 1.47949 13.4213 1.46949 15.5213 3.56949L20.4313 8.47949C22.5313 10.5795 22.5213 11.6395 20.4013 13.7595L13.7613 20.3995C11.6413 22.5195 10.5813 22.5295 8.48127 20.4295L3.57127 15.5195C1.47127 13.4195 1.47127 12.3695 3.60127 10.2395Z"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M2 21.998H22"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>

                            <Text
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(17),
                                    color: color.textMain,
                                }}
                            >
                                Donate with card
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                gap: widthScale(8),
                                alignItems: "center",
                            }}
                        >
                            <Svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                //   xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M18.5 12.6504V16.3504C18.5 19.4704 15.59 22.0004 12 22.0004C8.41 22.0004 5.5 19.4704 5.5 16.3504V12.6504C5.5 15.7704 8.41 18.0004 12 18.0004C15.59 18.0004 18.5 15.7704 18.5 12.6504Z"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <Path
                                    d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                                    stroke={color.textMain}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>

                            <Text
                                style={{
                                    fontFamily: "Manrope-Bold",
                                    fontSize: fontScale(17),
                                    color: color.textMain,
                                }}
                            >
                                Donate with Crypto
                            </Text>
                        </TouchableOpacity>
                    </BottomSheetView>
                </BottomSheetModal>
            </ScrollView>
        </CustomSafeAreaView>
    );
}
