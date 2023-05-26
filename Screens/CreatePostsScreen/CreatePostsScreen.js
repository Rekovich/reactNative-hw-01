import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from "./CreatePost";
// import { useNavigation } from "@react-navigation/native";

const BottomTabs = createBottomTabNavigator();

const CreatePostsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, borderBottomColor: "#E8E8E8", borderBottomWidth: 2 },
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity
                style={StyleSheet.deleteBtn}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
              >
                <EvilIcons name="trash" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}
              >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
        }}
        name="Create Post"
        component={CreatePost}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
