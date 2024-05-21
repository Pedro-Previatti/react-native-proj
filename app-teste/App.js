import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mensagem from "./components/Mensagem";
import VerificaNumero from "./components/VerificaNumero";

export default function App() {
  return (
    <View style={styles.container}>
      <Mensagem aula="Tecnologias Hibridas" />
      <VerificaNumero numero={2} />
      <VerificaNumero numero={5} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
