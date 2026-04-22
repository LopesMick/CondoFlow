import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationReservationConfirmScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationReservationConfirmScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationReservationConfirmScreenProps) {
  return (
    <NotificationModalCard title="Confirmação de Reserva" onDismiss={onDismiss}>
      <NotificationResidentRow
        avatarLabel="RA"
        name="Roberta Alves"
        unit="Apto 305 - Bloco C"
      />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Data Solicitada:</Text>
          <Text style={styles.value}>31/04/2026</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Área Solicitada:</Text>
          <Text style={styles.value}>Play</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Horário Estimado:</Text>
          <Text style={styles.value}>19:00</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Quantidade de Pessoas:</Text>
          <Text style={styles.value}>55</Text>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>Evento para o meu aniversário!</Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.question}>Tem certeza que deseja confirmar?</Text>

      <NotificationActionButtons
        primaryText="Sim, Confirmar!"
        secondaryText="Não Confirmar"
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
    alignItems: "center",
  },
  label: {
    width: 160,
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
  descriptionBox: {
    marginTop: 20,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  descriptionText: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 16,
    lineHeight: 24,
  },
  divider: {
    marginTop: 18,
    width: "72%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
  },
  question: {
    marginTop: 10,
    color: BRAND_COLORS.text,
    fontSize: 17,
  },
});
