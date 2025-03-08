import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path, Rect } from "react-native-svg";
import { router } from "expo-router";

export default function Points() {
  const POINTS = useMemo(() => {
    return [
      {
        title: "Quiz Bonus",
        time: "Today",
        amount: "100P",
        icon: () => (
          <Svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="40" height="40" rx="20" fill="#F1742C" />
            <Path
              d="M22.25 12.5C22.7767 12.4999 23.2942 12.6386 23.7503 12.9019C24.2065 13.1653 24.5852 13.5441 24.8486 14.0002C25.1119 14.4564 25.2505 14.9739 25.2504 15.5006C25.2503 16.0273 25.1115 16.5447 24.848 17.0008L28.25 17V18.5H26.75V26C26.75 26.1989 26.671 26.3897 26.5303 26.5303C26.3897 26.671 26.1989 26.75 26 26.75H14C13.8011 26.75 13.6103 26.671 13.4697 26.5303C13.329 26.3897 13.25 26.1989 13.25 26V18.5H11.75V17L15.152 17.0008C14.7799 16.3564 14.6605 15.5968 14.817 14.8694C14.9736 14.142 15.3948 13.4987 15.999 13.0644C16.6032 12.6302 17.3472 12.4359 18.0866 12.5194C18.8259 12.6029 19.5079 12.9582 20 13.5163C20.2809 13.1963 20.627 12.9401 21.0151 12.7648C21.4032 12.5895 21.8242 12.4993 22.25 12.5ZM19.25 18.5H14.75V25.25H19.25V18.5ZM25.25 18.5H20.75V25.25H25.25V18.5ZM17.75 14C17.3608 13.9983 16.9861 14.1479 16.7051 14.4173C16.4242 14.6867 16.2589 15.0547 16.2443 15.4437C16.2297 15.8327 16.3669 16.2121 16.6269 16.5018C16.8868 16.7915 17.2492 16.9688 17.6375 16.9963L17.75 17H19.25V15.5C19.25 15.1416 19.1217 14.7949 18.8882 14.5229C18.6547 14.251 18.3316 14.0716 17.9773 14.0173L17.8618 14.0038L17.75 14ZM22.25 14C21.8716 13.9999 21.5071 14.1428 21.2296 14.4001C20.9521 14.6574 20.7821 15.0101 20.7537 15.3875L20.75 15.5V17H22.25C22.6284 17.0001 22.9929 16.8572 23.2704 16.5999C23.5479 16.3426 23.7179 15.9899 23.7463 15.6125L23.75 15.5C23.75 15.1022 23.592 14.7206 23.3107 14.4393C23.0294 14.158 22.6478 14 22.25 14Z"
              fill="white"
            />
          </Svg>
        ),
      },

      {
        title: "Quiz Rewards",
        time: "Today",
        amount: "100P",
        icon: () => (
          <Svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="40" height="40" rx="20" fill="#F2B740" />
            <Path
              d="M20 25.25C20.621 25.25 21.125 25.754 21.125 26.375C21.125 26.996 20.621 27.5 20 27.5C19.379 27.5 18.875 26.996 18.875 26.375C18.875 25.754 19.379 25.25 20 25.25ZM20 12.5C22.4855 12.5 24.5 14.5145 24.5 17C24.5 18.6237 23.9353 19.4675 22.4945 20.6923C21.0493 21.92 20.75 22.4727 20.75 23.75H19.25C19.25 21.8945 19.8403 20.9788 21.5233 19.5493C22.661 18.5825 23 18.0755 23 17C23 15.3425 21.6575 14 20 14C18.3425 14 17 15.3425 17 17V17.75H15.5V17C15.5 14.5145 17.5145 12.5 20 12.5Z"
              fill="white"
            />
          </Svg>
        ),
      },

      {
        title: "Daily Rewards",
        time: "Today",
        amount: "100P",
        icon: () => (
          <Svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width="40" height="40" rx="20" fill="#CFD5CD" />
            <Rect x="8" y="8" width="24" height="24" rx="12" fill="white" />
            <Path
              d="M20.84 21.872H17.912V26H16.344V14.432H20.84C23.112 14.432 24.568 15.92 24.568 18.144C24.568 20.304 23.096 21.872 20.84 21.872ZM20.568 15.84H17.912V20.464H20.504C22.056 20.464 22.92 19.552 22.92 18.128C22.92 16.672 22.04 15.84 20.568 15.84Z"
              fill="#576652"
            />
          </Svg>
        ),
      },
    ];
  }, []);
  return (
    <View
      style={{
        borderRadius: scale(16),
        backgroundColor: "#F7FAF6",
      }}
    >
      <View className="top" style={{ padding: scale(20), gap: scale(20) }}>
        <Text
          style={{
            fontFamily: "Satoshi-Bold",
            fontSize: fontScale(16),
            color: "#0D140A",
          }}
        >
          Points
        </Text>

        <View
          style={{
            gap: scale(16),
          }}
        >
          {POINTS.map((point, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: scale(8),
                }}
              >
                {point.icon && point.icon()}
                <View>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Medium",
                      fontSize: fontScale(16),
                      color: "#0D140A",
                      lineHeight: fontScale(20),
                    }}
                  >
                    {point.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Satoshi-Regular",
                      fontSize: fontScale(14),
                      color: "#576652",
                      lineHeight: fontScale(20),
                    }}
                  >
                    {point.time}
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  fontFamily: "Satoshi-Medium",
                  fontSize: fontScale(16),
                  color: "#000000",
                }}
              >
                {point.amount}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(routes)/claim/activities")}
        className="bottom"
        style={{
          padding: scale(20),
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopWidth: scale(1),
          borderTopColor: "#E4E9E2",
        }}
      >
        <Text
          style={{
            fontFamily: "Satoshi-Regular",
            fontSize: fontScale(16),
          }}
        >
          View all Activities
        </Text>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          //   xmlns="http://www.w3.org/2000/Svg"
        >
          <Path
            d="M10.1291 10.0001L8.00732 7.87912L9.06782 6.81787L12.2501 10.0001L9.06782 13.1824L8.00732 12.1211L10.1291 10.0001Z"
            fill="#0D140A"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
