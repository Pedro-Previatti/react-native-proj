import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => <View>{parImpar(props.numero)}</View>;

function parImpar(numero) {
  return numero % 2 == 0 ? (
    <Text style={styles.text}>Número é par</Text>
  ) : (
    <Text style={styles.text}>Número é ímpar</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
