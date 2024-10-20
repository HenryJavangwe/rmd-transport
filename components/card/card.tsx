import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
}

const Card = ({ i, title, description }: CardProps) => {
  return (
    <View key={i} style={styles.card}>
      <Text style={[styles.title, styles.textColor]}>
        {title} {i + 1}
      </Text>
      <View style={styles.separator} />
      <Text style={styles.textColor}>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    marginTop: 20,
    padding: 10,
    width: "100%",
    borderRadius: 8,
    elevation: 10,
    backgroundColor: "#B1065C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
  textColor: {
    color: "#FFD9DA",
  },
});
