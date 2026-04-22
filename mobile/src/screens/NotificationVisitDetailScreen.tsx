import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationVisitDetailScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationVisitDetailScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationVisitDetailScreenProps) {
  return (
    <NotificationModalCard title="Detalhes Das Visitas" onDismiss={onDismiss}>
      <NotificationResidentRow
        avatarLabel="RA"
        name="Roberta Alves"
        unit="Apto 305 - Bloco C"
        rightLabel="Total de Visitantes:"
        rightValue="5"
      />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Último Registro de Visitante:</Text>
          <Text style={styles.value}>08/04/2026</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome das Visitas:</Text>
          <Text style={styles.value}>João, Maria, Álvaro, Luana, Caio</Text>
        </View>
      </View>

      <View style={styles.observationBox}>
        <Text style={styles.observationTitle}>Observações:</Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.question}>Todas as Visitas chegaram?</Text>

      <NotificationActionButtons
        primaryText="Sim, Confirmar!"
        secondaryText="Não Confirmar!"
        onPrimary={onConfirm ?? onDismiss}
        onSecondary={onCancel ?? onDismiss}
      />
    </NotificationModalCard>
  );
}

const styles = StyleSheet.create({
  infoRows: {
    gap: 14,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  label: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginRight: 8,
  },
  value: {
    flex: 1,
    color: BRAND_COLORS.info,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  observationBox: {
    marginTop: 20,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    minHeight: 124,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  observationTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
  divider: {
    marginTop: 18,
    width: "76%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
  },
  question: {
    marginTop: 10,
    color: BRAND_COLORS.text,
    fontSize: 17,
  },
});
