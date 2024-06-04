import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DataDisplay = ({ api }) => (
  <View style={styles.dataContainer}>
    <Text style={styles.dataText}>IP: {api.ip_address}</Text>
    <Text style={styles.dataText}>
      Organização: {api.connection.autonomous_system_organization}
    </Text>
    <Text style={styles.dataText}>ISP: {api.connection.isp_name}</Text>
    <Text style={styles.dataText}>Cidade: {api.city}</Text>
    <Text style={styles.dataText}>Região: {api.region}</Text>
    <Text style={styles.dataText}>Código Postal: {api.postal_code}</Text>
    <Text style={styles.dataText}>
      País: {api.country} - {api.country_code} {api.flag.emoji}
    </Text>
    <Text style={styles.dataText}>Continente: {api.continent}</Text>
    <Text style={styles.dataText}>Longitude: {api.longitude}</Text>
    <Text style={styles.dataText}>Latitude: {api.latitude}</Text>
    <Text style={styles.dataText}>
      Fuso Horário: {api.timezone.name} {api.timezone.abbreviation}
    </Text>
    <Text style={styles.dataText}>Hora atual: {api.timezone.current_time}</Text>
    <Text style={styles.dataText}>
      Tipo da Conexão:
      {api.connection.connection_type === "Corporate"
        ? "Acesso Corporativo"
        : api.connection.connection_type === "Cellular"
        ? "Acesso por Celular"
        : api.connection.connection_type === "Cable/DSL"
        ? "Acesso por Cabo/DSL"
        : "Acesso Discado"}
    </Text>
    <Text style={styles.dataText}>
      Usando VPN: {api.security.is_vpn ? "Verdadeiro" : "Falso"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
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
});

export default DataDisplay;
