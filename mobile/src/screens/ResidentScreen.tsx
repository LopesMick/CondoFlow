import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRANDING } from "../assets/branding";

interface ResidentScreenProps {
  onOpenRequests: () => void;
}

const quickActions = [
  { title: "Reservas", accent: "#7aa9ff" },
  { title: "Chamadas", accent: "#5f9bff" },
  { title: "Financeiro", accent: "#5d94f2" },
  { title: "Visitantes", accent: "#6aa2ff" },
  { title: "Encomendas", accent: "#6a98ff" },
  { title: "Notificacoes", accent: "#5f90f0" },
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

export function ResidentScreen({ onOpenRequests }: ResidentScreenProps) {
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
        <TouchableOpacity style={styles.highlightCard} onPress={onOpenRequests}>
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

        <View style={styles.actionGrid}>
          {quickActions.map((action) => {
            const isRequestAction = action.title === "Chamadas";

            return (
              <TouchableOpacity
                key={action.title}
                style={styles.actionCard}
                onPress={isRequestAction ? onOpenRequests : undefined}
                activeOpacity={0.85}
              >
                <View style={[styles.actionIcon, { backgroundColor: action.accent }]}>
                  <Text style={styles.actionIconText}>
                    {action.title.slice(0, 1)}
                  </Text>
                </View>
                <Text style={styles.actionLabel}>{action.title}</Text>
              </TouchableOpacity>
            );
          })}
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
    backgroundColor: "#f7ebeb",
  },
  headerArea: {
    backgroundColor: "#337eb7",
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
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "700",
  },
  condoText: {
    marginTop: 4,
    color: "#d9ecf8",
    fontSize: 12,
  },
  bellButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#d8e7f3",
    alignItems: "center",
    justifyContent: "center",
  },
  bellShape: {
    width: 12,
    height: 10,
    borderWidth: 1.5,
    borderColor: "#ffffff",
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
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 14,
    paddingTop: 24,
    paddingBottom: 10,
  },
  highlightCard: {
    backgroundColor: "#337eb7",
    borderRadius: 26,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#f3c6c6",
    marginRight: 12,
  },
  highlightTextBlock: {
    flex: 1,
  },
  highlightTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  highlightSubtitle: {
    color: "#dbeaf5",
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
    color: "#dcebf7",
    fontSize: 11,
  },
  highlightArrow: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 10,
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
    shadowColor: "#8cadde",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
  actionIconText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },
  actionLabel: {
    marginTop: 8,
    color: "#0f2438",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  updatesCard: {
    marginTop: 18,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#edf1f6",
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
    borderBottomColor: "#edf1f6",
  },
  updateIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#ebf3ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  updateIconText: {
    color: "#5b93f6",
    fontSize: 13,
    fontWeight: "700",
  },
  updateMain: {
    flex: 1,
  },
  updateCategory: {
    color: "#0f2438",
    fontSize: 14,
    fontWeight: "600",
  },
  updateValue: {
    marginTop: 2,
    color: "#4c84f2",
    fontSize: 12,
    fontWeight: "600",
  },
  updateStatusBlock: {
    width: 66,
    marginRight: 10,
  },
  updateStatus: {
    color: "#2f84da",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  updateDetails: {
    color: "#475467",
    fontSize: 11,
    marginRight: 6,
  },
  updateChevron: {
    color: "#0f2438",
    fontSize: 18,
  },
  bottomNav: {
    marginTop: 14,
    borderRadius: 18,
    backgroundColor: "#fbfbfc",
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
    backgroundColor: "#ebf2ff",
  },
  bottomTabIconText: {
    color: "#667085",
    fontSize: 14,
    fontWeight: "700",
  },
  bottomTabIconTextActive: {
    color: "#5d94f2",
  },
  bottomTabLabel: {
    color: "#667085",
    fontSize: 11,
  },
  bottomTabLabelActive: {
    color: "#5d94f2",
    fontWeight: "600",
  },
});
