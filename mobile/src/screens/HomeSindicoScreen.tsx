import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS, HOME_ICONS } from "../assets/branding";
import { CondoBrandLockup } from "../components/common/CondoBrandLockup";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";

interface HomeSindicoScreenProps {
  onOpenReservations: () => void;
  onOpenCalls: () => void;
  onOpenNewNotice: () => void;
  onOpenVisitorRegistration: () => void;
  onOpenPackages: () => void;
  onOpenFinance: () => void;
  onOpenNotifications: () => void;
  onOpenResidentListingSyndic: () => void;
  onOpenMoradorHome: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const actions = [
  { key: "reservas", label: "Reservas", iconSource: HOME_ICONS.reservas },
  { key: "chamadas", label: "Chamadas", iconSource: HOME_ICONS.chamadas },
  { key: "financeiro", label: "Financeiro", iconSource: HOME_ICONS.financeiro },
  { key: "visitantes", label: "Visitantes", iconSource: HOME_ICONS.visitantes },
  { key: "encomendas", label: "Encomendas", iconSource: HOME_ICONS.encomendas },
  { key: "notificacoes", label: "Notificações", iconSource: HOME_ICONS.notificacoes, badge: 3 },
  { key: "moradores", label: "Moradores", iconSource: HOME_ICONS.moradores },
  { key: "condominio", label: "Condomínio", iconSource: HOME_ICONS.condominio },
] as const satisfies ReadonlyArray<{
  key: string;
  label: string;
  iconSource: ImageSourcePropType;
  badge?: number;
}>;

export function HomeSindicoScreen({
  onOpenReservations,
  onOpenCalls,
  onOpenNewNotice,
  onOpenVisitorRegistration,
  onOpenPackages,
  onOpenFinance,
  onOpenNotifications,
  onOpenResidentListingSyndic,
  onOpenMoradorHome,
  onPressTab,
}: HomeSindicoScreenProps) {
  const onPressAction = (key: (typeof actions)[number]["key"]) => {
    if (key === "reservas") {
      onOpenReservations();
      return;
    }

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
      onOpenResidentListingSyndic();
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
            <Text style={styles.greeting}>Olá, Síndico Mickael!</Text>
            <Text style={styles.condoText}>Condomínio Nova Luz | Apto 407 - Bloco B</Text>
          </View>
          <TouchableOpacity
            style={styles.bellButton}
            onPress={onOpenNotifications}
            accessibilityRole="button"
            accessibilityLabel="Abrir notificacoes"
            activeOpacity={0.85}
          >
            <View style={styles.bellShape} />
          </TouchableOpacity>
        </View>

        <CondoBrandLockup size="home" style={styles.brandRow} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity
            style={styles.highlightCard}
            activeOpacity={0.88}
            onPress={onOpenNewNotice}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SM</Text>
            </View>

            <View style={styles.highlightTextBlock}>
              <Text style={styles.highlightTitle}>Criar novo comunicado!</Text>
              <Text style={styles.highlightSubtitle}>
                Clique aqui para gerar um novo aviso no mural de moradores do seu condomínio....
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
                    <Image source={action.iconSource} style={styles.actionIconImage} resizeMode="contain" />
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
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginTop: 16,
    alignSelf: "center",
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
  actionIconImage: {
    width: "46%",
    height: "46%",
    tintColor: BRAND_COLORS.white,
  },
  actionLabel: {
    marginTop: 8,
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});

