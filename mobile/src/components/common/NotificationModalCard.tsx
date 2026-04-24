import { ReactNode } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface NotificationModalCardProps {
  title: string;
  titleColor?: string;
  onDismiss?: () => void;
  children: ReactNode;
}

interface NotificationResidentRowProps {
  avatarLabel: string;
  name: string;
  unit: string;
  rightLabel?: string;
  rightValue?: string;
}

interface NotificationActionButtonsProps {
  primaryText: string;
  secondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export function NotificationModalCard({
  title,
  titleColor = BRAND_COLORS.primaryLight,
  onDismiss,
  children,
}: NotificationModalCardProps) {
  return (
    <View style={styles.screen}>
      {onDismiss ? (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={onDismiss}
          accessibilityRole="button"
          accessibilityLabel="Fechar modal"
        />
      ) : null}

      <TouchableWithoutFeedback>
        <View style={styles.card}>
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          <ScrollView
            style={styles.contentScroll}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export function NotificationResidentRow({
  avatarLabel,
  name,
  unit,
  rightLabel,
  rightValue,
}: NotificationResidentRowProps) {
  return (
    <View style={styles.personRow}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{avatarLabel}</Text>
      </View>

      <View style={styles.personInfo}>
        <Text style={styles.personName}>{name}</Text>
        <Text style={styles.personUnit}>{unit}</Text>
      </View>

      <View style={styles.personDivider} />

      {rightLabel ? (
        <View style={styles.rightInfo}>
          <Text style={styles.rightLabel}>{rightLabel}</Text>
          {rightValue ? <Text style={styles.rightValue}>{rightValue}</Text> : null}
        </View>
      ) : null}
    </View>
  );
}

export function NotificationActionButtons({
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary,
}: NotificationActionButtonsProps) {
  const primaryDisabled = !onPrimary;
  const secondaryDisabled = !!secondaryText && !onSecondary;

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.primaryButton, primaryDisabled && styles.buttonDisabled]}
        activeOpacity={0.88}
        onPress={onPrimary}
        disabled={primaryDisabled}
        accessibilityRole="button"
      >
        <Text style={styles.primaryText}>{primaryText}</Text>
      </TouchableOpacity>

      {secondaryText ? (
        <TouchableOpacity
          style={[styles.secondaryButton, secondaryDisabled && styles.buttonDisabled]}
          activeOpacity={0.88}
          onPress={onSecondary}
          disabled={secondaryDisabled}
          accessibilityRole="button"
        >
          <Text style={styles.secondaryText}>{secondaryText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15,23,42,0.28)",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  card: {
    width: "100%",
    maxWidth: 430,
    maxHeight: "94%",
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
  },
  contentScroll: {
    marginTop: 18,
  },
  content: {
    paddingBottom: 12,
  },
  personRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 21,
    fontWeight: "700",
  },
  personInfo: {
    flex: 1,
    minWidth: 0,
  },
  personName: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "700",
  },
  personUnit: {
    marginTop: 4,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "700",
  },
  personDivider: {
    width: 1,
    height: 58,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 12,
  },
  rightInfo: {
    minWidth: 92,
    alignItems: "center",
  },
  rightLabel: {
    color: BRAND_COLORS.info,
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  rightValue: {
    marginTop: 8,
    color: BRAND_COLORS.text,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  actions: {
    marginTop: 22,
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  primaryButton: {
    width: "100%",
    maxWidth: 264,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  primaryText: {
    color: BRAND_COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    width: "100%",
    maxWidth: 264,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  secondaryText: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonDisabled: {
    opacity: 0.45,
  },
});
