import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onSubmit?: () => void;
}

export function ForgotPasswordScreen({ onBack, onSubmit }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const canSubmit = email.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) {
      setFeedback("Informe um e-mail valido para continuar.");
      return;
    }

    setFeedback("Link de recuperacao enviado.");
    (onSubmit ?? onBack)();
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.headerArea}>
        <Image source={BRANDING.wordmark} style={styles.wordmark} resizeMode="contain" />
      </View>

      <View style={styles.panel}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Esqueceu a senha?</Text>
          <Text style={styles.description}>
            Enviaremos um link para o seu e-mail para voce criar uma nova senha.
          </Text>

          <Text style={styles.emailLabel}>Informe o e-mail</Text>
          <TextInput
            style={styles.emailField}
            value={email}
            onChangeText={setEmail}
            placeholder="example@example.com"
            placeholderTextColor={BRAND_COLORS.mutedText}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

          <TouchableOpacity
            style={[styles.sendButton, !canSubmit && styles.sendButtonDisabled]}
            onPress={handleSubmit}
            disabled={!canSubmit}
            accessibilityRole="button"
          >
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={onBack} accessibilityRole="button">
            <Text style={styles.signUpButtonText}>Voltar ao Login</Text>
          </TouchableOpacity>

          <Text style={styles.socialLabel}>ou cadastre-se com</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton} accessibilityRole="button">
              <Text style={styles.socialIcon}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} accessibilityRole="button">
              <Text style={styles.socialIcon}>G</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Nao tem uma conta? <Text style={styles.footerLink}>Cadastre-se</Text>
          </Text>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  headerArea: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 86,
    paddingBottom: 24,
  },
  wordmark: {
    width: 244,
    height: 78,
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
    paddingTop: 34,
    paddingBottom: 20,
  },
  title: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 18,
  },
  description: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    maxWidth: 320,
  },
  emailLabel: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    marginLeft: 4,
  },
  emailField: {
    height: 56,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 18,
    color: BRAND_COLORS.text,
    fontSize: 18,
    marginBottom: 10,
  },
  feedback: {
    color: BRAND_COLORS.info,
    fontSize: 13,
    marginBottom: 8,
  },
  sendButton: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 280,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  signUpButton: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 280,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  signUpButtonText: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  socialLabel: {
    alignSelf: "center",
    color: BRAND_COLORS.text,
    fontSize: 14,
    marginBottom: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginBottom: 20,
  },
  socialButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: BRAND_COLORS.text,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    color: BRAND_COLORS.text,
    fontSize: 24,
    fontWeight: "700",
  },
  footerText: {
    alignSelf: "center",
    color: BRAND_COLORS.text,
    fontSize: 14,
  },
  footerLink: {
    color: BRAND_COLORS.info,
  },
});
