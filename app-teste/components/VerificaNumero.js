import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => (
  <View>
    {props.numero % 2 == 0 ? (
      <Text style={styles.text}>Numero {props.numero} eh par</Text>
    ) : (
      <Text style={styles.text}>Numero {props.numero} eh impar</Text>
    )}
  </View>
);

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
