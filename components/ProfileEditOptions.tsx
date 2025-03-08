import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const Icon = ({ style }: { style?: any }) => (
  <Svg
    style={style}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.63675 7.99943L5.66675 5.02943L6.51515 4.18103L10.3335 7.99943L6.51515 11.8178L5.66675 10.9694L8.63675 7.99943Z"
      fill="#576652"
    />
  </Svg>
);

export default function ProfileEditOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => router.push("/(routes)/user/changeNickname")}
          style={styles.item}
        >
          <Text style={styles.key}>Nickname</Text>
          <View style={styles.value}>
            <Text style={styles.valueText}>Officialokpoba</Text>
            <Icon />
          </View>
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.key}>Email</Text>
          <View style={styles.value}>
            <Text style={styles.valueText}>officialokpoba@gmail.com</Text>
            <Icon style={{ opacity: 0.5 }} />
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.key}>Twitter</Text>
          <View style={styles.value}>
            <Text style={styles.valueText}>@officialokpoba</Text>
            <Icon />
          </View>
        </View>

        <View style={[styles.item, { borderBottomWidth: 0 }]}>
          <Text style={styles.key}>Invitations</Text>
          <View style={styles.value}>
            <Text style={styles.valueText}>30 Invitations</Text>
            <Icon />
          </View>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.key}>Copy invitation link</Text>
          <View style={styles.value}>
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M14.7729 12.6519L13.7124 11.5899L14.7729 10.5294C15.1237 10.1818 15.4023 9.76825 15.5928 9.31263C15.7832 8.857 15.8818 8.36824 15.8829 7.8744C15.884 7.38057 15.7875 6.89138 15.5991 6.43492C15.4106 5.97847 15.1338 5.56374 14.7846 5.21454C14.4354 4.86534 14.0207 4.58856 13.5642 4.40007C13.1077 4.21159 12.6186 4.11512 12.1247 4.1162C11.6309 4.11728 11.1421 4.21589 10.6865 4.40638C10.2309 4.59686 9.81736 4.87546 9.4697 5.22618L8.4092 6.28743L7.34795 5.22693L8.40995 4.16643C9.39456 3.18181 10.73 2.62866 12.1224 2.62866C13.5149 2.62866 14.8503 3.18181 15.8349 4.16643C16.8196 5.15105 17.3727 6.48647 17.3727 7.87893C17.3727 9.27139 16.8196 10.6068 15.8349 11.5914L14.7737 12.6519H14.7729ZM12.6519 14.7729L11.5907 15.8334C10.6061 16.818 9.27066 17.3712 7.8782 17.3712C6.48574 17.3712 5.15031 16.818 4.1657 15.8334C3.18108 14.8488 2.62793 13.5134 2.62793 12.1209C2.62793 10.7285 3.18108 9.39305 4.1657 8.40843L5.22695 7.34793L6.28745 8.40993L5.22695 9.47043C4.87622 9.81809 4.59763 10.2316 4.40714 10.6872C4.21666 11.1429 4.11805 11.6316 4.11697 12.1255C4.11589 12.6193 4.21236 13.1085 4.40084 13.5649C4.58933 14.0214 4.86611 14.4361 5.21531 14.7853C5.56451 15.1345 5.97924 15.4113 6.43569 15.5998C6.89215 15.7883 7.38133 15.8847 7.87517 15.8837C8.36901 15.8826 8.85777 15.784 9.31339 15.5935C9.76902 15.403 10.1825 15.1244 10.5302 14.7737L11.5907 13.7132L12.6519 14.7737V14.7729ZM12.1209 6.81768L13.1822 7.87893L7.87895 13.1814L6.8177 12.1209L12.1209 6.81843V6.81768Z"
                fill="#0D140A"
              />
            </Svg>
          </View>
        </View>

        <View style={[styles.item, { borderBottomWidth: 0 }]}>
          <Text style={styles.key}>Copy invitation code</Text>
          <View style={styles.value}>
            <Text style={[styles.valueText, { fontFamily: "Satoshi-Medium" }]}>
              107WGH331G
            </Text>
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M6.25 5.5V3.25C6.25 3.05109 6.32902 2.86032 6.46967 2.71967C6.61032 2.57902 6.80109 2.5 7 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V13.75C16.75 13.9489 16.671 14.1397 16.5303 14.2803C16.3897 14.421 16.1989 14.5 16 14.5H13.75V16.75C13.75 17.164 13.4125 17.5 12.9948 17.5H4.00525C3.90635 17.5006 3.8083 17.4816 3.71674 17.4442C3.62519 17.4068 3.54192 17.3517 3.47174 17.282C3.40156 17.2123 3.34584 17.1294 3.30779 17.0381C3.26974 16.9468 3.2501 16.8489 3.25 16.75L3.25225 6.25C3.25225 5.836 3.58975 5.5 4.0075 5.5H6.25ZM4.75225 7L4.75 16H12.25V7H4.75225ZM7.75 5.5H13.75V13H15.25V4H7.75V5.5Z"
                fill="#0D140A"
              />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: scale(24),
  },

  itemContainer: {
    backgroundColor: "#F7FAF6",
    borderRadius: scale(8),
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: scale(16),
    borderBottomWidth: scale(1),
    borderColor: "#E4E9E2",
  },

  key: {
    fontFamily: "Satoshi-Medium",
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
    color: "#0D140A",
  },

  value: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },

  valueText: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
    color: "#0D140A",
  },
});
