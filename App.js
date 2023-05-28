import "react-native-gesture-handler";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./Screens/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoadingScreen from "./Screens/LoadingScreen";
import AuthCheck from "./Screens/Authcheck";

export default function App() {
  return (
    <Provider store={store}>
      <>
        <LoadingScreen />
        <AuthCheck>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </TouchableWithoutFeedback>
        </AuthCheck>
      </>
    </Provider>
  );
}
