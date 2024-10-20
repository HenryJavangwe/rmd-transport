import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";
import React, { ReactNode } from "react";

interface ChildProps {
  children: ReactNode;
  onPress?: () => void;
  customStyles?: Record<string, StyleProp<ViewStyle | TextStyle | ImageStyle>>;
}

const BaseButton = ({ children, onPress, customStyles }: ChildProps) => {
  const pressHandler = () => {
    onPress && onPress();
  };

  return (
    <View style={[styles.container, customStyles?.container]}>
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        onPress={pressHandler}
      >
        <Text style={[styles.label, customStyles?.label]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderRadius: 8,
    backgroundColor: "#72063c",
    padding: 5,
    minWidth: 200,
    overflow: "hidden",
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
  pressed: {
    opacity: 0.5,
  },
});
