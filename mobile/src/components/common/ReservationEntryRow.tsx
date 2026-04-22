import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface ReservationEntryRowProps {
  title: string;
  time: string;
  status: string;
  statusTone?: "success" | "info" | "warning" | "danger";
  date: string;
  onPress?: () => void;
}

export function ReservationEntryRow({
  title,
  time,
  status,
  statusTone = "info",
  date,
  onPress,
}: ReservationEntryRowProps) {
  const statusColor =
    statusTone === "success"
      ? BRAND_COLORS.success
      : statusTone === "warning"
        ? BRAND_COLORS.pending
        : statusTone === "danger"
          ? BRAND_COLORS.danger
          : BRAND_COLORS.info;

  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.86} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Text style={styles.iconText}>R</Text>
      </View>

      <View style={styles.mainBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.divider} />
      <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      <View style={styles.divider} />
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  iconWrap: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  mainBlock: {
    width: 108,
  },
  title: {
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "700",
  },
  time: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "700",
  },
  divider: {
    width: 1,
    height: 46,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 8,
  },
  status: {
    width: 84,
    fontSize: 14,
    fontWeight: "700",
  },
  date: {
    flex: 1,
    color: BRAND_COLORS.info,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "right",
  },
});
