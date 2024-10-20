import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import React from "react";
import BaseButton from "@/components/button/button";
import BaseIcon from "@/components/Icon/BaseIcon";
import Card from "@/components/card/card";

export default function TabOneScreen() {
  const cards = new Array(10)
    .fill(0)
    .map((_, i) => (
      <Card
        i={i}
        description="This will be an article description and will not be long text."
        title="Feed Article"
      />
    ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.feedContainer}>
        {cards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  feedContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e0329",
    width: "100%",
    padding: 20,
  },
});
