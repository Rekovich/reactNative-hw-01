import React, { useState } from "react";
import { KeyboardAvoidingView, View, TouchableOpacity, TextInput, Text, StyleSheet, Platform } from "react-native";

const LoginScreen = ({ changeScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (text) => setEmail(text);
  const handlePassword = (text) => setPassword(text);

  const user = () => {
    if (!email || !password) {
      alert("Enter all fields please!");
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const showPassword = () => alert(`Your password is: ${password}.`);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Ввійти</Text>

        <TextInput style={styles.input} placeholder="Адрес електронної пошти" value={email} onChangeText={handleEmail} />
        <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} value={password} onChangeText={handlePassword} />

        <TouchableOpacity style={styles.passwordShow} activeOpacity={0.5} onPress={showPassword}>
          <Text style={styles.passwordShowText}>Показати</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn} activeOpacity={0.5} onPress={user}>
          <Text style={styles.registerBtnText}>Ввійти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginLink} activeOpacity={0.5} onPress={() => changeScreen(1)}>
          <Text style={styles.loginLinkText}>Ще немає аккаута? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -200,
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
    // textAlign: "center",
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
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShow: {
    top: -34,
    left: 130,
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
    // marginLeft: "auto",
    // marginRight: "auto",
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
  },
});

export default LoginScreen;
