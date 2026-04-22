import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
  NotificationResidentRow,
} from "../components/common/NotificationModalCard";

interface NotificationPackageDetailScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationPackageDetailScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationPackageDetailScreenProps) {
  return (
    <NotificationModalCard title="Detalhes Da Encomenda" onDismiss={onDismiss}>
      <NotificationResidentRow
        avatarLabel="RA"
        name="Roberta Alves"
        unit="Apto 305 - Bloco C"
        rightLabel="Total de Encomendas:"
        rightValue="3"
      />

      <View style={styles.infoRows}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Última Data Recebida:</Text>
          <Text style={styles.value}>08/04/2026</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Horário Recebido:</Text>
          <Text style={styles.value}>19:53</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Tamanho Geral das Encomendas:</Text>
          <Text style={styles.value}>Pequena</Text>
        </View>
      </View>

      <View style={styles.observationBox}>
        <Text style={styles.observationTitle}>Observações:</Text>
        <Text style={styles.observationLine}>
          1. Morador tem um total de 3 encomendas a serem retiradas!
        </Text>
        <Text style={styles.observationLine}>2. Tamanho = 2 pequenas e 1 média</Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.question}>Morador já retirou a encomenda?</Text>

      <NotificationActionButtons
        primaryText="Confirmar Retirada!"
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
    alignItems: "center",
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
  },
  observationBox: {
    marginTop: 20,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  observationTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
  observationLine: {
    marginTop: 8,
    color: BRAND_COLORS.textSubtle,
    fontSize: 15,
    lineHeight: 23,
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
