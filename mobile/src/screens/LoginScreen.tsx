import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BRANDING } from "../assets/branding";

interface LoginScreenProps {
  onLogin: () => void;
  onForgotPassword: () => void;
}

export function LoginScreen({ onLogin, onForgotPassword }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={[styles.circle, styles.topCircleLarge]} />
      <View style={[styles.circle, styles.topCircleSmall]} />

      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome back!</Text>

        <View style={styles.brandRow}>
          <Image
            source={BRANDING.shield}
            style={styles.shieldLogo}
            resizeMode="contain"
          />
          <Image
            source={BRANDING.wordmark}
            style={styles.wordmark}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            placeholderTextColor="#7b8794"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor="#7b8794"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.helperText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.socialLabel}>or sign up with</Text>

          <View style={styles.socialRow}>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>f</Text>
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>G</Text>
            </Pressable>
          </View>

          <Text style={styles.signUpText}>
            Ainda nao tem cadastro?{" "}
            <Text style={styles.signUpLink}>Cadastre-se</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2f79b3",
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#8fe7df",
    opacity: 0.34,
  },
  topCircleLarge: {
    width: 208,
    height: 208,
    top: -88,
    left: -76,
  },
  topCircleSmall: {
    width: 118,
    height: 118,
    top: 6,
    left: -26,
    opacity: 0.22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 96,
    paddingBottom: 48,
    alignItems: "center",
  },
  welcome: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 34,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 42,
  },
  shieldLogo: {
    width: 54,
    height: 58,
  },
  wordmark: {
    width: 160,
    height: 42,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#ffffff",
    borderRadius: 999,
    paddingHorizontal: 18,
    fontSize: 15,
    color: "#1f2937",
    marginBottom: 14,
  },
  helperText: {
    fontSize: 12,
    color: "#d9edf7",
    marginBottom: 22,
  },
  loginButton: {
    width: "100%",
    height: 54,
    borderRadius: 10,
    backgroundColor: "#6fc3ca",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  socialLabel: {
    marginTop: 18,
    fontSize: 12,
    color: "#d7e6f1",
  },
  socialRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 12,
    marginBottom: 26,
  },
  socialButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#1b4f75",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  socialButtonText: {
    color: "#0f3f63",
    fontSize: 20,
    fontWeight: "700",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 14,
    color: "#0e1a26",
  },
  signUpLink: {
    color: "#7ad9e3",
    textDecorationLine: "underline",
  },
});
