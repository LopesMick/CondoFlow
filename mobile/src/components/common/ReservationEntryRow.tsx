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
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.86}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={`${title}, ${time}, ${status}, ${date}`}
    >
      <View style={styles.iconWrap}>
        <Text style={styles.iconText}>R</Text>
      </View>

      <View style={styles.mainBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.time} numberOfLines={1}>
          {time}
        </Text>
      </View>

      <View style={styles.divider} />
      <Text style={[styles.status, { color: statusColor }]} numberOfLines={2}>
        {status}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.date} numberOfLines={1}>
        {date}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 4,
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
    flex: 1.15,
    minWidth: 0,
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
    flex: 0.85,
    minWidth: 72,
    fontSize: 14,
    fontWeight: "700",
  },
  date: {
    flex: 0.95,
    color: BRAND_COLORS.info,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "right",
  },
});
