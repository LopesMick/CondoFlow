import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationCallSyndicScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationCallSyndicScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationCallSyndicScreenProps) {
  return (
    <NotificationModalCard title="Detalhamento Da Chamada" onDismiss={onDismiss}>
      <NotificationResidentRow
        avatarLabel="MG"
        name="Milena Gomes"
        unit="Apto 502 - Bloco D"
      />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Título:</Text>
          <Text style={styles.value}>Interfone Não Funcionando</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Categoria:</Text>
          <Text style={styles.value}>Manutenção</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Prioridade:</Text>
          <Text style={styles.value}>Alta</Text>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>Descrição:</Text>
        <Text style={styles.descriptionText}>
          - Fui testar o interfone no dia 08/04/2026 e simplesmente não estava funcionando!
        </Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.question}>A Chamada foi resolvida?</Text>

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
    width: 102,
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
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  descriptionTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionText: {
    marginTop: 8,
    color: BRAND_COLORS.textSubtle,
    fontSize: 15,
    lineHeight: 23,
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

