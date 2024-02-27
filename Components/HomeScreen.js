import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido al Juego Geoguessr</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("GameScreen")}
      >
        <Text style={styles.btnText}>Empezar Partida</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "black",
    marginBottom: 100,
  },
  btn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
