import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { NotificationModalCard } from "../components/common/NotificationModalCard";

interface NotificationCallDetailResidentScreenProps {
  onDismiss?: () => void;
}

export function NotificationCallDetailResidentScreen({
  onDismiss,
}: NotificationCallDetailResidentScreenProps) {
  return (
    <NotificationModalCard title="Detalhes Da Chamada" onDismiss={onDismiss}>
      <Text style={styles.issueTitle}>Interfone Não Funcionando</Text>
      <View style={styles.issueDivider} />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Categoria:</Text>
          <Text style={styles.value}>Manutenção</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Prioridade:</Text>
          <Text style={styles.value}>Alta</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Em Andamento</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>14/02/2026</Text>
        </View>
      </View>

      <View style={styles.observationBox}>
        <Text style={styles.observationTitle}>Observações:</Text>
      </View>
    </NotificationModalCard>
  );
}

const styles = StyleSheet.create({
  issueTitle: {
    color: BRAND_COLORS.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8,
  },
  issueDivider: {
    width: "52%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 14,
  },
  infoRows: {
    gap: 14,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: 92,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  value: {
    flex: 1,
    color: BRAND_COLORS.info,
    fontSize: 16,
    fontWeight: "500",
  },
  observationBox: {
    marginTop: 20,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    minHeight: 86,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  observationTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
});
