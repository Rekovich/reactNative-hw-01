import React, { useState } from "react";

import { ImageBackground, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Platform, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

const backgroundImage = require("../assets/images/photo-bg.png");

const addButtonImage = require("../assets/images/add.png");

const RegistrationScreen = ({ navigation }) => {
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
    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  const showPassword = () => alert(`Your password is: ${password}.`);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={backgroundImage} style={styles.bgImage}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKeyboard}>
          <View style={styles.container}>
            <View style={styles.containerAvatar}>
              <TouchableOpacity style={styles.addBtn}>
                <ImageBackground source={addButtonImage} style={styles.addBtnImage}></ImageBackground>
              </TouchableOpacity>
            </View>

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

            <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLinkText}>Вже є аккаунт? Ввійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  }, 
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%'
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
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
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
});

export default RegistrationScreen;
