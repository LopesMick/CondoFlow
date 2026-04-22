import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Alterar Senha" onBack={onGoBack} onPressRight={onOpenLogout} />
      </View>

      <View style={styles.panel}>
        <View style={styles.formArea}>
          <Text style={styles.label}>Senha Atual</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={currentPassword}
              onChangeText={setCurrentPassword}
              style={styles.fieldInput}
              placeholder="****"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry
            />
            <Text style={styles.eyeIcon}>oo</Text>
          </View>

          <Text style={styles.label}>Nova Senha</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.fieldInput}
              placeholder="****"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry
            />
            <Text style={styles.eyeIcon}>oo</Text>
          </View>

          <Text style={styles.label}>Confirmar Nova Senha</Text>
          <View style={styles.passwordField}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.fieldInput}
              placeholder="****"
              placeholderTextColor={BRAND_COLORS.mutedText}
              secureTextEntry
            />
            <Text style={styles.eyeIcon}>oo</Text>
          </View>

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Alterar Senha</Text>
          </TouchableOpacity>
        </View>

        <CondoBottomNav active="profile" onPressTab={onPressTab} />
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
    paddingBottom: 10,
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  formArea: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 24,
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
    paddingRight: 12,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldInput: {
    flex: 1,
    color: BRAND_COLORS.mutedText,
    fontSize: 15,
  },
  eyeIcon: {
    color: BRAND_COLORS.text,
    fontSize: 14,
    fontWeight: "700",
  },
  confirmButton: {
    alignSelf: "center",
    minWidth: 220,
    height: 56,
    borderRadius: 28,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
  },
  confirmButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

