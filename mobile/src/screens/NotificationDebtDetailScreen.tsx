import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationDebtDetailScreenProps {
  onExit?: () => void;
  onDismiss?: () => void;
}

export function NotificationDebtDetailScreen({
  onExit,
  onDismiss,
}: NotificationDebtDetailScreenProps) {
  return (
    <NotificationModalCard
      title="Detalhamento Inadimplência"
      titleColor={BRAND_COLORS.danger}
      onDismiss={onDismiss}
    >
      <NotificationResidentRow
        avatarLabel="MG"
        name="Milena Gomes"
        unit="Apto 502 - Bloco D"
      />

      <Text style={styles.sectionTitle}>Boletos Pendentes</Text>
      <View style={styles.divider} />

      <Text style={styles.pendingItem}>1. Abril /2026</Text>

      <TouchableOpacity style={styles.exitButton} onPress={onExit ?? onDismiss}>
        <Text style={styles.exitText}>Ok, Sair!</Text>
      </TouchableOpacity>
    </NotificationModalCard>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 8,
  },
  divider: {
    marginTop: 8,
    width: "50%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
  },
  pendingItem: {
    marginTop: 18,
    marginLeft: 16,
    color: BRAND_COLORS.danger,
    fontSize: 16,
    fontWeight: "700",
  },
  exitButton: {
    marginTop: 46,
    alignSelf: "center",
    minWidth: 150,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  exitText: {
    color: BRAND_COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
