import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import Home from "./Home/Home";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import CommentsNav from "./NestedScreens/CommentsNavigator";
import ProfilePhotoScreen from "./ProfilePhotoScreen";

const MainStack = createStackNavigator();

const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainStack.Screen name="CommentsNav" component={CommentsNav} />
      <MainStack.Screen name="ProfilePhotoScreen" component={ProfilePhotoScreen} />
    </MainStack.Navigator>
  );
};

export default Navigation;
