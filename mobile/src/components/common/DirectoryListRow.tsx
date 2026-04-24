import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface DirectoryListRowProps {
  avatarLetter: string;
  avatarTone?: "soft" | "accent";
  name: string;
  unit: string;
  middleText?: string;
  middleTone?: "default" | "success" | "warning" | "danger";
  detailsLabel?: string;
  onPress?: () => void;
}

export function DirectoryListRow({
  avatarLetter,
  avatarTone = "soft",
  name,
  unit,
  middleText,
  middleTone = "default",
  detailsLabel = "Ver Detalhes",
  onPress,
}: DirectoryListRowProps) {
  const middleColor =
    middleTone === "success"
      ? BRAND_COLORS.success
      : middleTone === "warning"
        ? BRAND_COLORS.pending
        : middleTone === "danger"
          ? BRAND_COLORS.danger
          : BRAND_COLORS.text;

  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.86}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={`${name}, ${unit}${middleText ? `, ${middleText}` : ""}`}
    >
      <View
        style={[
          styles.avatar,
          avatarTone === "accent" ? styles.avatarAccent : styles.avatarSoft,
        ]}
      >
        <Text style={styles.avatarText}>{avatarLetter}</Text>
      </View>

      <View style={styles.personBlock}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.unit} numberOfLines={1}>
          {unit}
        </Text>
      </View>

      <View style={styles.divider} />

      {middleText ? (
        <>
          <Text style={[styles.middleText, { color: middleColor }]} numberOfLines={2}>
            {middleText}
          </Text>
          <View style={styles.divider} />
        </>
      ) : null}

      <Text style={styles.details} numberOfLines={2}>
        {detailsLabel} {">"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 72,
    marginBottom: 6,
    paddingVertical: 4,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarSoft: {
    backgroundColor: BRAND_COLORS.surfaceSoft,
  },
  avatarAccent: {
    backgroundColor: BRAND_COLORS.infoSoft,
  },
  avatarText: {
    color: BRAND_COLORS.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  personBlock: {
    flex: 1.2,
    minWidth: 0,
    marginRight: 8,
  },
  name: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  unit: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    height: 46,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 8,
  },
  middleText: {
    flex: 0.85,
    minWidth: 76,
    fontSize: 14,
    fontWeight: "700",
  },
  details: {
    flex: 0.95,
    minWidth: 82,
    color: BRAND_COLORS.info,
    fontSize: 13,
    lineHeight: 17,
    textAlign: "right",
  },
});
