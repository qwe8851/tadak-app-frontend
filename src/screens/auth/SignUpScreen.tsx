import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Images } from "@/assets/images";

export default function SignUpScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("회원가입 시도:", { email, password, confirmPassword });
    // TODO: 회원가입 API 로직
  };

  const handleBackToLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={Images.logoTyping} style={styles.logo} />

      <TextInput style={styles.input} placeholder="이메일" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

      <TextInput style={styles.input} placeholder="비밀번호" value={password} onChangeText={setPassword} secureTextEntry />

      <TextInput style={styles.input} placeholder="비밀번호 확인" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>

      <Text style={styles.login} onPress={handleBackToLogin}>
        로그인으로 돌아가기
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
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  login: {
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
