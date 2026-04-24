import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface CallsScreenProps {
  onGoBack: () => void;
  onOpenNewCall?: () => void;
  onOpenCallDetails?: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface MyCallItem {
  title: string;
  subtitle: string;
  category: string;
  tone: "danger" | "info" | "warning";
}

const myCalls: MyCallItem[] = [
  {
    title: "Lâmpada Queimada",
    subtitle: "No Corredor",
    category: "Manutenção",
    tone: "danger",
  },
  {
    title: "Piscina Precisa De",
    subtitle: "Limpeza",
    category: "Limpeza",
    tone: "info",
  },
  {
    title: "Barulho Alto No",
    subtitle: "Apartamento 302",
    category: "Reclamação",
    tone: "warning",
  },
];

export function CallsScreen({
  onGoBack,
  onOpenNewCall,
  onOpenCallDetails,
  onPressTab,
}: CallsScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Chamadas" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <TouchableOpacity style={styles.newCallButton} onPress={onOpenNewCall}>
            <Text style={styles.newCallButtonText}>Criar Uma Nova Chamada</Text>
          </TouchableOpacity>

          <Text style={styles.filterLabel}>Filtros:</Text>

          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Selecionar</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Minhas Chamadas:</Text>
          <View style={styles.sectionDivider} />

          {myCalls.map((item) => (
            <CallItemRow
              key={`${item.title}-${item.category}`}
              item={item}
              onPress={onOpenCallDetails}
            />
          ))}
        </ScrollView>

        <CondoBottomNav active="home" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function CallItemRow({ item, onPress }: { item: MyCallItem; onPress?: () => void }) {
  const toneColor =
    item.tone === "danger"
      ? BRAND_COLORS.danger
      : item.tone === "warning"
        ? BRAND_COLORS.pending
        : BRAND_COLORS.info;

  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.86}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={`${item.title} ${item.subtitle}, ${item.category}`}
    >
      <View style={styles.callIconWrap}>
        <Text style={styles.callIconText}>C</Text>
      </View>

      <View style={styles.personBlock}>
        <Text style={styles.personTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.personSubtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>

      <View style={styles.divider} />

      <Text style={[styles.categoryText, { color: toneColor }]} numberOfLines={2}>
        {item.category}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.details} numberOfLines={2}>
        Ver Detalhes {">"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  headerArea: {
    paddingBottom: 10,
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
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 10,
  },
  newCallButton: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 320,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  newCallButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  filterLabel: {
    marginBottom: 8,
    marginLeft: 10,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  selectField: {
    height: 44,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 16,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectPlaceholder: {
    color: BRAND_COLORS.mutedText,
    fontSize: 15,
  },
  selectArrow: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 18,
  },
  sectionTitle: {
    color: BRAND_COLORS.text,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
    marginLeft: 6,
  },
  sectionDivider: {
    width: "63%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 72,
    marginBottom: 6,
    paddingVertical: 4,
  },
  callIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  callIconText: {
    color: BRAND_COLORS.white,
    fontSize: 13,
    fontWeight: "700",
  },
  personBlock: {
    flex: 1.2,
    minWidth: 0,
    marginRight: 8,
  },
  personTitle: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  personSubtitle: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  divider: {
    width: 1,
    height: 42,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 8,
  },
  categoryText: {
    flex: 0.8,
    minWidth: 68,
    fontSize: 14,
    fontWeight: "700",
  },
  details: {
    flex: 0.95,
    color: BRAND_COLORS.info,
    fontSize: 13,
    lineHeight: 17,
    textAlign: "right",
  },
});
