import React, { useState } from "react";

import {
  ImageBackground,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { fetchRegisterUser } from "../redux/auth/authOperations";
import { AntDesign } from "@expo/vector-icons";

const backgroundImage = require("../assets/images/photo-bg.png");

const RegistrationScreen = ({ navigation, route }) => {
  const { photo } = route.params;

  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (text) => setLogin(text);
  const handleEmail = (text) => setEmail(text);
  const handlePassword = (text) => setPassword(text);

  const user = () => {
    if (!login || !email || !password) {
      alert("Enter all fields please!");
      return;
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    dispatch(fetchRegisterUser({ email, password, login, photo })).then((result) => {
      result.type === "auth/fetchRegisterUser/fulfilled" && navigation.navigate("Home", { screen: "PostsScreen" });
      result.type !== "auth/fetchRegisterUser/fulfilled" && alert("Incorrect registration!!!");
    });
  };

  const takePhoto = () => {
    navigation.navigate("ProfilePhotoScreen");
  };

  const showPassword = () => alert(`Your password is: ${password}.`);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={backgroundImage} style={styles.bgImage}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKeyboard}>
            <View style={styles.container}>
              <View style={styles.containerAvatar}>{photo && <Image source={{ uri: `${photo}` }} style={styles.photoProf} />}</View>
              <TouchableOpacity
                style={styles.addBtn}
                activeOpacity={0.5}
                onPress={() => {
                  takePhoto();
                }}
              >
                <AntDesign name="pluscircleo" size={24} color="red" />
              </TouchableOpacity>

              <Text style={styles.title}>Реєстрація</Text>

              <TextInput style={styles.inputLogin} placeholder="Логін" value={login} onChangeText={handleLogin} />
              <TextInput style={styles.input} placeholder="Адрес електронної пошти" value={email} onChangeText={handleEmail} />
              <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} value={password} onChangeText={handlePassword} />

              <TouchableOpacity style={styles.passwordShow} activeOpacity={0.5} onPress={showPassword}>
                <Text style={styles.passwordShowText}>Показати</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerBtn} activeOpacity={0.5} onPress={user}>
                <Text style={styles.registerBtnText}>Зареєструватись</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginLinkText}>Вже є аккаунт? Ввійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  container: {
    // marginBottom: -120,
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyboard: {
    justifyContent: "flex-end",
  },
  containerAvatar: {
    marginTop: -60,
    position: "relative",
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    overflow: "hidden",
  },
  addBtn: {
    position: "absolute",
    left: "62%",
    top: 10,
    pointerEvents: "auto",
  },
  addBtnImage: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
    textAlign: "center",
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
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShow: {
    top: -34,
    left: 260,
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
    marginLeft: "auto",
    marginRight: "auto",
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
    textAlign: "center",
    color: "#1B4371",
  },
  photoProf: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignSelf: "center",
  },
});

export default RegistrationScreen;
