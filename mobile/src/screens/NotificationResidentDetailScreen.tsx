import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationResidentDetailScreenProps {
  onDismiss?: () => void;
}

export function NotificationResidentDetailScreen({
  onDismiss,
}: NotificationResidentDetailScreenProps) {
  return (
    <NotificationModalCard title="Detalhes dos Moradores" onDismiss={onDismiss}>
      <NotificationResidentRow
        avatarLabel="RA"
        name="Roberta Alves"
        unit="Apto 305 - Bloco C"
      />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Data de Nascimento:</Text>
          <Text style={styles.value}>14/02/1991</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.value}>123.456.789-10</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.value}>(21) 9 9999-9999</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>E-Mail:</Text>
          <Text style={styles.value}>roberta.alves@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Ativa</Text>
        </View>
      </View>

      <View style={styles.observationBox}>
        <Text style={styles.observationTitle}>Observações:</Text>
        <Text style={styles.observationText}>1. Morador possui carro!</Text>
      </View>
    </NotificationModalCard>
  );
}

const styles = StyleSheet.create({
  infoRows: {
    gap: 14,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: 162,
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
    paddingHorizontal: 18,
    paddingVertical: 14,
    minHeight: 106,
  },
  observationTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
  observationText: {
    marginTop: 14,
    color: BRAND_COLORS.textSubtle,
    fontSize: 16,
  },
});
