import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectComment } from "../../redux/comments/commentsSelectors";

const Comments = ({ navigation, route }) => {
  const { postId, postImg } = route.params;
  const allComments = useSelector(selectComment);
  const comments = allComments.filter((item) => item.postId === postId);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postBody}>
        <Image source={{ uri: `${postImg}` }} style={{ width: 380, height: 280, borderRadius: 15, marginTop: 15 }} />
        <ScrollView style={styles.commentList}>
          <FlatList
            data={comments}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
              <View style={styles.commentBody}>
                <Text>{item.postText}</Text>
              </View>
            )}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  commentList: {
    marginTop: 30,
    width: "90%",
  },
  commentStyle: {
    width: "70%",
    backgroundColor: "#ff0",
  },
  postHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    width: "100%",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  postHeaderText: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: 20,
  },
  postBody: {
    width: "100%",
    alignItems: "center",
    flex: 10,
    borderTopColor: "#E8E8E8",
    borderRadius: 50,
    borderTopWidth: 1,
  },
  commentBody: {
    height: 80,
    backgroundColor: "#ff0",
    width: "100%",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  postImg: {
    flex: 3,
    width: "100%",
    height: 600,
    color: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  postImgAdd: {
    display: "flex",
    marginTop: -80,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 3,
    borderColor: "#ffffff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  postImgText: {
    alignItems: "flex-start",
    color: "#fff",
  },
  postForm: {
    flex: 3,
  },
  postButton: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonActive: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  postName: {
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },
});
export default Comments;
