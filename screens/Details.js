import React from "react";
import { View, Button, Text, Image } from "react-native";

const Detail = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50 }}>Luis Mendez</Text>
      <Text style={{ fontSize: 25 }}>2019-8304</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../assets/image.jpg")}
      />
    </View>
  );
};

export default Detail;
