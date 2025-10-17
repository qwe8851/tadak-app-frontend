import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Images } from "@/assets/images";
import { tokenAtom, userAtom } from "@/store/authAtom";
import { useSetAtom } from "jotai";

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function SignInScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(tokenAtom);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: 로그인 로직 (API 연결 예정)
    console.log("로그인 시도:", { email, password });

    // navigation.navigate("Main"); // RootNavigator 기준

    setUser({ id: "1", name: "홍길동" });
    setToken("fake_token");
  };

  const handleSignUp = () => {
    console.log("회원가입 시도:", { email, password });
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image source={Images.logoTyping} style={styles.logo} />

      <TextInput style={styles.input} placeholder="이메일" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

      <TextInput style={styles.input} placeholder="비밀번호" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{t("login.button")}</Text>
      </TouchableOpacity>
      <Text style={styles.signUp} onPress={handleSignUp}>
        회원가입
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  // title: {
  //   fontSize: 28,
  //   fontWeight: "bold",
  //   marginBottom: 40,
  // },
  logo: {
    width: 300, // 원하는 너비
    height: 300, // 원하는 높이
    resizeMode: "contain", // 비율 유지
  },
  signUp: {
    marginTop: 16,
    color: "#6C5CE7",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#4F46E5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
