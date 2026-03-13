import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRANDING } from "../assets/branding";

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
          <Image
            source={BRANDING.shield}
            style={styles.shieldLogo}
            resizeMode="contain"
          />
          <Image
            source={BRANDING.wordmark}
            style={styles.wordmark}
            resizeMode="contain"
          />

          <Text style={styles.subtitle}>
            Gestao inteligente de{"\n"}manutencao condominial!
          </Text>
          <Text style={styles.quote}>
            "Manutencao sem caos e dor de cabeca..."
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
    backgroundColor: "#0f7ead",
    overflow: "hidden",
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#8fe7df",
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
  shieldLogo: {
    width: 124,
    height: 136,
  },
  wordmark: {
    marginTop: 14,
    width: 236,
    height: 74,
  },
  subtitle: {
    marginTop: 22,
    textAlign: "center",
    color: "#f1f8ff",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  quote: {
    marginTop: 20,
    textAlign: "center",
    color: "#b6d7e7",
    fontSize: 14,
    lineHeight: 21,
  },
  enterButton: {
    width: "100%",
    maxWidth: 360,
    borderRadius: 12,
    height: 56,
    backgroundColor: "#58c3c7",
    justifyContent: "center",
    alignItems: "center",
  },
  enterButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#eff8ff",
  },
});
