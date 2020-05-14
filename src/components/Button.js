import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "700",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
const bold = "mont-bold";
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1db954",
    borderWidth: 0.5,
  },
});
