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
import { BRAND_COLORS } from "../assets/branding";

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
            placeholderTextColor={BRAND_COLORS.textSubtle}
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
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  topArea: {
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 28,
  },
  backText: {
    color: BRAND_COLORS.accentSoft,
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
    color: BRAND_COLORS.white,
  },
  flowText: {
    color: BRAND_COLORS.accent,
  },
  card: {
    flex: 1,
    backgroundColor: BRAND_COLORS.surface,
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
    color: BRAND_COLORS.primary,
    marginBottom: 18,
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 22,
    color: BRAND_COLORS.mutedText,
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
    color: BRAND_COLORS.text,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 44,
    borderRadius: 999,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 16,
    fontSize: 14,
    color: BRAND_COLORS.text,
  },
  submitButton: {
    width: 132,
    height: 38,
    borderRadius: 999,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 88,
  },
  submitButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
  secondaryButton: {
    width: 132,
    height: 38,
    borderRadius: 999,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  secondaryButtonText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 20,
    fontWeight: "700",
  },
  socialLabel: {
    fontSize: 11,
    color: BRAND_COLORS.textSubtle,
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
    borderColor: BRAND_COLORS.textSubtle,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 18,
    fontWeight: "700",
  },
  footerText: {
    fontSize: 11,
    color: BRAND_COLORS.textSubtle,
  },
  footerLink: {
    color: BRAND_COLORS.info,
  },
});
