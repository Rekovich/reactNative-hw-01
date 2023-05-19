import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from './Screens/LoginScreen';

const backgroundImage = require('./assets/images/photo-bg.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <RegistrationScreen />
        {/* <LoginScreen/> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
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
    justifyContent: 'center',
    width: '100%',
  }
});
