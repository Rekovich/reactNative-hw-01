import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsList from "../NestedScreens/PostsList";
import Comments from "../NestedScreens/Comments";
import Map from "../NestedScreens/Map";

const PostsNavigation = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostsNavigation.Navigator initialRouteName="PostsList" screenOptions={{ headerShown: false }}>
      <PostsNavigation.Screen name="PostsList" component={PostsList} />
      <PostsNavigation.Screen name="Comments" component={Comments} />
      <PostsNavigation.Screen name="Map" component={Map} />
    </PostsNavigation.Navigator>
  );
};

export default PostsScreen;
