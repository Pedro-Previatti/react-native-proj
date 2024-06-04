import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import IPInput from "./IPInput";
import SearchButton from "./SearchButton";
import DataDisplay from "./DataDisplay";
import Map from "./Map";
import { fetchGeolocationData } from "../utils/api";

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

  async findIp() {
    const data = await fetchGeolocationData(this.state.ip, this.state.KEY);
    if (data) {
      this.setState({
        api: data,
        ip: data.ip_address,
        region: {
          ...this.state.region,
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.longitude),
        },
      });
    }
  }

  render() {
    const { api, region, ip } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.image}
          />
          <IPInput ip={ip} onIpChange={(text) => this.setState({ ip: text })} />
          <SearchButton onPress={this.findIp} />
          {api && (
            <>
              <Map region={region} api={api} />
              <DataDisplay api={api} />
            </>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default Geolocalizacao;

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
});
