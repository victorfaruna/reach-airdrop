import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { fontScale, scale } from "@/config/size";
import { router } from "expo-router";
import SettingsOptions from "@/components/SettingsOptions";

export default function Settings() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          id="TOP"
          style={{
            backgroundColor: "#F7FAF6",
            paddingHorizontal: scale(24),
            paddingVertical: scale(80),
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(routes)/user/profile")}
            style={{
              backgroundColor: "#CFD5CD",
              borderRadius: scale(40),
              alignSelf: "flex-end",
              paddingHorizontal: scale(20),
              paddingVertical: scale(7),
            }}
          >
            <Text
              style={{
                fontSize: fontScale(14),
                fontFamily: "Satoshi-Meidium",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>

          <View style={{ alignItems: "center", gap: scale(4) }}>
            <Image
              style={{ width: scale(72), height: scale(72) }}
              source={require("@/assets/images/headshot-1.png")}
            />
            <Text
              style={{
                fontFamily: "Satoshi-Bold",
                fontSize: fontScale(20),
                lineHeight: fontScale(30),
                color: "#0D140A",
              }}
            >
              Official Okpoba
            </Text>
            <Text
              style={{
                fontFamily: "Satoshi-Regular",
                fontSize: fontScale(14),
                lineHeight: fontScale(20),
                color: "#0D140A",
              }}
            >
              okpoba.perekeme@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(24),
          }}
        >
          <SettingsOptions />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: scale(24),
  },
});
