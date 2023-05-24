import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "../../source/data";
import Posts from "../PostsScreen/Posts";
import { Feather } from "@expo/vector-icons";

const bgImage = require("../../assets/images/photo-bg.png");
const addBtn = require("../../assets/images/add.png");
const avatar = require("../../assets/images/avatar.png");
const postImage = require("../../assets/images/post_image.png");

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground source={avatar} style={{ width: "100%", height: "100%" }}></ImageBackground>
                <TouchableOpacity style={styles.add} activeOpacity={0.5}>
                  <ImageBackground source={addBtn} style={{ width: "100%", height: "100%" }}></ImageBackground>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.5} onPress={() => navigation.navigate("Home", { screen: "PostsScreen" })}>
                <Feather name="log-out" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.title}>Natali Romanova</Text>
              {data.map((elem) => (
                <Posts key={elem.id} image={postImage} text={elem.name} message={0} location={elem.location} />
              ))}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  logoutBtn: {
    marginLeft: 350,
    marginTop: -40,
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 200,
  },
  containerKeyboard: {
    justifyContent: "flex-end",
  },
  imageContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    overflow: "visible",
  },

  add: {
    marginTop: -40,
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  addBtn: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwordShow: {
    top: -34,
    left: 130,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerBtnText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default ProfileScreen;
