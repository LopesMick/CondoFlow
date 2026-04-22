import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBrandLockup } from "../components/common/CondoBrandLockup";

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={[styles.circle, styles.topCircleOne]} />
      <View style={[styles.circle, styles.topCircleTwo]} />
      <View style={[styles.circle, styles.bottomCircleOne]} />
      <View style={[styles.circle, styles.bottomCircleTwo]} />

      <View style={styles.content}>
        <View style={styles.brandBlock}>
          <CondoBrandLockup size="splash" orientation="vertical" />

          <Text style={styles.subtitle}>
            Gestão inteligente de{"\n"}manutenção condominial!
          </Text>
          <Text style={styles.quote}>
            "Manutenção sem caos e dor de cabeça..."
          </Text>
        </View>

        <TouchableOpacity style={styles.enterButton} onPress={onEnter}>
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: BRAND_COLORS.accentSoft,
    opacity: 0.35,
  },
  topCircleOne: {
    width: 230,
    height: 230,
    top: -118,
    left: -108,
  },
  topCircleTwo: {
    width: 168,
    height: 168,
    top: -28,
    left: 16,
    opacity: 0.28,
  },
  bottomCircleOne: {
    width: 186,
    height: 186,
    right: -92,
    bottom: -42,
  },
  bottomCircleTwo: {
    width: 156,
    height: 156,
    right: 36,
    bottom: -72,
    opacity: 0.28,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 118,
    paddingBottom: 88,
  },
  brandBlock: {
    alignItems: "center",
  },
  subtitle: {
    marginTop: 22,
    textAlign: "center",
    color: BRAND_COLORS.textOnPrimary,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  quote: {
    marginTop: 20,
    textAlign: "center",
    color: BRAND_COLORS.accentSoft,
    fontSize: 14,
    lineHeight: 21,
  },
  enterButton: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 12,
    height: 56,
    backgroundColor: BRAND_COLORS.accentDark,
    justifyContent: "center",
    alignItems: "center",
  },
  enterButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: BRAND_COLORS.white,
  },
});
