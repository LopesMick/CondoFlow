import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onSubmit?: () => void;
}

export function ForgotPasswordScreen({ onBack, onSubmit }: ForgotPasswordScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <Image source={BRANDING.wordmark} style={styles.wordmark} resizeMode="contain" />
      </View>

      <View style={styles.panel}>
        <View style={styles.content}>
          <Text style={styles.title}>Esqueceu a senha?</Text>
          <Text style={styles.description}>
            Enviaremos um link para o seu e-mail para você criar uma nova senha!
          </Text>

          <Text style={styles.emailLabel}>Informe o e-mail</Text>
          <TextInput
            style={styles.emailField}
            placeholder="example@example.com"
            placeholderTextColor={BRAND_COLORS.mutedText}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.sendButton} onPress={onSubmit ?? onBack}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={onBack}>
            <Text style={styles.signUpButtonText}>Cadastre-se</Text>
          </TouchableOpacity>

          <Text style={styles.socialLabel}>ou cadastre-se com</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>G</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta? <Text style={styles.footerLink}>Cadastre-se</Text>
          </Text>
        </View>
      </View>
    </View>
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
    paddingBottom: 38,
  },
  wordmark: {
    width: 200,
    height: 62,
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 34,
  },
  title: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 30,
  },
  description: {
    color: BRAND_COLORS.text,
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 34,
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
    color: BRAND_COLORS.mutedText,
    fontSize: 18,
    marginBottom: 24,
  },
  sendButton: {
    alignSelf: "center",
    minWidth: 170,
    height: 46,
    borderRadius: 23,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
  },
  sendButtonText: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "700",
  },
  signUpButton: {
    alignSelf: "center",
    minWidth: 170,
    height: 46,
    borderRadius: 23,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  signUpButtonText: {
    color: BRAND_COLORS.text,
    fontSize: 20,
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
