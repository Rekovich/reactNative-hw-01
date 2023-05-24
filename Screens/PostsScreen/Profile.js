import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Profile = ({ avatar, name, email }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={avatar} style={styles.image}></ImageBackground>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text>{email}</Text>
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
