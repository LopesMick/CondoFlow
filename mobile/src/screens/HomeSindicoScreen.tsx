import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";

interface HomeSindicoScreenProps {
  onOpenCalls: () => void;
  onOpenVisitorRegistration: () => void;
  onOpenPackages: () => void;
  onOpenFinance: () => void;
  onOpenNotifications: () => void;
  onOpenPorteiroHome: () => void;
  onOpenMoradorHome: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const actions = [
  { key: "reservas", label: "Reservas", icon: "RS" },
  { key: "chamadas", label: "Chamadas", icon: "CH" },
  { key: "financeiro", label: "Financeiro", icon: "$" },
  { key: "visitantes", label: "Visitantes", icon: "VS" },
  { key: "encomendas", label: "Encomendas", icon: "EN" },
  { key: "notificacoes", label: "Notificacoes", icon: "NT", badge: 3 },
  { key: "moradores", label: "Moradores", icon: "MR" },
  { key: "condominio", label: "Condominio", icon: "CD" },
] as const satisfies ReadonlyArray<{
  key: string;
  label: string;
  icon: string;
  badge?: number;
}>;

export function HomeSindicoScreen({
  onOpenCalls,
  onOpenVisitorRegistration,
  onOpenPackages,
  onOpenFinance,
  onOpenNotifications,
  onOpenPorteiroHome,
  onOpenMoradorHome,
  onPressTab,
}: HomeSindicoScreenProps) {
  const onPressAction = (key: (typeof actions)[number]["key"]) => {
    if (key === "chamadas") {
      onOpenCalls();
      return;
    }

    if (key === "financeiro") {
      onOpenFinance();
      return;
    }

    if (key === "visitantes") {
      onOpenVisitorRegistration();
      return;
    }

    if (key === "encomendas") {
      onOpenPackages();
      return;
    }

    if (key === "notificacoes") {
      onOpenNotifications();
      return;
    }

    if (key === "moradores") {
      onOpenPorteiroHome();
      return;
    }

    if (key === "condominio") {
      onOpenMoradorHome();
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Hello, Sindico Mickael!</Text>
            <Text style={styles.condoText}>Condominio Nova Luz | Apto 407 - Bloco B</Text>
          </View>
          <View style={styles.bellButton}>
            <View style={styles.bellShape} />
          </View>
        </View>

        <View style={styles.brandRow}>
          <Image source={BRANDING.shield} style={styles.shieldLogo} resizeMode="contain" />
          <Image source={BRANDING.wordmark} style={styles.wordmark} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity style={styles.highlightCard} activeOpacity={0.88}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SM</Text>
            </View>

            <View style={styles.highlightTextBlock}>
              <Text style={styles.highlightTitle}>Criar novo comunicado!</Text>
              <Text style={styles.highlightSubtitle}>
                Clique aqui para gerar um novo aviso no mural de moradores de seu condominio....
              </Text>
              <View style={styles.highlightDivider} />
            </View>

            <Text style={styles.highlightArrow}>{">"}</Text>
          </TouchableOpacity>

          <View style={styles.actionGrid}>
            {actions.map((action) => {
              const badge = "badge" in action ? action.badge : undefined;

              return (
                <TouchableOpacity
                  key={action.key}
                  style={styles.actionCard}
                  activeOpacity={0.86}
                  onPress={() => onPressAction(action.key)}
                >
                  <View style={styles.actionIcon}>
                    {badge ? (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{badge}</Text>
                      </View>
                    ) : null}
                    <Text style={styles.actionIconText}>{action.icon}</Text>
                  </View>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <CondoBottomNav active="home" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  headerArea: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 64,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  condoText: {
    marginTop: 2,
    color: BRAND_COLORS.surfaceSoft,
    fontSize: 12,
  },
  bellButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  bellShape: {
    width: 14,
    height: 12,
    borderWidth: 1.5,
    borderColor: BRAND_COLORS.primaryDark,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  brandRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  shieldLogo: {
    width: 64,
    height: 68,
  },
  wordmark: {
    width: 180,
    height: 56,
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 8,
  },
  highlightCard: {
    backgroundColor: BRAND_COLORS.primaryLight,
    borderRadius: 28,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 12,
    fontWeight: "700",
  },
  highlightTextBlock: {
    flex: 1,
  },
  highlightTitle: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  highlightSubtitle: {
    marginTop: 2,
    color: BRAND_COLORS.surfaceSoft,
    fontSize: 16,
    lineHeight: 26,
  },
  highlightDivider: {
    marginTop: 10,
    height: 1,
    backgroundColor: BRAND_COLORS.whiteOverlay,
  },
  highlightArrow: {
    color: BRAND_COLORS.white,
    fontSize: 25,
    marginLeft: 8,
  },
  actionGrid: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  actionCard: {
    width: "31.5%",
    alignItems: "center",
  },
  actionIcon: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: BRAND_COLORS.badgeRed,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: BRAND_COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  actionIconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  actionLabel: {
    marginTop: 8,
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});
