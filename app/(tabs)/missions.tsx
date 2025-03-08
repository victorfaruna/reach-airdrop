import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useMemo } from "react";
import { fontScale, scale } from "@/config/size";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path, Rect } from "react-native-svg";
import CompletedMissions from "@/components/CompletedMissions";
import { router } from "expo-router";

export default function Missions() {
  const MISSIIONS = useMemo(() => {
    return [
      {
        id: 1,
        title: "Daily Quiz",
        route: "dailyQuiz",
        description:
          "You will receive cards when you invite friends and your invited friends will receive bonus points. ",
        token: "100 P",
        icon: () => (
          <Svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="48" height="48" rx="8" fill="white" />
            <Path
              d="M18.3867 28.4999H31.2V17.6999H16.8V29.7464L18.3867 28.4999ZM19.0095 30.2999L15 33.4499V16.7999C15 16.5612 15.0948 16.3323 15.2636 16.1635C15.4324 15.9947 15.6613 15.8999 15.9 15.8999H32.1C32.3387 15.8999 32.5676 15.9947 32.7364 16.1635C32.9052 16.3323 33 16.5612 33 16.7999V29.3999C33 29.6386 32.9052 29.8675 32.7364 30.0363C32.5676 30.2051 32.3387 30.2999 32.1 30.2999H19.0095ZM23.1 25.7999H24.9V27.5999H23.1V25.7999ZM20.9103 21.1316C21.0272 20.5464 21.3079 20.0065 21.7198 19.5746C22.1316 19.1427 22.6576 18.8366 23.2365 18.692C23.8155 18.5474 24.4236 18.5702 24.9902 18.7577C25.5567 18.9452 26.0583 19.2897 26.4367 19.7512C26.8151 20.2127 27.0546 20.7721 27.1275 21.3644C27.2003 21.9567 27.1034 22.5575 26.8482 23.0969C26.5929 23.6363 26.1897 24.0921 25.6855 24.4113C25.1812 24.7305 24.5968 24.8999 24 24.8999H23.1V23.0999H24C24.2557 23.0999 24.5061 23.0273 24.7221 22.8905C24.9381 22.7537 25.1108 22.5584 25.2202 22.3273C25.3295 22.0962 25.371 21.8388 25.3398 21.5851C25.3086 21.3313 25.206 21.0916 25.0438 20.8939C24.8817 20.6962 24.6668 20.5486 24.4241 20.4683C24.1814 20.3879 23.9208 20.3782 23.6728 20.4401C23.4247 20.5021 23.1994 20.6332 23.0229 20.8182C22.8465 21.0033 22.7262 21.2346 22.6761 21.4853L20.9103 21.1316Z"
              fill="#0D140A"
            />
          </Svg>
        ),
        background: "#F2B740",
        status: "Daily",
      },

      {
        id: 2,
        title: "Invite Friends",
        route: "inviteFriends",
        description:
          "Answer daily quizzes and surveys and get bonus after participating seven days in a row. ",
        token: "Freind's Card",
        icon: () => (
          <Svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="48" height="48" rx="8" fill="#EBEFFF" />
            <Path
              d="M15 33.0001C15 31.0905 15.7586 29.2592 17.1088 27.9089C18.4591 26.5587 20.2904 25.8001 22.2 25.8001C24.1096 25.8001 25.9409 26.5587 27.2912 27.9089C28.6414 29.2592 29.4 31.0905 29.4 33.0001H27.6C27.6 31.5679 27.0311 30.1944 26.0184 29.1817C25.0057 28.169 23.6322 27.6001 22.2 27.6001C20.7678 27.6001 19.3943 28.169 18.3816 29.1817C17.3689 30.1944 16.8 31.5679 16.8 33.0001H15ZM22.2 24.9001C19.2165 24.9001 16.8 22.4836 16.8 19.5001C16.8 16.5166 19.2165 14.1001 22.2 14.1001C25.1835 14.1001 27.6 16.5166 27.6 19.5001C27.6 22.4836 25.1835 24.9001 22.2 24.9001ZM22.2 23.1001C24.189 23.1001 25.8 21.4891 25.8 19.5001C25.8 17.5111 24.189 15.9001 22.2 15.9001C20.211 15.9001 18.6 17.5111 18.6 19.5001C18.6 21.4891 20.211 23.1001 22.2 23.1001ZM29.6556 26.4328C30.9204 27.0024 31.9938 27.9252 32.7467 29.0902C33.4997 30.2553 33.9001 31.6129 33.9 33.0001H32.1C32.1002 31.9597 31.7999 30.9413 31.2352 30.0675C30.6705 29.1937 29.8654 28.5016 28.9167 28.0744L29.6547 26.4328H29.6556ZM29.0364 16.2718C29.9432 16.6456 30.7185 17.2803 31.2639 18.0954C31.8094 18.9105 32.1004 19.8693 32.1 20.8501C32.1004 22.0852 31.6389 23.2758 30.8063 24.188C29.9736 25.1003 28.83 25.6682 27.6 25.7803V23.9686C28.2668 23.8731 28.8855 23.5663 29.3652 23.0933C29.8448 22.6203 30.1602 22.006 30.265 21.3405C30.3699 20.6751 30.2586 19.9936 29.9475 19.396C29.6365 18.7985 29.1421 18.3164 28.5369 18.0205L29.0364 16.2718Z"
              fill="#0D140A"
            />
          </Svg>
        ),
        background: "#C2CFFF",
        status: "Ongoing",
      },

      {
        id: 3,
        title: "Retweet",
        route: "retweet",
        description:
          "You have to retweet our latest post on X to claim bonus points.",
        token: "X Post Retweet",
        icon: () => (
          <Svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="48" height="48" rx="8" fill="white" />
            <Path
              d="M18.1167 17.1897C19.7498 15.7746 21.8391 14.997 24 15C28.9707 15 33 19.0293 33 24C33 25.9224 32.397 27.7044 31.371 29.166L28.5 24H31.2C31.2001 22.5885 30.7853 21.208 30.0072 20.0303C29.2291 18.8526 28.1219 17.9297 26.8235 17.3761C25.525 16.8226 24.0924 16.6629 22.704 16.917C21.3155 17.1711 20.0323 17.8277 19.014 18.8052L18.1167 17.1897ZM29.8833 30.8103C28.2502 32.2254 26.1609 33.003 24 33C19.0293 33 15 28.9707 15 24C15 22.0776 15.603 20.2956 16.629 18.834L19.5 24H16.8C16.7999 25.4115 17.2147 26.792 17.9928 27.9697C18.7709 29.1474 19.8781 30.0704 21.1765 30.6239C22.475 31.1774 23.9076 31.3371 25.296 31.083C26.6845 30.8289 27.9677 30.1723 28.986 29.1948L29.8833 30.8103Z"
              fill="#0D140A"
            />
          </Svg>
        ),
        background: "#EBFAFF",
        status: "Ongoing",
      },
    ];
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: scale(24),
            gap: scale(24),
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Satoshi-Regular",
                fontSize: fontScale(16),
                lineHeight: fontScale(20),
              }}
            >
              Hi Official, {"\n"}you&apos;ve got{" "}
              <Text style={{ fontFamily: "Satoshi-Medium" }}>
                3 New Missions.
              </Text>
            </Text>
          </View>

          <View className="missions" style={{ gap: scale(24) }}>
            {MISSIIONS.map((mission, index) => (
              <TouchableOpacity
                onPress={() =>
                  router.push(("/(routes)/missions/" + mission.route) as any)
                }
                key={index}
                className="mission"
                style={{
                  backgroundColor: mission.background,
                  borderRadius: scale(16),
                  gap: scale(36),
                  padding: scale(24),
                }}
              >
                <View
                  className="mission-header"
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {mission.icon && mission.icon()}
                  <View
                    style={{
                      borderRadius: scale(40),
                      borderWidth: scale(1),
                      borderColor: "#576652",
                      paddingVertical: scale(4),
                      paddingHorizontal: scale(20),
                    }}
                  >
                    <Text>{mission.status}</Text>
                  </View>
                </View>

                <Text
                  style={{
                    fontFamily: "Satoshi-Bold",
                    fontSize: fontScale(24),
                    color: "#0D140A",
                  }}
                >
                  {mission.token}
                </Text>
                <View style={{ gap: scale(16) }}>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(20),
                      color: "#0D140A",
                    }}
                  >
                    {mission.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Regular",
                      fontSize: fontScale(16),
                      color: "#0D140A",
                    }}
                  >
                    {mission.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <CompletedMissions />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
