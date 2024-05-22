import React from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

class Geolocalizacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      KEY: "aa7fb0625d5a4f9bb49fd50af1ad451c",
      ip: "8.8.4.4",
    };

    this.findIp = this.findIp.bind(this);
  }

  componentDidMount() {
    this.findIp();
  }

  findIp() {
    const options = { method: "GET" };

    let url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${this.state.KEY}&ip_address=${this.state.ip}`;

    return fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ api: response });
        this.setState({ ip: this.state.api.ip });
        console.log(response);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Digite o endereco de IP: </Text>
          <TextInput
            onChange={(api) => {
              this.setState({ ip: api.nativeEvent.text });
            }}
            value={this.state.ip}
            style={styles.input}
            placeholder="Digite o endereco de IP"
          />
        </View>
        <View>
          <Button
            onPress={this.findIp}
            title="Buscar IP"
            accessibilityLabel="Buscar os dados do endereco de IP"
          />
        </View>
        {this.state.api && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>IP: {this.state.api.ip_address}</Text>
            <Text style={styles.dataText}>Cidade: {this.state.api.city}</Text>
            <Text style={styles.dataText}>Regiao: {this.state.api.region}</Text>
            <Text style={styles.dataText}>Pais: {this.state.api.country}</Text>
            <Text style={styles.dataText}>
              Continente: {this.state.api.continent}
            </Text>
            <Text style={styles.dataText}>
              Longitude: {this.state.api.longitude}
            </Text>
            <Text style={styles.dataText}>
              Latitude: {this.state.api.latitude}
            </Text>
            <Text style={styles.dataText}>
              Timezone: {this.state.api.timezone.name}{" "}
              {this.state.api.timezone.abbreviation}
            </Text>
            <Text style={styles.dataText}>
              Horario: {this.state.api.timezone.current_time}
            </Text>
            <Text style={styles.dataText}>
              Tipo da Conexao: {this.state.api.connection.connection_type}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default Geolocalizacao;

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
