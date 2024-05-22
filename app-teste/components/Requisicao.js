import React from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

class Requisicao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      cep: "",
    };

    this.fetchDados = this.fetchDados.bind(this);
  }

  componentDidMount() {
    this.fetchDados();
  }

  fetchDados() {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json`)
      .then((response) => response.json())
      .then((json) => this.setState({ dados: json }))
      .catch((err) => this.setState({ dados: { err } }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Digite o CEP: </Text>
          <TextInput
            onChangeText={(cep) => {
              this.setState({ cep });
            }}
            value={this.state.cep}
            keyboardType="numeric"
            style={styles.input}
            placeholder="Digite o CEP"
          />
        </View>
        <View>
          <Button
            onPress={this.fetchDados()}
            title="Buscar endereco"
            accessibilityLabel="Buscar os dados do endereco do CEP digitado"
          />
        </View>
        {this.state.dados && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>CEP: {this.state.dados.cep}</Text>
            <Text style={styles.dataText}>
              Logradouro: {this.state.dados.logradouro}
            </Text>
            <Text style={styles.dataText}>
              Bairro: {this.state.dados.bairro}
            </Text>
            <Text style={styles.dataText}>
              Cidade: {this.state.dados.localidade}
            </Text>
            <Text style={styles.dataText}>Estado: {this.state.dados.uf}</Text>
          </View>
        )}
        {!this.state.dados.erro ? <Text>Ok</Text> : <Text>Não Ok</Text>}
      </View>
    );
  }
}

export default Requisicao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dataContainer: {
    marginTop: 20,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
