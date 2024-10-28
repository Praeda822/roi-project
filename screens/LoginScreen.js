import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>

      <Button
        title="Go to Sign up"
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
      />
      <Button
        title="Go to Error"
        onPress={() => {
          props.navigation.navigate("Error");
        }}
      />
      <Button
        title="Go to Error"
        onPress={() => {
          props.navigation.navigate("Error");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3a",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
