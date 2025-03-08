import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { fontScale, scale } from "@/config/size";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, Rect } from "react-native-svg";
import { router } from "expo-router";
import BonusHunting from "@/components/BonusHunting";
import { RadioGroup } from "@/components/custom/RadioGroup";
import InviteLeaderboard from "@/components/InviteLeaderboard";

export default function inviteFriends() {
  const insets = useSafeAreaInsets();
  const OPTIONS_DATA = [
    { label: "Ebibere Dokubo", value: 1 },
    { label: "John Gbobo", value: 2 },
    { label: "Simon Erekosima", value: 3 },
    { label: "DanCharles Okoto", value: 4 },
  ];
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption === null) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [selectedOption]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={[styles.taskMain, { paddingTop: scale(24 + insets.top) }]}>
          <View style={styles.taskHeader}>
            <View style={styles.taskHeaderLeft}>
              <TouchableOpacity
                hitSlop={scale(20)}
                onPress={() => router.back()}
              >
                <Svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M11.0452 12.4991L15.5002 16.9541L14.2276 18.2267L8.5 12.4991L14.2276 6.77148L15.5002 8.04408L11.0452 12.4991Z"
                    fill="#0D140A"
                  />
                </Svg>
              </TouchableOpacity>
              <Text style={styles.taskHeaderText}>Invite Friends</Text>
            </View>
          </View>
          <Text style={styles.taskDescription}>
            You will receive cards while your invited friends will get bonus
            points.
          </Text>
        </View>
        <View style={styles.taskBody}>
          <View
            style={[
              styles.lookingForHints,
              { backgroundColor: "transparent", paddingLeft: 0 },
            ]}
          >
            <Svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              //   xmlns="http://www.w3.org/2000/Svg"
            >
              <Rect width="56" height="56" rx="28" fill="#F7FAF6" />
              <Path
                d="M19 37.0001C19 35.0905 19.7586 33.2592 21.1088 31.9089C22.4591 30.5587 24.2904 29.8001 26.2 29.8001C28.1096 29.8001 29.9409 30.5587 31.2912 31.9089C32.6414 33.2592 33.4 35.0905 33.4 37.0001H31.6C31.6 35.5679 31.0311 34.1944 30.0184 33.1817C29.0057 32.169 27.6322 31.6001 26.2 31.6001C24.7678 31.6001 23.3943 32.169 22.3816 33.1817C21.3689 34.1944 20.8 35.5679 20.8 37.0001H19ZM26.2 28.9001C23.2165 28.9001 20.8 26.4836 20.8 23.5001C20.8 20.5166 23.2165 18.1001 26.2 18.1001C29.1835 18.1001 31.6 20.5166 31.6 23.5001C31.6 26.4836 29.1835 28.9001 26.2 28.9001ZM26.2 27.1001C28.189 27.1001 29.8 25.4891 29.8 23.5001C29.8 21.5111 28.189 19.9001 26.2 19.9001C24.211 19.9001 22.6 21.5111 22.6 23.5001C22.6 25.4891 24.211 27.1001 26.2 27.1001ZM33.6556 30.4328C34.9204 31.0024 35.9938 31.9252 36.7467 33.0902C37.4997 34.2553 37.9001 35.6129 37.9 37.0001H36.1C36.1002 35.9597 35.7999 34.9413 35.2352 34.0675C34.6705 33.1937 33.8654 32.5016 32.9167 32.0744L33.6547 30.4328H33.6556ZM33.0364 20.2718C33.9432 20.6456 34.7185 21.2803 35.2639 22.0954C35.8094 22.9105 36.1004 23.8693 36.1 24.8501C36.1004 26.0852 35.6389 27.2758 34.8063 28.188C33.9736 29.1003 32.83 29.6682 31.6 29.7803V27.9686C32.2668 27.8731 32.8855 27.5663 33.3652 27.0933C33.8448 26.6203 34.1602 26.006 34.265 25.3405C34.3699 24.6751 34.2586 23.9936 33.9475 23.396C33.6365 22.7985 33.1421 22.3164 32.5369 22.0205L33.0364 20.2718Z"
                fill="#0D140A"
              />
            </Svg>

            <View style={{ gap: scale(8), flex: 1 }}>
              <Text style={styles.lookingForHintsTitle}>Friend’s Card</Text>
              <Text style={styles.lookingForHintsText}>
                When your invited friends join over, you will receive a card as
                as reward. Keep these cards for future benefits and surprises.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.lookingForHints,
              { backgroundColor: "transparent", paddingLeft: 0 },
            ]}
          >
            <Svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
            >
              <Rect width="56" height="56" rx="28" fill="#F7FAF6" />
              <Path
                d="M36.1 19.8999C36.3387 19.8999 36.5676 19.9947 36.7364 20.1635C36.9052 20.3323 37 20.5612 37 20.7999V25.7499C36.4033 25.7499 35.831 25.987 35.409 26.4089C34.9871 26.8309 34.75 27.4032 34.75 27.9999C34.75 28.5966 34.9871 29.1689 35.409 29.5909C35.831 30.0128 36.4033 30.2499 37 30.2499V35.1999C37 35.4386 36.9052 35.6675 36.7364 35.8363C36.5676 36.0051 36.3387 36.0999 36.1 36.0999H19.9C19.6613 36.0999 19.4324 36.0051 19.2636 35.8363C19.0948 35.6675 19 35.4386 19 35.1999V30.2499C19.5967 30.2499 20.169 30.0128 20.591 29.5909C21.0129 29.1689 21.25 28.5966 21.25 27.9999C21.25 27.4032 21.0129 26.8309 20.591 26.4089C20.169 25.987 19.5967 25.7499 19 25.7499V20.7999C19 20.5612 19.0948 20.3323 19.2636 20.1635C19.4324 19.9947 19.6613 19.8999 19.9 19.8999H36.1ZM35.2 21.6999H20.8V24.3711L20.9404 24.444C21.5509 24.777 22.0653 25.2617 22.4342 25.8512C22.803 26.4408 23.0139 27.1153 23.0464 27.81L23.05 27.9999C23.0501 28.7273 22.8543 29.4413 22.483 30.0669C22.1118 30.6925 21.5789 31.2065 20.9404 31.5549L20.8 31.6287V34.2999H35.2V31.6278L35.0596 31.5558C34.4491 31.2228 33.9347 30.7381 33.5658 30.1486C33.197 29.5591 32.9861 28.8845 32.9536 28.1898L32.95 27.9999C32.95 26.4663 33.8023 25.1316 35.0596 24.4449L35.2 24.3702V21.6999ZM31.6 25.2999V30.6999H24.4V25.2999H31.6Z"
                fill="#0D140A"
              />
            </Svg>

            <View style={{ gap: scale(8), flex: 1 }}>
              <Text style={styles.lookingForHintsTitle}>Ongoing Missions</Text>
              <Text style={styles.lookingForHintsText}>
                Enjoy the benefits over and over! Please make sure that using
                improper methods may disqualify rewards.
              </Text>
            </View>
          </View>

          <InviteLeaderboard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: scale(24),
  },

  taskMain: {
    backgroundColor: "#C2CFFF",
    paddingHorizontal: scale(24),
    gap: scale(8),
    height: scale(333),
  },

  taskHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  taskHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },

  taskHeaderText: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
    lineHeight: fontScale(27),
    color: "#0D140A",
  },

  taskDescription: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    color: "#0D140A",
  },
  taskBody: {
    paddingHorizontal: scale(24),
    paddingBottom: scale(24),
    gap: scale(24),
  },

  lookingForHints: {
    backgroundColor: "#FBE2B1",
    borderRadius: scale(8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scale(24),
    gap: scale(16),
  },

  lookingForHintsTitle: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    color: "#0D140A",
  },
  lookingForHintsText: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
    color: "#576652",
  },
});
