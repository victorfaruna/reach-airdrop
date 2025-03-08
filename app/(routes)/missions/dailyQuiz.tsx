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

export default function dailyQuiz() {
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
              <Text style={styles.taskHeaderText}>Daily Quiz</Text>
            </View>
          </View>
          <Text style={styles.taskDescription}>
            Answer daily quizzes and surveys and get bonus after participating
            seven days in a row.
          </Text>

          <View style={styles.taskControls}>
            <View style={styles.questionNumber}>
              <Text style={styles.questionNumberText}>Q</Text>
            </View>
            <View style={styles.taskControlButtonContainer}>
              <View style={styles.taskControlButton}>
                <Text style={styles.taskControlButtonText}>?</Text>
              </View>
              <View
                style={[
                  styles.taskControlButton,
                  { backgroundColor: "#FBE2B1" },
                ]}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  //   xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M10.2 14.8548L18.4728 6.58105L19.7463 7.85365L10.2 17.4L4.47241 11.6724L5.74501 10.3998L10.2 14.8548Z"
                    fill="#B48018"
                  />
                </Svg>
              </View>
              <View style={styles.taskControlButton}>
                <Text style={styles.taskControlButtonText}>?</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.taskBody}>
          <BonusHunting />
          <View style={styles.questionContainer}>
            <Text style={styles.questionContainerText}>Quiz Question</Text>
            <Text style={styles.questionText}>
              What is the name of the Founder of Reach?
            </Text>
          </View>
          <View>
            <RadioGroup
              value={selectedOption}
              data={OPTIONS_DATA}
              onOptionSelect={(value) => setSelectedOption(value)}
            />
          </View>
          <TouchableOpacity
            disabled={isButtonDisabled}
            style={{
              backgroundColor: isButtonDisabled ? "#F7FAF6" : "#5CC738",
              borderRadius: scale(8),
              padding: scale(16),
            }}
          >
            <Text
              style={{
                fontFamily: "Satoshi-Medium",
                fontSize: fontScale(16),
                lineHeight: fontScale(20),
                color: isButtonDisabled ? "#CFD5CD" : "#FFFFFF",
                textAlign: "center",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>

          <View style={styles.lookingForHints}>
            <View style={{ gap: scale(8), flex: 1 }}>
              <Text style={styles.lookingForHintsTitle}>
                Looking for Hints?
              </Text>
              <Text style={styles.lookingForHintsText}>
                Join our support community and brainstorm with other community
                members.
              </Text>
            </View>
            <Svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
            >
              <Rect width="56" height="56" rx="28" fill="white" />
              <Path
                d="M19 37.0001C19 35.0905 19.7586 33.2592 21.1088 31.9089C22.4591 30.5587 24.2904 29.8001 26.2 29.8001C28.1096 29.8001 29.9409 30.5587 31.2912 31.9089C32.6414 33.2592 33.4 35.0905 33.4 37.0001H31.6C31.6 35.5679 31.0311 34.1944 30.0184 33.1817C29.0057 32.169 27.6322 31.6001 26.2 31.6001C24.7678 31.6001 23.3943 32.169 22.3816 33.1817C21.3689 34.1944 20.8 35.5679 20.8 37.0001H19ZM26.2 28.9001C23.2165 28.9001 20.8 26.4836 20.8 23.5001C20.8 20.5166 23.2165 18.1001 26.2 18.1001C29.1835 18.1001 31.6 20.5166 31.6 23.5001C31.6 26.4836 29.1835 28.9001 26.2 28.9001ZM26.2 27.1001C28.189 27.1001 29.8 25.4891 29.8 23.5001C29.8 21.5111 28.189 19.9001 26.2 19.9001C24.211 19.9001 22.6 21.5111 22.6 23.5001C22.6 25.4891 24.211 27.1001 26.2 27.1001ZM33.6556 30.4328C34.9204 31.0024 35.9938 31.9252 36.7467 33.0902C37.4997 34.2553 37.9001 35.6129 37.9 37.0001H36.1C36.1002 35.9597 35.7999 34.9413 35.2352 34.0675C34.6705 33.1937 33.8654 32.5016 32.9167 32.0744L33.6547 30.4328H33.6556ZM33.0364 20.2718C33.9432 20.6456 34.7185 21.2803 35.2639 22.0954C35.8094 22.9105 36.1004 23.8693 36.1 24.8501C36.1004 26.0852 35.6389 27.2758 34.8063 28.188C33.9736 29.1003 32.83 29.6682 31.6 29.7803V27.9686C32.2668 27.8731 32.8855 27.5663 33.3652 27.0933C33.8448 26.6203 34.1602 26.006 34.265 25.3405C34.3699 24.6751 34.2586 23.9936 33.9475 23.396C33.6365 22.7985 33.1421 22.3164 32.5369 22.0205L33.0364 20.2718Z"
                fill="#0D140A"
              />
            </Svg>
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
                d="M30.7 19C31.332 18.9999 31.953 19.1663 32.5004 19.4823C33.0477 19.7983 33.5023 20.2529 33.8182 20.8003C34.1342 21.3477 34.3005 21.9686 34.3004 22.6007C34.3003 23.2327 34.1338 23.8536 33.8176 24.4009L37.9 24.4V26.2H36.1V35.2C36.1 35.4387 36.0052 35.6676 35.8364 35.8364C35.6676 36.0052 35.4387 36.1 35.2 36.1H20.8C20.5613 36.1 20.3324 36.0052 20.1636 35.8364C19.9948 35.6676 19.9 35.4387 19.9 35.2V26.2H18.1V24.4L22.1824 24.4009C21.7359 23.6277 21.5926 22.7162 21.7804 21.8433C21.9682 20.9704 22.4737 20.1984 23.1988 19.6773C23.9238 19.1562 24.8166 18.9231 25.7038 19.0233C26.5911 19.1235 27.4094 19.5498 28 20.2195C28.3371 19.8355 28.7524 19.5281 29.2181 19.3178C29.6838 19.1074 30.189 18.9991 30.7 19ZM27.1 26.2H21.7V34.3H27.1V26.2ZM34.3 26.2H28.9V34.3H34.3V26.2ZM25.3 20.8C24.8329 20.7979 24.3833 20.9775 24.0461 21.3007C23.709 21.624 23.5107 22.0657 23.4932 22.5325C23.4757 22.9992 23.6403 23.4545 23.9522 23.8022C24.2642 24.1498 24.699 24.3626 25.165 24.3955L25.3 24.4H27.1V22.6C27.1 22.1699 26.946 21.7539 26.6658 21.4275C26.3856 21.1011 25.9979 20.8859 25.5727 20.8207L25.4341 20.8045L25.3 20.8ZM30.7 20.8C30.2459 20.7999 29.8085 20.9714 29.4755 21.2802C29.1425 21.5889 28.9385 22.0122 28.9045 22.465L28.9 22.6V24.4H30.7C31.1541 24.4001 31.5915 24.2286 31.9245 23.9199C32.2575 23.6111 32.4614 23.1878 32.4955 22.735L32.5 22.6C32.5 22.1226 32.3103 21.6648 31.9728 21.3272C31.6352 20.9896 31.1774 20.8 30.7 20.8Z"
                fill="#0D140A"
              />
            </Svg>

            <View style={{ gap: scale(8), flex: 1 }}>
              <Text style={styles.lookingForHintsTitle}>Bonus 200P</Text>
              <Text style={styles.lookingForHintsText}>
                Don’t fret about wrong answers. You can still get rewarded by
                participating 7 days in a row.
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
                d="M36.1 19.8999C36.3387 19.8999 36.5676 19.9947 36.7364 20.1635C36.9052 20.3323 37 20.5612 37 20.7999V25.7499C36.4033 25.7499 35.831 25.987 35.409 26.4089C34.9871 26.8309 34.75 27.4032 34.75 27.9999C34.75 28.5966 34.9871 29.1689 35.409 29.5909C35.831 30.0128 36.4033 30.2499 37 30.2499V35.1999C37 35.4386 36.9052 35.6675 36.7364 35.8363C36.5676 36.0051 36.3387 36.0999 36.1 36.0999H19.9C19.6613 36.0999 19.4324 36.0051 19.2636 35.8363C19.0948 35.6675 19 35.4386 19 35.1999V30.2499C19.5967 30.2499 20.169 30.0128 20.591 29.5909C21.0129 29.1689 21.25 28.5966 21.25 27.9999C21.25 27.4032 21.0129 26.8309 20.591 26.4089C20.169 25.987 19.5967 25.7499 19 25.7499V20.7999C19 20.5612 19.0948 20.3323 19.2636 20.1635C19.4324 19.9947 19.6613 19.8999 19.9 19.8999H36.1ZM35.2 21.6999H20.8V24.3711L20.9404 24.444C21.5509 24.777 22.0653 25.2617 22.4342 25.8512C22.803 26.4408 23.0139 27.1153 23.0464 27.81L23.05 27.9999C23.0501 28.7273 22.8543 29.4413 22.483 30.0669C22.1118 30.6925 21.5789 31.2065 20.9404 31.5549L20.8 31.6287V34.2999H35.2V31.6278L35.0596 31.5558C34.4491 31.2228 33.9347 30.7381 33.5658 30.1486C33.197 29.5591 32.9861 28.8845 32.9536 28.1898L32.95 27.9999C32.95 26.4663 33.8023 25.1316 35.0596 24.4449L35.2 24.3702V21.6999Z"
                fill="#0D140A"
              />
            </Svg>

            <View style={{ gap: scale(8), flex: 1 }}>
              <Text style={styles.lookingForHintsTitle}>Everyday</Text>
              <Text style={styles.lookingForHintsText}>
                Everyday, a quiz is revealed one by one which will enable you to
                earn bonus.
              </Text>
            </View>
          </View>
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
    backgroundColor: "#F2B740",
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
  taskControls: {
    flex: 1,
    gap: scale(8),
    alignSelf: "center",
    justifyContent: "center",
  },
  questionNumber: {
    width: scale(63),
    height: scale(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    alignSelf: "flex-start",
    borderRadius: scale(4),
  },
  questionNumberText: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
    color: "#fff",
  },
  taskControlButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(16),
  },
  taskControlButton: {
    width: scale(66),
    height: scale(38),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    borderRadius: scale(4),
  },
  taskControlButtonText: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
    color: "#000",
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
  questionContainer: {
    maxWidth: scale(268),
    gap: scale(12),
  },
  questionContainerText: {
    fontFamily: "Satoshi-Bold",
    fontSize: fontScale(20),
    lineHeight: fontScale(30),
    color: "#0D140A",
  },
  questionText: {
    fontFamily: "Satoshi-Medium",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    color: "#0D140A",
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
