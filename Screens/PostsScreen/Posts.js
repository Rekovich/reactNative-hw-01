import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";


const Posts = ({ text, message, location, gps, navigation }) => {

  const [gpsLocation, setGpsLocation] = useState({});

  useEffect(() => {
    setGpsLocation(gps);
  }, []);

  const handleCommentClick = () => {
    navigation.navigate("Comments");
  };

  const handleMapClick = () => {
    navigation.navigate("Map", { location });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: `${img}` }} style={styles.postImage}></ImageBackground>
      <Text style={styles.postText}>{text}</Text>
      <View style={styles.postInfoContainer}>
        <TouchableOpacity style={styles.postInfo} onPress={() => navigation.navigate("Comments")}>
          <Feather name="message-circle" size={18} color="gray" />
          <Text>{message}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postInfo} onPress={() => navigation.navigate("Comments")}>
          <Feather name="message-circle" size={18} color="gray" />
          <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postInfo} onPress={handleMapClick}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={styles.postInfoLink}>{location}</Text>
        </TouchableOpacity>
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
