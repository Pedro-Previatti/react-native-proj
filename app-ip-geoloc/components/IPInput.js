import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const IPInput = ({ ip, onIpChange }) => (
  <View>
    <Text>Digite o endereco de IP: </Text>
    <TextInput
      onChangeText={onIpChange}
      value={ip}
      style={styles.input}
      placeholder="Digite o endereço de IP"
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});

export default IPInput;
