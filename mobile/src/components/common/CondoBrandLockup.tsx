import { StyleProp, StyleSheet, View, ViewStyle, Image } from "react-native";
import { BRANDING } from "../../assets/branding";

type BrandLockupSize = "login" | "home" | "splash";
type BrandLockupOrientation = "horizontal" | "vertical";

interface CondoBrandLockupProps {
  size?: BrandLockupSize;
  orientation?: BrandLockupOrientation;
  style?: StyleProp<ViewStyle>;
}

const SIZE_PRESETS: Record<
  BrandLockupSize,
  { shieldWidth: number; shieldHeight: number; wordmarkWidth: number; wordmarkHeight: number; gap: number }
> = {
  login: {
    shieldWidth: 80,
    shieldHeight: 116,
    wordmarkWidth: 224,
    wordmarkHeight: 74,
    gap: 8,
  },
  home: {
    shieldWidth: 84,
    shieldHeight: 122,
    wordmarkWidth: 252,
    wordmarkHeight: 84,
    gap: 8,
  },
  splash: {
    shieldWidth: 116,
    shieldHeight: 168,
    wordmarkWidth: 286,
    wordmarkHeight: 96,
    gap: 12,
  },
};

export function CondoBrandLockup({
  size = "home",
  orientation = "horizontal",
  style,
}: CondoBrandLockupProps) {
  const preset = SIZE_PRESETS[size];
  const isHorizontal = orientation === "horizontal";

  return (
    <View style={[styles.container, isHorizontal ? styles.row : styles.column, style]}>
      <Image
        source={BRANDING.shield}
        style={{ width: preset.shieldWidth, height: preset.shieldHeight }}
        resizeMode="contain"
      />
      <Image
        source={BRANDING.wordmark}
        style={{
          width: preset.wordmarkWidth,
          height: preset.wordmarkHeight,
          marginLeft: isHorizontal ? preset.gap : 0,
          marginTop: isHorizontal ? 0 : preset.gap,
        }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
});
