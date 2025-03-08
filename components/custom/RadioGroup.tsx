import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { fontScale, scale } from "@/config/size";

interface RadioGroupProps {
  value: string | number | any;
  data: {
    label: string;
    value: string | number;
  }[];
  onOptionSelect: (value: any) => void;
}

const Icon = ({ color }: { color: string }) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={color}
    // xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M10 16.25C6.54822 16.25 3.75 13.4517 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75C13.4517 3.75 16.25 6.54822 16.25 10C16.25 13.4517 13.4517 16.25 10 16.25ZM10 15C12.7614 15 15 12.7614 15 10C15 7.23857 12.7614 5 10 5C7.23857 5 5 7.23857 5 10C5 12.7614 7.23857 15 10 15Z"
      fill={color}
    />
  </Svg>
);

export function RadioGroup({ data, value, onOptionSelect }: RadioGroupProps) {
  return (
    <View style={styles.radioContainer}>
      {data.map((item, index) => (
        <Pressable
          onPress={() => onOptionSelect(item.value)}
          key={index}
          style={[
            styles.radioItem,
            value === item.value && { borderColor: "#F2B740" },
          ]}
        >
          <Icon color={value === item.value ? "#F2B740" : "#576652"} />
          <Text style={styles.radioLabel}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    gap: scale(20),
  },

  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(8),
    padding: scale(16),
    gap: scale(10),
    borderWidth: scale(1),
    borderColor: "#E4E9E2",
  },

  radioLabel: {
    fontFamily: "Satoshi-Regular",
    fontSize: fontScale(16),
    lineHeight: fontScale(20),
    letterSpacing: fontScale(0.25),
    color: "#0D140A",
  },
});
