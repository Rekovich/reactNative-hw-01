import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsList from "../NestedScreens/PostsList";
import Map from "../NestedScreens/Map";
import Posts from "./Posts";

const PostsNavigation = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostsNavigation.Navigator initialRouteName="PostsList" screenOptions={{ headerShown: false }}>
      <PostsNavigation.Screen name="Posts" component={Posts} />
      <PostsNavigation.Screen name="PostsList" component={PostsList} />
      <PostsNavigation.Screen name="Map" component={Map} />
    </PostsNavigation.Navigator>
  );
};

export default PostsScreen;
