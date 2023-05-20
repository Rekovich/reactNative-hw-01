import { StatusBar } from "expo-status-bar";
import { ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useState } from "react";

const backgroundImage = require("./assets/images/photo-bg.png");

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreen = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
          {activeScreen === 0 ? <LoginScreen changeScreen={changeScreen} /> : <RegistrationScreen changeScreen={changeScreen} />}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
