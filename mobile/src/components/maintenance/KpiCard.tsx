import { StyleSheet, Text, View } from "react-native";
import { SectionCard } from "../common/SectionCard";

type KpiTone = "neutral" | "info" | "warning" | "danger" | "success";

interface KpiCardProps {
  label: string;
  value: number;
  tone?: KpiTone;
}

const toneColors: Record<KpiTone, string> = {
  neutral: "#344054",
  info: "#1d4ed8",
  warning: "#b45309",
  danger: "#b42318",
  success: "#067647",
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
    color: "#475467",
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
