import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Evento extends React.Component {
  state = {
    disciplina: "Desenvolvimento para Dispositivos Móveis",
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.disciplina}
          value={this.state.disciplina}
          onChangeText={(disciplina) => this.setState({ disciplina })}
        ></TextInput>
        <Text style={styles.fonte20}>{this.state.disciplina}</Text>
      </View>
    );
  }
}
export default Evento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  disciplina: {
    height: 40,
    width: 380,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
  },
  fonte20: {
    fontSize: 20,
    color: "red",
  },
});
