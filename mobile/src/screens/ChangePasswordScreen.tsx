import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface ChangePasswordScreenProps {
  onGoBack: () => void;
  onOpenLogout: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

export function ChangePasswordScreen({
  onGoBack,
  onOpenLogout,
  onPressTab,
}: ChangePasswordScreenProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [feedback, setFeedback] = useState<{ tone: "success" | "danger"; text: string } | null>(
    null,
  );

  const hasAllFields =
    currentPassword.trim().length > 0 &&
    newPassword.trim().length > 0 &&
    confirmPassword.trim().length > 0;
  const isMinLength = newPassword.length >= 8;
  const isDifferentFromCurrent = currentPassword !== newPassword;
  const passwordsMatch = newPassword === confirmPassword;
  const canSubmit = hasAllFields && isMinLength && isDifferentFromCurrent && passwordsMatch;

  const handleSubmit = () => {
    if (!hasAllFields) {
      setFeedback({ tone: "danger", text: "Preencha todos os campos para continuar." });
      return;
    }

    if (!isMinLength) {
      setFeedback({ tone: "danger", text: "A nova senha precisa ter ao menos 8 caracteres." });
      return;
    }

    if (!isDifferentFromCurrent) {
      setFeedback({
        tone: "danger",
        text: "A nova senha deve ser diferente da senha atual.",
      });
      return;
    }

    if (!passwordsMatch) {
      setFeedback({ tone: "danger", text: "A confirmação não corresponde à nova senha." });
      return;
    }

    setFeedback({ tone: "success", text: "Senha atualizada com sucesso." });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.headerArea}>
        <CondoTopHeader title="Alterar Senha" onBack={onGoBack} onPressRight={onOpenLogout} />
      </View>

      <View style={styles.panel}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.formArea}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.subtitle}>
            Para sua segurança, use uma senha forte e diferente da atual.
          </Text>

          <Text style={styles.label}>Senha Atual</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={currentPassword}
              onChangeText={setCurrentPassword}
              style={styles.fieldInput}
              placeholder="Digite sua senha atual"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry={!showCurrentPassword}
              autoCapitalize="none"
              textContentType="password"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowCurrentPassword((state) => !state)}
              accessibilityRole="button"
              accessibilityLabel={showCurrentPassword ? "Ocultar senha atual" : "Mostrar senha atual"}
            >
              <Text style={styles.eyeButtonText}>{showCurrentPassword ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Nova Senha</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.fieldInput}
              placeholder="Mínimo de 8 caracteres"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry={!showNewPassword}
              autoCapitalize="none"
              textContentType="newPassword"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowNewPassword((state) => !state)}
              accessibilityRole="button"
              accessibilityLabel={showNewPassword ? "Ocultar nova senha" : "Mostrar nova senha"}
            >
              <Text style={styles.eyeButtonText}>{showNewPassword ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirmar Nova Senha</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.fieldInput}
              placeholder="Repita a nova senha"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              textContentType="password"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowConfirmPassword((state) => !state)}
              accessibilityRole="button"
              accessibilityLabel={showConfirmPassword ? "Ocultar confirmação de senha" : "Mostrar confirmação de senha"}
            >
              <Text style={styles.eyeButtonText}>{showConfirmPassword ? "Ocultar" : "Mostrar"}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.passwordHint}>
            Regras: mínimo 8 caracteres, deve ser diferente da senha atual e bater com a confirmação.
          </Text>

          {feedback ? (
            <Text
              style={[
                styles.feedback,
                feedback.tone === "success" ? styles.feedbackSuccess : styles.feedbackDanger,
              ]}
            >
              {feedback.text}
            </Text>
          ) : null}

          <TouchableOpacity
            style={[styles.confirmButton, !canSubmit && styles.confirmButtonDisabled]}
            onPress={handleSubmit}
            disabled={!canSubmit}
            accessibilityRole="button"
          >
            <Text style={styles.confirmButtonText}>Alterar Senha</Text>
          </TouchableOpacity>
        </ScrollView>

        <CondoBottomNav active="profile" onPressTab={onPressTab} />
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
    paddingBottom: 10,
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
  formArea: {
    paddingHorizontal: 26,
    paddingTop: 24,
    paddingBottom: 12,
  },
  subtitle: {
    color: BRAND_COLORS.mutedText,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  label: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 10,
  },
  passwordField: {
    height: 50,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingLeft: 14,
    paddingRight: 8,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldInput: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 15,
  },
  eyeButton: {
    minWidth: 70,
    height: 34,
    borderRadius: 16,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: BRAND_COLORS.borderSoft,
  },
  eyeButtonText: {
    color: BRAND_COLORS.info,
    fontSize: 12,
    fontWeight: "700",
  },
  passwordHint: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 13,
    lineHeight: 18,
    marginTop: -4,
    marginBottom: 10,
  },
  feedback: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  feedbackSuccess: {
    color: BRAND_COLORS.success,
  },
  feedbackDanger: {
    color: BRAND_COLORS.danger,
  },
  confirmButton: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 320,
    height: 50,
    borderRadius: 25,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  confirmButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  confirmButtonDisabled: {
    opacity: 0.5,
  },
});

