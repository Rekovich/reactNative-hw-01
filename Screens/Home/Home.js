import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { useDispatch } from "react-redux";
import { fetchLogOutUser } from "../../redux/auth/authOperations";
import { fetchGetAllPosts } from "../../redux/posts/postsOperations";
import { fetchGetAllComments } from "../../redux/comments/commentsOperations";

const BottomTabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(fetchLogOutUser()).then((result) => {
      result.type === "auth/fetchLogOutUser/fulfilled" && navigation.navigate("Login");
      result.type !== "auth/fetchLogOutUser/fulfilled" && alert("Incorrect logOut!!!");
    });
  };

  useEffect(() => {
    dispatch(fetchGetAllComments());
    dispatch(fetchGetAllPosts());
  }, [dispatch]);

  return (
    <BottomTabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <SimpleLineIcons name="grid" size={20} color={color} />;
          },
          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.5} onPress={handleLogOut}>
              <Feather name="log-out" size={24} color="gray" />
            </TouchableOpacity>
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />

      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity style={styles.addBtn} activeOpacity={0.5} onPress={() => navigation.navigate("CreatePostsScreen")}>
                <Text style={styles.addBtnText}>+</Text>
              </TouchableOpacity>
            );
          },
          headerShown: false,
          tabBarStyle: { display: "none" },
          headerTitleAlign: "center",
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />

      <BottomTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name="user" size={20} color={color} />;
          },
          headerShown: false,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerBtnText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopColor: "#999999",
    borderTopWidth: 1,
  },
  addBtn: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addBtnText: {
    color: "#ffffff",
    fontSize: 18,
  },
  gridBtn: {
    marginRight: 40,
  },
  userBtn: {
    marginLeft: 40,
  },
});

export default Home;
