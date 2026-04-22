import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";

interface HomeMoradorScreenProps {
  onOpenCalls: () => void;
  onOpenVisitorRegistration: () => void;
  onOpenPackages: () => void;
  onOpenFinance: () => void;
  onOpenNotifications: () => void;
  onOpenSyndicHome: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const actions = [
  { key: "reservas", label: "Reservas", icon: "RS" },
  { key: "chamadas", label: "Chamadas", icon: "CH" },
  { key: "financeiro", label: "Financeiro", icon: "$" },
  { key: "visitantes", label: "Visitantes", icon: "VS" },
  { key: "encomendas", label: "Encomendas", icon: "EN" },
  { key: "notificacoes", label: "Notificacoes", icon: "NT", badge: 3 },
] as const satisfies ReadonlyArray<{
  key: string;
  label: string;
  icon: string;
  badge?: number;
}>;

const updates = [
  {
    id: "financeiro",
    icon: "F",
    title: "Financeiro",
    value: "R$400,00",
    status: "Concluido",
    details: "Ver detalhes",
  },
  {
    id: "reservas",
    icon: "R",
    title: "Reservas",
    value: "Play - 14/03",
    status: "Concluido",
    details: "14/03/2026",
  },
] as const;

export function HomeMoradorScreen({
  onOpenCalls,
  onOpenVisitorRegistration,
  onOpenPackages,
  onOpenFinance,
  onOpenNotifications,
  onOpenSyndicHome,
  onPressTab,
}: HomeMoradorScreenProps) {
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
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Hello, Matheus Pessoa!</Text>
            <Text style={styles.condoText}>Condominio Nova Luz | Apto 302 - Bloco A</Text>
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
          <TouchableOpacity style={styles.highlightCard} onPress={onOpenSyndicHome}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SM</Text>
            </View>

            <View style={styles.highlightTextBlock}>
              <Text style={styles.highlightTitle}>Sindico Mickael</Text>
              <Text style={styles.highlightSubtitle}>
                Elevador de servico em manutencao
              </Text>

              <View style={styles.highlightDivider} />

              <View style={styles.highlightFooter}>
                <Text style={styles.highlightMeta}>D 13 de Marco</Text>
                <Text style={styles.highlightMeta}>T 11:00 - 12:00 AM</Text>
              </View>
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

          <View style={styles.updatesWrap}>
            {updates.map((item) => (
              <TouchableOpacity key={item.id} style={styles.updateRow} activeOpacity={0.86}>
                <View style={styles.updateIcon}>
                  <Text style={styles.updateIconText}>{item.icon}</Text>
                </View>

                <View style={styles.updateMain}>
                  <Text style={styles.updateTitle}>{item.title}</Text>
                  <Text style={styles.updateValue}>{item.value}</Text>
                </View>

                <View style={styles.verticalLine} />
                <Text style={styles.updateStatus}>{item.status}</Text>
                <View style={styles.verticalLine} />
                <Text style={styles.updateDetails}>{item.details}</Text>
                <Text style={styles.updateChevron}>{">"}</Text>
              </TouchableOpacity>
            ))}
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
    fontSize: 19,
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
    fontSize: 15,
    lineHeight: 22,
  },
  highlightDivider: {
    marginTop: 10,
    height: 1,
    backgroundColor: BRAND_COLORS.whiteOverlay,
  },
  highlightFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  highlightMeta: {
    color: BRAND_COLORS.surfaceSoft,
    fontSize: 12,
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
  updatesWrap: {
    marginTop: 12,
    marginBottom: 6,
  },
  updateRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
  },
  updateIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: BRAND_COLORS.infoSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  updateIconText: {
    color: BRAND_COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
  updateMain: {
    width: 96,
  },
  updateTitle: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
  updateValue: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "700",
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 10,
  },
  updateStatus: {
    width: 70,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  updateDetails: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 14,
    textAlign: "right",
  },
  updateChevron: {
    color: BRAND_COLORS.text,
    fontSize: 22,
    marginLeft: 8,
  },
});
