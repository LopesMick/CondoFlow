import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

export type CondoBottomTab = "home" | "search" | "center" | "notifications" | "profile";

interface CondoBottomNavProps {
  active: CondoBottomTab;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const tabs: Array<{ key: CondoBottomTab; label: string; icon: string }> = [
  { key: "home", label: "Inicio", icon: "H" },
  { key: "search", label: "Buscar", icon: "B" },
  { key: "center", label: "", icon: "C" },
  { key: "notifications", label: "Notificacoes", icon: "N" },
  { key: "profile", label: "Perfil", icon: "P" },
];

export function CondoBottomNav({ active, onPressTab }: CondoBottomNavProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        const isCenter = tab.key === "center";

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onPressTab?.(tab.key)}
            activeOpacity={0.85}
          >
            <View
              style={[
                styles.iconWrap,
                isCenter && styles.centerIconWrap,
                isCenter && isActive && styles.centerIconWrapActive,
                !isCenter && isActive && styles.iconWrapActive,
              ]}
            >
              <Text
                style={[
                  styles.iconText,
                  isCenter && styles.centerIconText,
                  isActive && !isCenter && styles.iconTextActive,
                ]}
              >
                {tab.icon}
              </Text>
            </View>

            {tab.label ? (
              <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            ) : null}
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
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapActive: {
    backgroundColor: BRAND_COLORS.surfaceSoft,
  },
  centerIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginTop: -18,
    backgroundColor: BRAND_COLORS.info,
    borderWidth: 4,
    borderColor: BRAND_COLORS.backgroundMuted,
  },
  centerIconWrapActive: {
    backgroundColor: BRAND_COLORS.primary,
  },
  iconText: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 13,
    fontWeight: "700",
  },
  centerIconText: {
    color: BRAND_COLORS.white,
    fontSize: 16,
  },
  iconTextActive: {
    color: BRAND_COLORS.info,
  },
  label: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 11,
  },
  labelActive: {
    color: BRAND_COLORS.info,
  },
});
