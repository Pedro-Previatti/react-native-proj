import React from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

class Geolocalizacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: null,
      KEY: "aa7fb0625d5a4f9bb49fd50af1ad451c",
      ip: "8.8.4.4",
      region: {
        latitude: 37.751,
        longitude: -97.822,
        latitudeDelta: 7.376,
        longitudeDelta: 3.368,
      },
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
        if (response && response.latitude && response.longitude) {
          this.setState({
            api: response,
            ip: response.ip_address,
            region: {
              ...this.state.region,
              latitude: parseFloat(response.latitude),
              longitude: parseFloat(response.longitude),
            },
          });
        } else {
          console.error("Formato de resposta inválido", response);
        }
        console.log(response);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { api, region } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.image}
          />
          <View>
            <Text>Digite o endereco de IP: </Text>
            <TextInput
              onChangeText={(text) => this.setState({ ip: text })}
              value={this.state.ip}
              style={styles.input}
              placeholder="Digite o endereço de IP"
            />
          </View>
          <View>
            <Button
              onPress={this.findIp}
              title="Buscar IP"
              accessibilityLabel="Buscar os dados do endereço de IP"
            />
          </View>
          {api && (
            <>
              <MapView
                style={styles.map}
                region={region}
                customMapStyle={mapStyle}
              >
                <Marker
                  coordinate={{
                    latitude: api.latitude,
                    longitude: api.longitude,
                  }}
                  title="Localização"
                  description={api.city}
                  pinColor="red"
                />
              </MapView>

              <View style={styles.dataContainer}>
                <Text style={styles.dataText}>IP: {api.ip_address}</Text>

                <Text style={styles.dataText}>
                  Organização: {api.connection.autonomous_system_organization}
                </Text>

                <Text style={styles.dataText}>
                  ISP: {api.connection.isp_name}
                </Text>

                <Text style={styles.dataText}>Cidade: {api.city}</Text>

                <Text style={styles.dataText}>Região: {api.region}</Text>

                <Text style={styles.dataText}>
                  Código Postal: {api.postal_code}
                </Text>

                <Text style={styles.dataText}>
                  País: {api.country} {"-"} {api.country_code} {api.flag.emoji}
                </Text>

                <Text style={styles.dataText}>Continente: {api.continent}</Text>

                <Text style={styles.dataText}>Longitude: {api.longitude}</Text>

                <Text style={styles.dataText}>Latitude: {api.latitude}</Text>

                <Text style={styles.dataText}>
                  Fuso Horário: {api.timezone.name} {api.timezone.abbreviation}
                </Text>

                <Text style={styles.dataText}>
                  Hora atual: {api.timezone.current_time}
                </Text>

                {(() => {
                  if (api.connection.connection_type === "Corporate") {
                    return (
                      <Text style={styles.dataText}>
                        Tipo da Conexão: Acesso Corporativo
                      </Text>
                    );
                  } else if (api.connection.connection_type === "Cellular") {
                    return (
                      <Text style={styles.dataText}>
                        Tipo da Conexão: Acesso por Celular
                      </Text>
                    );
                  } else if (api.connection.connection_type === "Cable/DSL") {
                    return (
                      <Text style={styles.dataText}>
                        Tipo da Conexão: Acesso por Cabo/DSL
                      </Text>
                    );
                  } else {
                    return (
                      <Text style={styles.dataText}>
                        Tipo da Conexão: Acesso Discado
                      </Text>
                    );
                  }
                })()}

                {(() => {
                  if (api.security.is_vpn == true) {
                    return (
                      <Text style={styles.dataText}>
                        Usando VPN: Verdadeiro
                      </Text>
                    );
                  } else {
                    return (
                      <Text style={styles.dataText}>Usando VPN: Falso</Text>
                    );
                  }
                })()}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default Geolocalizacao;

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
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
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  dataContainer: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  map: {
    width: "100%",
    height: 300,
    marginTop: 20,
    borderRadius: 8,
  },
});
