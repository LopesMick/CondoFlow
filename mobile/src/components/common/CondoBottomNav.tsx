import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { BOTTOM_NAV_ICONS, BRAND_COLORS } from "../../assets/branding";

export type CondoBottomTab = "home" | "search" | "center" | "notifications" | "profile";

interface CondoBottomNavProps {
  active: CondoBottomTab;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const tabs: Array<{ key: CondoBottomTab; label: string }> = [
  { key: "home", label: "Início" },
  { key: "search", label: "Buscar" },
  { key: "center", label: "Cadastro" },
  { key: "notifications", label: "Notificações" },
  { key: "profile", label: "Perfil" },
];

export function CondoBottomNav({ active, onPressTab }: CondoBottomNavProps) {
  return (
    <View style={styles.container} accessibilityRole="tablist">
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        const iconTint = isActive ? BRAND_COLORS.info : BRAND_COLORS.textSubtle;
        const labelColor = isActive ? BRAND_COLORS.info : BRAND_COLORS.textSubtle;

        return (
          <Pressable
            key={tab.key}
            style={({ pressed }) => [
              styles.tab,
              isActive && styles.tabActive,
              pressed && styles.tabPressed,
            ]}
            onPress={() => onPressTab?.(tab.key)}
            accessibilityRole="tab"
            accessibilityLabel={`Ir para ${tab.label}`}
            accessibilityState={{ selected: isActive }}
            hitSlop={6}
          >
            <View style={styles.iconWrap}>
              <Image
                source={BOTTOM_NAV_ICONS[tab.key]}
                style={[styles.iconImage, { tintColor: iconTint }]}
                resizeMode="contain"
              />
            </View>

            <Text style={[styles.label, { color: labelColor }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: Platform.select({ ios: 16, android: 12, default: 12 }),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: BRAND_COLORS.borderSoft,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
    paddingVertical: 6,
    borderRadius: 14,
  },
  tabActive: {
    backgroundColor: BRAND_COLORS.surfaceSoft,
  },
  tabPressed: {
    opacity: 0.72,
  },
  iconWrap: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
  },
});
