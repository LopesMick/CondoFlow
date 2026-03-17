import { useState } from "react";
import {
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

interface ResetPasswordScreenProps {
  onBack: () => void;
}

export function ResetPasswordScreen({ onBack }: ResetPasswordScreenProps) {
  const [email, setEmail] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.topArea}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.brandWrap}>
          <Text style={styles.wordmarkText}>
            Condo<Text style={styles.flowText}>Flow</Text>
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Esqueceu a senha??</Text>
        <Text style={styles.description}>
          Enviaremos um link para o seu e-mail para voce criar uma nova senha!
        </Text>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Enter Email Address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="example@example.com"
            placeholderTextColor="#97a7bd"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Sign Up</Text>
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

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2f79b3",
  },
  topArea: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 28,
  },
  backText: {
    color: "#dbe8f5",
    fontSize: 13,
    fontWeight: "500",
  },
  brandWrap: {
    alignItems: "center",
    marginTop: 48,
  },
  wordmarkText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
  },
  flowText: {
    color: "#70d6e3",
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 18,
    paddingTop: 42,
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 31,
    lineHeight: 36,
    fontWeight: "700",
    color: "#2f79b3",
    marginBottom: 18,
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 22,
    color: "#566679",
    marginBottom: 30,
    maxWidth: 310,
  },
  fieldBlock: {
    width: "100%",
    marginBottom: 26,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 44,
    borderRadius: 999,
    backgroundColor: "#dbe8ff",
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#1f2937",
  },
  submitButton: {
    width: 132,
    height: 38,
    borderRadius: 999,
    backgroundColor: "#5b9df8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 88,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
  secondaryButton: {
    width: 132,
    height: 38,
    borderRadius: 999,
    backgroundColor: "#dbe8ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  secondaryButtonText: {
    color: "#35617a",
    fontSize: 20,
    fontWeight: "700",
  },
  socialLabel: {
    fontSize: 11,
    color: "#8e9bad",
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },
  socialButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#7b98a6",
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "#4f7180",
    fontSize: 18,
    fontWeight: "700",
  },
  footerText: {
    fontSize: 11,
    color: "#7f8b97",
  },
  footerLink: {
    color: "#6aa2ff",
  },
});
