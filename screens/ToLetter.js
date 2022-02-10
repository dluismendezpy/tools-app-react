import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert } from "react-native";

const ToLetter = () => {
  let [conversion, setConversion] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Introduce un numero</Text>
      <TextInput
        style={styles.input}
        placeholder="num1"
        keyboardType="numeric"
        onChangeText={(val) => setConversion(parseInt(val))}
      />
      <View>
        <Button
          onPress={() =>
            Alert.alert("Conversion", `${convertir.NumerosALetras(conversion)}`)
          }
          title="Convertir"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default ToLetter;
