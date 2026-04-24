import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";

interface LogoutScreenProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function LogoutScreen({ onConfirm, onCancel }: LogoutScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Sair</Text>
        <Text style={styles.message}>Tem certeza que deseja sair?</Text>

        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmButtonText}>Sim, Sair!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BRAND_COLORS.backgroundSoft,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 22,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 28,
  },
  title: {
    color: BRAND_COLORS.text,
    fontSize: 19,
    fontWeight: "800",
  },
  message: {
    marginTop: 12,
    color: BRAND_COLORS.text,
    fontSize: 17,
  },
  confirmButton: {
    marginTop: 28,
    width: "100%",
    maxWidth: 264,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  cancelButton: {
    marginTop: 14,
    width: "100%",
    maxWidth: 264,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "500",
  },
});
