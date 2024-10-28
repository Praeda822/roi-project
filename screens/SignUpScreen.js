import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUp Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          // I'm using the navigation object INSIDE of the prop to be able to call the goBack function
          props.navigation.goBack();
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
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

/* 
The SignUpScreen function is defined as a functional component that takes props as an argument. Inside the component, a View container is used to wrap the entire content of the screen. The View component is styled using the styles.container object, which centers its children both vertically and horizontally.

Within the View, a Text component displays the string "SignUp Screen" and is styled using styles.text, which sets the font size and margin. Below the Text component, a Button component is rendered with the title "Go Back". The onPress prop of the Button is assigned an anonymous function that calls props.navigation.goBack(). This function utilizes the navigation object passed through props to navigate back to the previous screen in the navigation stack.

The styles object is created using StyleSheet.create to define the styles for the container and text. The container style sets the flex property to 1, making it take up the full screen, and centers its children. The text style sets the font size to 18 and adds a bottom margin of 20 units.
*/
