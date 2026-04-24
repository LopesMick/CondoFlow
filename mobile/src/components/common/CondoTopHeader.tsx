import { Pressable, StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface CondoTopHeaderProps {
  title: string;
  onBack: () => void;
  onPressRight?: () => void;
  rightAccessibilityLabel?: string;
}

export function CondoTopHeader({
  title,
  onBack,
  onPressRight,
  rightAccessibilityLabel = "Abrir notificações",
}: CondoTopHeaderProps) {
  return (
    <View style={styles.row}>
      <Pressable
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        hitSlop={8}
      >
        <Text style={styles.backIcon}>{"‹"}</Text>
      </Pressable>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.bellButton,
          !onPressRight && styles.bellButtonDisabled,
          pressed && onPressRight && styles.pressed,
        ]}
        onPress={onPressRight}
        disabled={!onPressRight}
        accessibilityRole="button"
        accessibilityLabel={rightAccessibilityLabel}
        hitSlop={8}
      >
        <View style={styles.bellBody} />
        <View style={styles.bellClapper} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BRAND_COLORS.whiteOverlay,
  },
  backIcon: {
    color: BRAND_COLORS.white,
    fontSize: 30,
    lineHeight: 30,
    marginTop: -3,
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 12,
    color: BRAND_COLORS.white,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: "700",
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
    opacity: 1,
  },
  bellButtonDisabled: {
    opacity: 0.45,
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
  bellClapper: {
    width: 5,
    height: 2,
    borderRadius: 1,
    backgroundColor: BRAND_COLORS.primaryDark,
    marginTop: 2,
  },
  pressed: {
    opacity: 0.72,
  },
});
