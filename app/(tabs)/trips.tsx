import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import React from "react";
import BaseButton from "@/components/button/button";
import { Link, useRouter } from "expo-router";
import Card from "@/components/card/card";

export default function TabTwoScreen() {
  const router = useRouter();

  const onPress = () => {
    router.push("/add-trip");
  };

  const cards = new Array(3)
    .fill(0)
    .map((_, i) => (
      <Card
        i={i}
        description="This will be an article description and will not be long text."
        title="Past Trip Log"
      />
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Damien</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.2)"
      />

      <BaseButton
        onPress={onPress}
        customStyles={{ container: { marginVertical: 10, width: 160 } }}
      >
        Add New Trip
      </BaseButton>

      {cards}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "80%",
  },
  separator: {
    marginBottom: 10,
    height: 2,
    width: "50%",
  },
  link: {
    color: "#000",
  },
});
