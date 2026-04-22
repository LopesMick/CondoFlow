import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface CondoTopHeaderProps {
  title: string;
  onBack: () => void;
  onPressRight?: () => void;
}

export function CondoTopHeader({ title, onBack, onPressRight }: CondoTopHeaderProps) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backIcon}>{"<"}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.bellButton}
        onPress={onPressRight}
        disabled={!onPressRight}
        activeOpacity={0.85}
      >
        <View style={styles.bellBody} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 14,
    paddingBottom: 18,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: BRAND_COLORS.white,
    fontSize: 30,
    lineHeight: 30,
    marginTop: -2,
  },
  title: {
    color: BRAND_COLORS.white,
    fontSize: 19,
    fontWeight: "700",
  },
  bellButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
  },
  bellBody: {
    width: 14,
    height: 12,
    borderWidth: 1.5,
    borderColor: BRAND_COLORS.primaryDark,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
