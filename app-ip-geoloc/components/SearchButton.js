import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SearchButton = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <Button
      onPress={onPress}
      title="Buscar IP"
      accessibilityLabel="Buscar os dados do endereço de IP"
    />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
});

export default SearchButton;
