import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";
import { SectionCard } from "../common/SectionCard";

type KpiTone = "neutral" | "info" | "warning" | "danger" | "success";

interface KpiCardProps {
  label: string;
  value: number;
  tone?: KpiTone;
}

const toneColors: Record<KpiTone, string> = {
  neutral: BRAND_COLORS.textStrong,
  info: BRAND_COLORS.info,
  warning: BRAND_COLORS.warning,
  danger: BRAND_COLORS.danger,
  success: BRAND_COLORS.success,
};

export function KpiCard({ label, value, tone = "neutral" }: KpiCardProps) {
  return (
    <SectionCard style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueRow}>
        <Text style={[styles.value, { color: toneColors[tone] }]}>{value}</Text>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    minHeight: 90,
  },
  label: {
    fontSize: 14,
    color: BRAND_COLORS.mutedText,
    marginBottom: 8,
    fontWeight: "600",
  },
  valueRow: {
    flex: 1,
    justifyContent: "center",
  },
  value: {
    fontSize: 28,
    fontWeight: "700",
  },
});
