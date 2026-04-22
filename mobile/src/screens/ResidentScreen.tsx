import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";

interface ResidentScreenProps {
  onOpenRequests: () => void;
  onOpenCalls: () => void;
  onOpenSyndicCalls: () => void;
  onOpenVisitorRegistration: () => void;
  onOpenSupport: () => void;
  onOpenPackages: () => void;
  onOpenFinanceResident: () => void;
  onOpenFinanceSyndic: () => void;
}

const quickActions = [
  { title: "Reservas", accent: BRAND_COLORS.info },
  { title: "Chamadas", accent: BRAND_COLORS.primary },
  { title: "Financeiro", accent: BRAND_COLORS.pending },
  { title: "Visitantes", accent: BRAND_COLORS.info },
  { title: "Encomendas", accent: BRAND_COLORS.info },
  { title: "Ajuda", accent: BRAND_COLORS.accentDark },
] as const;

const updates = [
  {
    category: "Financeiro",
    value: "R$400,00",
    status: "Concluido",
    details: "Ver detalhes",
  },
  {
    category: "Reservas",
    value: "Play - 14/03",
    status: "Concluido",
    details: "14/03/2026",
  },
] as const;

const bottomTabs = ["Inicio", "Buscar", "Reservas", "Notificacoes", "Perfil"] as const;

