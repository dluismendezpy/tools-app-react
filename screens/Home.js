import React from "react";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";

const Separator = () => <View style={styles.separator} />;

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button onPress={() => navigation.navigate("Detail")} title="Sobre mi" />
    </View>
    <Separator />
    <View>
      <Button
        onPress={() => navigation.navigate("Calculator")}
        title="Calculadora"
      />
    </View>
    <Separator />
    <View>
      <Button
        onPress={() => navigation.navigate("ToLetter")}
        title="Numero a letra"
      />
    </View>
    <Separator />
    <View>
      <Button
        onPress={() => navigation.navigate("MultiplicationTable")}
        title="Tabla de multiplicacion"
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Home;
