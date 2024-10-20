import { ImageBackground, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import React from "react";
import BaseButton from "@/components/button/button";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function TabTwoScreen() {
  const router = useRouter();

  const onPress = () => {
    router.replace("/home");
  };

  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("../assets/images/taxi2.webp")}
        style={styles.imageBackground}
        resizeMode="cover"
        imageStyle={styles.imageStyles}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>RMD</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          {/* <Text style={styles.description}>Taxi & Driver Management App</Text> */}
          <Text style={styles.description}>
            Transport Trip Tracker & Manager
          </Text>
          <BaseButton
            onPress={onPress}
            customStyles={{ label: { color: "#fff" } }}
          >
            Login
          </BaseButton>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#fff",
    marginBottom: 40,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  imageStyles: {
    opacity: 0.35,
  },
});
