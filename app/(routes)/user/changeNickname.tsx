import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fontScale, scale } from "@/config/size";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function changeNickname() {
  const formerNickname = "Officialokpoba";
  const [nickname, setNickname] = useState(formerNickname);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSave = () => {};

  useEffect(() => {
    if (nickname === formerNickname) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [nickname]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View
            className="main-container"
            style={{
              flex: 1,
              padding: scale(20),
              justifyContent: "space-between",
            }}
          >
            <View
              id="TOP"
              style={{
                gap: scale(24),
              }}
            >
              <View
                className="header"
                style={{ flexDirection: "row", gap: scale(16) }}
              >
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
                <Text
                  style={{
                    fontFamily: "Satoshi-Bold",
                    fontSize: fontScale(20),
                    color: "#0D140A",
                  }}
                >
                  Change Nickname
                </Text>
              </View>

              <Text
                style={{
                  fontFamily: "Satoshi-Medium",
                  fontSize: fontScale(16),
                  lineHeight: fontScale(20),
                  color: "#8B9886",
                }}
              >
                Current Nickname
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: scale(1.5),
                  borderBottomColor: "#0D140A",
                }}
              >
                <TextInput
                  value={nickname}
                  onChangeText={(text) => setNickname(text)}
                  style={{
                    flex: 1,
                    fontSize: fontScale(16),
                    fontFamily: "Satoshi-Medium",
                  }}
                  placeholder="e.g bobbyfischer"
                />
                <Svg
                  onPress={() => setNickname("")}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  //   xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M10.0001 8.93955L13.7126 5.22705L14.7731 6.28755L11.0605 10.0001L14.7731 13.7126L13.7126 14.7731L10.0001 11.0605L6.28755 14.7731L5.22705 13.7126L8.93955 10.0001L5.22705 6.28755L6.28755 5.22705L10.0001 8.93955Z"
                    fill="#576652"
                  />
                </Svg>
              </View>

              <View
                id="WARNING"
                style={{
                  borderRadius: scale(8),
                  backgroundColor: "#FBE2B1",
                  padding: scale(16),
                  flexDirection: "row",
                  gap: scale(8),
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
                    d="M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM12 19.2C13.9096 19.2 15.7409 18.4414 17.0912 17.0912C18.4414 15.7409 19.2 13.9096 19.2 12C19.2 10.0904 18.4414 8.25909 17.0912 6.90883C15.7409 5.55857 13.9096 4.8 12 4.8C10.0904 4.8 8.25909 5.55857 6.90883 6.90883C5.55857 8.25909 4.8 10.0904 4.8 12C4.8 13.9096 5.55857 15.7409 6.90883 17.0912C8.25909 18.4414 10.0904 19.2 12 19.2ZM11.1 7.5H12.9V9.3H11.1V7.5ZM11.1 11.1H12.9V16.5H11.1V11.1Z"
                    fill="#0D140A"
                  />
                </Svg>
                <Text
                  style={{
                    flex: 1,
                    fontFamily: "Satoshi-Regular",
                    fontSize: fontScale(14),
                    lineHeight: fontScale(20),
                    color: "#0D140A",
                  }}
                >
                  You can change your nickname again in 14days from the last
                  changes.
                </Text>
              </View>
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
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
