// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Profile from "./Profile";
import Posts from "./Posts";
import data from "../../source/data";
import postImage from "../../assets/images/post_image.png";
import avatar from "../../assets/images/avatar.png";

const PostsScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Profile avatar={avatar} name="Natali Romanova" email="email@example.com" />
        { data.map (el => 
            <Posts key={ el.id } img = { postImage } text={ el.name } msgs = { 0 } location={ el.location }/>      
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "visible",
  },
});

export default PostsScreen;