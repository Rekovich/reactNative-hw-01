import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CreatePost = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postContainer}>
      <View style={styles.postImage}>
        <TouchableOpacity style={styles.postImageAdd} activeOpacity={0.5}>
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.postImageText}>Загрузити фото</Text>

      <View style={styles.postForm}>
        <TextInput style={styles.postName} placeholder="Назва..." inputMode="text" />
        <TextInput style={styles.postName} placeholder="Місцевість..." />
        <TouchableOpacity style={styles.postBtn} activeOpacity={0.5}>
          <Text style={styles.postBtnText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  postImage: {
    flex: 2,
    width: "80%",
    height: "40%",
    color: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  postImageAdd: {
    width: 40,
    height: 40,
    borderRadius: 100,
    color: "#ffffff",
  },
  postImageText: {
    alignItems: "flex-start",
  },
  postForm: {
    flex: 3,
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
  postBtn: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postBtnText: {
    color: "#ffffff",
    fontWeight: "400",
  },
});

export default CreatePost;
