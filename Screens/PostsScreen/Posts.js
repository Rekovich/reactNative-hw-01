import { View, StyleSheet, ImageBackground, Text } from "react-native";
import {EvilIcons, Feather} from '@expo/vector-icons'

const Posts = ({ image, text, message, location }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.postImage}></ImageBackground>
      <Text style={styles.postText}>{text}</Text>
      <View style={styles.postInfoContainer}>
        <View style={styles.postInfo}>
          <Feather name="message-circle" size={18} color="gray" />
          <Text>{message}</Text>
        </View>

        <View style={styles.postInfo}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={styles.postInfoLink}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    justifyContent: "flex-start",
    padding: 10,
  },
  postImage: {
    flex: 4,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  postText: {
    textAlign: "left",
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  postInfoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10,
  },
  postInfoLink: {
    textDecorationLine: "underline",
  },
});

export default Posts;
