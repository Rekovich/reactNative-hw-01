import "react-native-gesture-handler";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from './Screens/Navigation'

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}
