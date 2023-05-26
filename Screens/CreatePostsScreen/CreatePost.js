import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const navigation = useNavigation();

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState({});
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [region, setRegion] = useState(null);
  const [inputRegion, setInputRegion] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.getCurrentPositionAsync({})
        .then((locationPos) => {
          const coords = {
            latitude: locationPos.coords.latitude,
            longitude: locationPos.coords.longitude,
          };
          setLocation(coords);
          return coords;
        })
        .then((coords) => {
          return Location.reverseGeocodeAsync(coords);
        })
        .then((regionName) => setRegion(regionName))
        .catch();
    })();
  }, []);

  const active = title && region;

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    setInputRegion(region[0]["country"] + ", " + region[0]["city"]);
  };

  const inputTitle = (text) => {
    setTitle(text);
  };

  const handleCreate = () => {
    if (!title || !location || !photo) {
      alert("Enter all field please!");
      return;
    }
    navigation.navigate("PostsList", { photo, location, inputRegion, title });
  };

  return (
    <View style={styles.postContainer}>
      {/* <View style={styles.postImage}> */}
      <Camera style={styles.postImage} ref={setCamera}>
        <Image source={{ uri: photo }} style={styles.cameraImg} />
      </Camera>
      <TouchableOpacity style={styles.postImageAdd} activeOpacity={0.5} onPress={takePhoto}>
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
      {/* </View> */}
      <Text style={styles.postImageText}>Загрузити фото</Text>

      <View style={styles.postForm}>
        <TextInput style={styles.postName} placeholder="Назва..." inputMode="text" onChangeText={inputTitle} />
        <TextInput style={styles.postName} placeholder="Місцевість..." value={inputRegion} />
        <TouchableOpacity style={active ? styles.postBtnActive : styles.postBtn} activeOpacity={0.5} onPress={handleCreate}>
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
    flex: 3,
    // width: "80%",
    // height: "40%",
    width: "100%",
    height: 600,
    color: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  postImageAdd: {
    // width: 40,
    // height: 40,
    // borderRadius: 100,
    // color: "#ffffff",
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
  postImageText: {
    alignItems: "flex-start",
    color: "#ffffff",
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
  postBtnActive: {
    backgroundColor: "#FF6C00",
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
  cameraImg: {
    height: 220,
    width: 220,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    marginTop: -80,
  },
});

export default CreatePost;
