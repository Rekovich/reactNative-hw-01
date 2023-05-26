import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, View, Text } from "react-native";
import Profile from "../PostsScreen/Profile";
// import Posts from "../PostsScreen/Posts";
const avatar = require("../../assets/images/avatar.png");

const PostsList = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <Profile avatar={avatar} name="Natali Romanova" email="email@example.com" />
    //     {posts.map((el) => (
    //       <Posts key={el.title} img={{ uri: el.photo }} text={el.title} msgs={0} location={el.inputRegion} gps={el.location} />
    //     ))}
    //   </ScrollView>
    // </SafeAreaView>
    <>
      <View style={styles.container}>
        <Profile avatar={avatar} name="Natali Romanova" email="email@example.com" />
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: item.photo }} style={{ width: 380, height: 280, borderRadius: 15 }} />
              <Text style={styles.postsText}>{item.title}</Text>
              <View style={styles.comments}>
                <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("Comments")}>
                  <Feather name="message-circle" size={18} color="gray" />
                  <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("Map", { location: item.location })}>
                  <EvilIcons name="location" size={24} color="gray" />
                  <Text style={styles.infoLink}>{item.inputRegion}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: 400,
    height: 400,
    padding: 10,
  },
  comments: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
  },
  postsText: {
    alignSelf: "flex-start",
    marginTop: 8,
    marginLeft: 40,
    fontWeight: "500",
    fontSize: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10,
  },
  infoLink: {
    textDecorationLine: "underline",
  },
});

export default PostsList;
