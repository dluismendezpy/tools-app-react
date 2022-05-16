import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Alert } from "react-native";

const MultiplicationTable = () => {
  let result = [];
  let num = 0;
  let [conversion, setNumber] = useState(0);
  for (let i = 1; i <= 13; i++) {
    num = conversion * i;
    result.push(`${conversion} X ${i} = ${num}\n`);
  }

  return (
    <View style={styles.container}>
      <Text>Introduce un numero</Text>
      <TextInput
        style={styles.input}
        placeholder="num1"
        keyboardType="numeric"
        onChangeText={(val) => setNumber(parseInt(val))}
      />
      <View>
        <Button
          onPress={() => Alert.alert(`Tabla del ${conversion}`, `${result}`)}
          title="Crear tabla"
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

export default MultiplicationTable;
