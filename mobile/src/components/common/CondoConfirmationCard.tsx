import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

interface CondoConfirmationCardProps {
  title: string;
  message: string;
  buttonText: string;
  onConfirm: () => void;
}

export function CondoConfirmationCard({
  title,
  message,
  buttonText,
  onConfirm,
}: CondoConfirmationCardProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity style={styles.button} onPress={onConfirm} activeOpacity={0.88}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BRAND_COLORS.backgroundSoft,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 22,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 28,
  },
  title: {
    textAlign: "center",
    color: BRAND_COLORS.primaryLight,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "800",
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    color: BRAND_COLORS.text,
    fontSize: 17,
    lineHeight: 26,
    maxWidth: 260,
  },
  button: {
    marginTop: 30,
    minWidth: 220,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
