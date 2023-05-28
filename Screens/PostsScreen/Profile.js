import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

const Profile = () => {
  const { user, name, photo } = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <Image source={{ uri: `${photo}` }} style={styles.image}></Image>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>{user}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: 32,
    marginBottom: 20,
    marginLeft: 20,
  },
  image: {
    borderRadius: 15,
    width: 60,
    height: 60,
  },
  name: {
    fontWeight: "700",
  },
  info: {
    justifyContent: "center",
    marginLeft: 20,
  },
});

export default Profile;