export function ResidentScreen({
  onOpenRequests,
  onOpenCalls,
  onOpenSyndicCalls,
  onOpenVisitorRegistration,
  onOpenSupport,
  onOpenPackages,
  onOpenFinanceResident,
  onOpenFinanceSyndic,
}: ResidentScreenProps) {
  const handleQuickActionPress = (title: (typeof quickActions)[number]["title"]) => {
    if (title === "Chamadas") {
      onOpenCalls();
      return;
    }

    if (title === "Visitantes") {
      onOpenVisitorRegistration();
      return;
    }

    if (title === "Financeiro") {
      onOpenFinanceResident();
      return;
    }

    if (title === "Encomendas") {
      onOpenPackages();
      return;
    }

    if (title === "Ajuda") {
      onOpenSupport();
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Hello, Matheus Pessoa!</Text>
            <Text style={styles.condoText}>Condominio Novo Luz | Apto 302 - Bloco A</Text>
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

      <View style={styles.contentCard}>
        <TouchableOpacity style={styles.highlightCard} onPress={onOpenSyndicCalls}>
          <View style={styles.avatar} />

          <View style={styles.highlightTextBlock}>
            <Text style={styles.highlightTitle}>Sindico Mickael</Text>
            <Text style={styles.highlightSubtitle}>
              Elevador de servico em manutencao
            </Text>

            <View style={styles.highlightFooter}>
              <Text style={styles.highlightMeta}>13 de Marco</Text>
              <Text style={styles.highlightMeta}>11:00 - 12:00 AM</Text>
            </View>
          </View>

          <Text style={styles.highlightArrow}>{">"}</Text>
        </TouchableOpacity>

        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLinkButton} onPress={onOpenSupport}>
            <Text style={styles.quickLinkText}>Ajuda e Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkButton} onPress={onOpenRequests}>
            <Text style={styles.quickLinkText}>Ordens de Manutencao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkButton} onPress={onOpenFinanceResident}>
            <Text style={styles.quickLinkText}>Financeiro Morador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLinkButton} onPress={onOpenFinanceSyndic}>
            <Text style={styles.quickLinkText}>Financeiro Sindico</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionGrid}>
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.title}
              style={styles.actionCard}
              onPress={() => handleQuickActionPress(action.title)}
              activeOpacity={0.85}
            >
              <View style={[styles.actionIcon, { backgroundColor: action.accent }]}>
                <Text style={styles.actionIconText}>{action.title.slice(0, 1)}</Text>
              </View>
              <Text style={styles.actionLabel}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.updatesCard}>
          {updates.map((update, index) => (
            <View
              key={update.category}
              style={[styles.updateRow, index === 0 && styles.updateRowBorder]}
            >
              <View style={styles.updateIcon}>
                <Text style={styles.updateIconText}>{update.category.slice(0, 1)}</Text>
              </View>

              <View style={styles.updateMain}>
                <Text style={styles.updateCategory}>{update.category}</Text>
                <Text style={styles.updateValue}>{update.value}</Text>
              </View>

              <View style={styles.updateStatusBlock}>
                <Text style={styles.updateStatus}>{update.status}</Text>
              </View>

              <Text style={styles.updateDetails}>{update.details}</Text>
              <Text style={styles.updateChevron}>{">"}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomNav}>
          {bottomTabs.map((tab, index) => (
            <View key={tab} style={styles.bottomTab}>
              <View
                style={[
                  styles.bottomTabIcon,
                  index === 0 && styles.bottomTabIconActive,
                ]}
              >
                <Text
                  style={[
                    styles.bottomTabIconText,
                    index === 0 && styles.bottomTabIconTextActive,
                  ]}
                >
                  {tab.slice(0, 1)}
                </Text>
              </View>
              <Text style={[styles.bottomTabLabel, index === 0 && styles.bottomTabLabelActive]}>
                {tab}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundSoft,
  },
  headerArea: {
    backgroundColor: BRAND_COLORS.primaryLight,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 118,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    color: BRAND_COLORS.white,
    fontSize: 23,
    fontWeight: "700",
  },
  condoText: {
    marginTop: 4,
    color: BRAND_COLORS.accentSoft,
    fontSize: 12,
  },
  bellButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BRAND_COLORS.accentSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  bellShape: {
    width: 12,
    height: 10,
    borderWidth: 1.5,
    borderColor: BRAND_COLORS.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  brandRow: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  shieldLogo: {
    width: 60,
    height: 64,
  },
  wordmark: {
    width: 174,
    height: 48,
  },
  contentCard: {
    flex: 1,
    marginTop: -82,
    marginHorizontal: 14,
    backgroundColor: BRAND_COLORS.surface,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 14,
    paddingTop: 24,
    paddingBottom: 10,
  },
  highlightCard: {
    backgroundColor: BRAND_COLORS.primary,
    borderRadius: 26,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: BRAND_COLORS.accentSoft,
    marginRight: 12,
  },
  highlightTextBlock: {
    flex: 1,
  },
  highlightTitle: {
    color: BRAND_COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
  highlightSubtitle: {
    color: BRAND_COLORS.accentSoft,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
  highlightFooter: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  highlightMeta: {
    color: BRAND_COLORS.accentSoft,
    fontSize: 11,
  },
  highlightArrow: {
    color: BRAND_COLORS.white,
    fontSize: 24,
    marginLeft: 10,
  },
  quickLinks: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  quickLinkButton: {
    width: "48%",
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  quickLinkText: {
    color: BRAND_COLORS.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  actionGrid: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },
  actionCard: {
    width: "31%",
    alignItems: "center",
    paddingVertical: 6,
  },
  actionIcon: {
    width: 66,
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: BRAND_COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
  actionIconText: {
    color: BRAND_COLORS.white,
    fontSize: 24,
    fontWeight: "700",
  },
  actionLabel: {
    marginTop: 8,
    color: BRAND_COLORS.text,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  updatesCard: {
    marginTop: 18,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surface,
    borderWidth: 1,
    borderColor: BRAND_COLORS.borderSoft,
    overflow: "hidden",
  },
  updateRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  updateRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: BRAND_COLORS.borderSoft,
  },
  updateIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  updateIconText: {
    color: BRAND_COLORS.info,
    fontSize: 13,
    fontWeight: "700",
  },
  updateMain: {
    flex: 1,
  },
  updateCategory: {
    color: BRAND_COLORS.text,
    fontSize: 14,
    fontWeight: "600",
  },
  updateValue: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 12,
    fontWeight: "600",
  },
  updateStatusBlock: {
    width: 66,
    marginRight: 10,
  },
  updateStatus: {
    color: BRAND_COLORS.primary,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  updateDetails: {
    color: BRAND_COLORS.mutedText,
    fontSize: 11,
    marginRight: 6,
  },
  updateChevron: {
    color: BRAND_COLORS.text,
    fontSize: 18,
  },
  bottomNav: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.background,
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomTab: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  bottomTabIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabIconActive: {
    backgroundColor: BRAND_COLORS.surfaceSoft,
  },
  bottomTabIconText: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 14,
    fontWeight: "700",
  },
  bottomTabIconTextActive: {
    color: BRAND_COLORS.info,
  },
  bottomTabLabel: {
    color: BRAND_COLORS.textSubtle,
    fontSize: 11,
  },
  bottomTabLabelActive: {
    color: BRAND_COLORS.info,
    fontWeight: "600",
  },
});
