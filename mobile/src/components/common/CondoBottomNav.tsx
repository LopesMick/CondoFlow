import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        const iconTint = isActive ? BRAND_COLORS.info : BRAND_COLORS.textStrong;
        const labelColor = isActive ? BRAND_COLORS.info : BRAND_COLORS.textStrong;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onPressTab?.(tab.key)}
            activeOpacity={0.85}
          >
            <View style={styles.iconWrap}>
              <Image
                source={BOTTOM_NAV_ICONS[tab.key]}
                style={[styles.iconImage, { tintColor: iconTint }]}
                resizeMode="contain"
              />
            </View>

            <Text style={[styles.label, { color: labelColor }]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
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
  },
});
