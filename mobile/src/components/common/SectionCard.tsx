import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface SectionCardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export function SectionCard({ children, style }: SectionCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BRAND_COLORS.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
    marginBottom: 12,
  },
});
