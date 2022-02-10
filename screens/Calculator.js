import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert } from "react-native";

const Calculator = () => {
  let [n1, setN1] = useState(0);
  let [n2, setN2] = useState(0);
  let suma = n1 + n2;

  return (
    <View style={styles.container}>
      <Text>Primer numero</Text>
      <TextInput
        style={styles.input}
        placeholder="num1"
        onChangeText={(val) => setN1(parseInt(val))}
      />

      <Text>Segundo numero</Text>
      <TextInput
        style={styles.input}
        placeholder="num2"
        onChangeText={(val) => setN2(parseInt(val))}
      />

      <View>
        <Button
          onPress={() => Alert.alert("Suma", `La suma es igual a ${suma}`)}
          title="Sumar"
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

export default Calculator;
