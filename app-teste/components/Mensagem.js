import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MeusEstilos from "../styles/MeusEstilos";

export default function (props) {
  return (
    <View>
      <Text style={estilos.text}>DDM</Text>
      <Text style={estilos.text}>{props.aula}</Text>
    </View>
  );
}
const estilos = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "blue",
    borderWidth: 2,
    padding: 15,
  },
});
