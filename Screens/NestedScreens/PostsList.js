import React from "react";
import { Image, FlatList, StyleSheet, View, Text } from "react-native";
import Profile from "../PostsScreen/Profile";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/posts/postsSelectors";
import { selectComment } from "../../redux/comments/commentsSelectors";

const PostList = ({ navigation }) => {
  const posts = useSelector(selectAllPosts);
  const allComments = useSelector(selectComment);

  const getCommentsCount = (id) => {
    const commentsCount = allComments.filter((item) => item.postId === id).length;
    return commentsCount;
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Profile />
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: `${item.photo}` }} style={{ width: 380, height: 280, borderRadius: 15 }} />
              <Text style={styles.posText}>{item.title}</Text>
              <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "85%" }}>
                <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("CommentsNav", { postId: item.id, postImg: item.photo })}>
                  <Feather name="message-circle" size={18} color="gray" />
                  <Text>{getCommentsCount(item.id)}</Text>
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
    width: 400,
    height: 400,
    justifyContent: "flex-start",
    padding: 10,
  },
  postImg: {
    flex: 4,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  posText: {
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
  infoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default PostList;
